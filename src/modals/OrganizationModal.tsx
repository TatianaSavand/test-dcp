import React, { useState } from 'react';
import type { OrganizationTypes } from '../types/Organization.types.tsx';

/**
 * Типизация пропсов для модального окна добавления организации
 *
 * @property {boolean} isOpen - управляет видимостью модального окна
 * @property {() => void} onClose - колбэк для закрытия модального окна
 * @property {(org: OrganizationTypes) => void} onAdd - колбэк для добавления новой организации
 */
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (org: OrganizationTypes) => void;
}

/**
 * Компонент OrganizationModal реализует модальное окно для добавления новой организации
 * в список ответственных орагнизаций по проекту.
 *
 * Форма поддерживает ввод:
 * - Роли
 * - Названия организации
 * - Группы компаний
 * - Статуса актуальности
 * - Контактных данных (с возможностью добавления нескольких полей)
 */
export const OrganizationModal: React.FC<Props> = ({ isOpen, onClose, onAdd }) => {
  // Локальное состояние формы
  const [formData, setFormData] = useState({
    role: '',
    organization: '',
    group: '',
    current: 'Да',
    contacts: [''],
  });

  // Обработчик изменения текстовых полей
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Обновление конкретного поля контакта по индексу
  const handleContactChange = (index: number, value: string) => {
    const newContacts = [...formData.contacts];
    newContacts[index] = value;
    setFormData((prev) => ({ ...prev, contacts: newContacts }));
  };

  // Добавление нового поля для контакта
  const addContactField = () => {
    setFormData((prev) => ({ ...prev, contacts: [...prev.contacts, ''] }));
  };

  // Удаление поля контакта по индексу
  const removeContactField = (index: number) => {
    const newContacts = formData.contacts.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, contacts: newContacts }));
  };

  // Обработка отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка обязательных полей
    if (!formData.role || !formData.organization) return;

    // Передача данных во внешний обработчик
    onAdd(formData);

    // Сброс формы и закрытие модального окна
    setFormData({
      role: '',
      organization: '',
      group: '',
      current: 'Да',
      contacts: [''],
    });
    onClose();
  };

  // Не рендерим ничего, если модалка закрыта
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white/20 to-gray-200/40 backdrop-blur-md">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-xl">
        <h3 className="text-lg font-bold mb-4">Добавить организацию</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Поле: Роль */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Роль</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Поле: Организация */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Организация</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Поле: Группа компаний */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Группа компаний</label>
            <input
              type="text"
              name="group"
              value={formData.group}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Поле: Актуальный */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Актуальный</label>
            <select
              name="current"
              value={formData.current}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Да</option>
              <option>Нет</option>
            </select>
          </div>

          {/* Множественные поля: Контакты */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Контактные данные</label>
            {formData.contacts.map((contact, index) => (
              <div key={index} className="flex space-x-2 mt-1">
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => handleContactChange(index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeContactField(index)}
                  className="text-red-500 hover:text-red-700"
                  aria-label={`Удалить контакт ${index + 1}`}
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addContactField}
              className="mt-2 text-sm text-blue-600 hover:text-blue-800"
            >
              + Добавить контакт
            </button>
          </div>

          {/* Кнопки управления формой */}
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
