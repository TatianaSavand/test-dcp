import React, { useState } from 'react';
import type { OrganizationTypes } from '../types/Organization.types.tsx';
import { Plus } from 'lucide-react';

// Хук для работы с данными организаций
import { useOrganizationData } from '../hooks/useOrganizationData';
// Компонент таблицы организаций
import OrganizationTable from '../components/OrganizationTable';
// Модальное окно добавления организации
import { OrganizationModal } from '../modals/OrganizationModal';

/**
 * Компонент OrganizationsPage отображает страницу управления списком организаций.
 *
 * Содержит:
 * - Заголовок
 * - Таблицу с организациями
 * - Кнопку добавления новой организации
 * - Модальное окно для добавления записи
 */
export const OrganizationsPage: React.FC = () => {
  // Получаем данные и функции через хук
  const { organizations, addOrganization, deleteOrganization } = useOrganizationData();
  // Управляем состоянием модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Обработчик добавления новой организации
  const handleAdd = (newOrg: OrganizationTypes) => {
    addOrganization(newOrg);
  };

  // Обработчик удаления организации по индексу
  const handleDelete = (index: number) => {
    deleteOrganization(index);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Шапка страницы */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Организации</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none"
          aria-label="Добавить организацию"
        >
          <Plus />
        </button>
      </div>

      {/* Таблица с данными об организациях */}
      <OrganizationTable organizations={organizations} onDelete={handleDelete} />

      {/* Модальное окно добавления организации */}
      <OrganizationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
};
