import React, { useState, useEffect } from 'react';
import type { BuildingData, ConstructionProject } from '../types/ProjectData.types.ts';
import { emptyProject, mockProject } from '../types/ProjectData.types.ts';

import { BuildingMap } from '../components/BuildingMap';
import {DisplayField} from "../components/fields/DisplayField.tsx";
import {InputField} from "../components/fields/InputField.tsx";
import {TextAreaField} from "../components/fields/TextAreaField.tsx";
import {SelectField} from "../components/fields/SelectField.tsx";

// Данные для карты
export const buildingData: BuildingData = {
  id: 'HR3498-10-0001-99',
  address: 'ул. Гжатская, вл. 9',
  coordinates: [59.999795, 30.380960],
  projectNumber: 'HR3498-10-0001-99',
  constructionType: 'Жилой комплекс',
  startDatePlanned: '2023-01-15',
  endDatePlanned: '2025-12-31',
};

/**
 * Компонент ProjectCardPage — страница карточки проекта.
 *
 * Позволяет просматривать и редактировать данные проекта.
 * Сохраняет изменения в localStorage.
 */
const ProjectCardPage = () => {
  const [project, setProject] = useState<ConstructionProject>(emptyProject);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Загрузка данных проекта
  useEffect(() => {
    const loadProjectData = () => {
      try {
        const savedData = localStorage.getItem('constructionProject');
        setProject(savedData ? JSON.parse(savedData) : mockProject);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        setProject(mockProject);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjectData();
  }, []);

  // Сохранение данных в localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('constructionProject', JSON.stringify(project));
    }
  }, [project, isLoading]);

  // Обработчик изменения полей
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setProject((prev) => ({
      ...prev,
      [name]: checked !== undefined ? checked : value,
    }));
  };

  const toggleEditMode = () => setIsEditing(!isEditing);

  const formatDisplayDate = (dateString: string): string => {
    if (!dateString) return '—';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? dateString : date.toLocaleDateString();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="text-gray-500">Загрузка данных...</span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 w-full">
      <div className="flex flex-col lg:flex-row gap-6 w-full overflow-hidden">
        {/* Левая колонка */}
        <div className="lg:w-2/3 w-full">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 h-full">
            {/* Заголовок и кнопка редактирования */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Описание объекта строительства
              </h1>
              <button
                onClick={toggleEditMode}
                className={`px-4 py-2 rounded-md ${
                  isEditing
                    ? 'bg-gray-500 hover:bg-gray-600'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white transition-colors`}
              >
                {isEditing ? 'Отмена' : 'Редактировать'}
              </button>
            </div>

            {/* Форма проекта */}
            <div className="space-y-6">
              {/* Блок основной информации */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {isEditing ? (
                  <>
                    <InputField
                      label="Адрес строительства"
                      name="constructionAddress"
                      value={project.constructionAddress}
                      onChange={handleChange}
                    />
                    <SelectField
                      label="Тип работ"
                      name="workType"
                      value={project.workType}
                      onChange={handleChange}
                      options={[
                        { value: 'Новое строительство', label: 'Новое строительство' },
                        { value: 'Реконструкция', label: 'Реконструкция' },
                        { value: 'Капитальный ремонт', label: 'Капитальный ремонт' },
                      ]}
                    />
                    <SelectField
                      label="Источник финансирования"
                      name="fundingSource"
                      value={project.fundingSource}
                      onChange={handleChange}
                      options={[
                        { value: 'Бюджет', label: 'Бюджет' },
                        { value: 'Частные инвестиции', label: 'Частные инвестиции' },
                        {
                          value: 'Государственно-частное партнёрство',
                          label: 'Государственно-частное партнёрство',
                        },
                      ]}
                    />
                  </>
                ) : (
                  <>
                    <DisplayField
                      label="Адрес строительства"
                      value={project.constructionAddress}
                    />
                    <DisplayField label="Тип работ" value={project.workType} />
                    <DisplayField label="Источник финансирования" value={project.fundingSource} />
                  </>
                )}
              </div>

              {/* Хронология проекта */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Планируемая дата начала', name: 'plannedStartDate' },
                    { label: 'Фактическая дата начала', name: 'actualStartDate' },
                    { label: 'Планируемая дата завершения', name: 'plannedCompletionDate' },
                    { label: 'Фактическая дата завершения', name: 'actualCompletionDate' },
                    { label: 'Планируемая дата ввода', name: 'plannedCommissioningDate' },
                    { label: 'Фактическая дата ввода', name: 'actualCommissioningDate' },
                  ].map(({ label, name }) =>
                    isEditing ? (
                      <InputField
                        key={name}
                        label={label}
                        name={name}
                        value={project[name as keyof ConstructionProject] as string}
                        onChange={handleChange}
                        type="date"
                      />
                    ) : (
                      <DisplayField
                        key={name}
                        label={label}
                        value={formatDisplayDate(
                          project[name as keyof ConstructionProject] as string
                        )}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Дополнительная информация */}
              <div className="space-y-4">
                {isEditing ? (
                  <>
                    <TextAreaField
                      label="Входной объект"
                      name="inputObject"
                      value={project.inputObject}
                      onChange={handleChange}
                    />
                    <TextAreaField
                      label="Программа"
                      name="program"
                      value={project.program}
                      onChange={handleChange}
                    />
                  </>
                ) : (
                  <>
                    <DisplayField label="Входной объект" value={project.inputObject} />
                    <DisplayField label="Программа" value={project.program} />
                  </>
                )}
              </div>

              {/* Кнопка сохранения */}
              {isEditing && (
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={toggleEditMode}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    Сохранить изменения
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="lg:w-1/3 w-full flex flex-col gap-6 overflow-hidden">
          {/* Аватар проекта */}
          <div className="rounded-lg shadow-md overflow-hidden flex-1 min-h-[200px]">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url(https://avatars.mds.yandex.net/i?id=f0c023772a3d5edf7e2c8cf8fd1d6c0e_l-5347559-images-thumbs&n=13 )',
              }}
              aria-label="Изображение проекта"
            />
          </div>

          {/* Карта */}
          <div className="bg-white rounded-lg shadow-md p-4 flex-1 min-h-[300px]">
            <section className="flex flex-col items-center h-full">
              <h2 className="text-xl font-semibold mb-4">Карта</h2>
              <div className="w-full h-full">
                <BuildingMap
                  address={buildingData.address}
                  coordinates={buildingData.coordinates}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardPage;