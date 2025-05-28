import React from 'react';
import type { OrganizationTypes } from '../types/Organization.types.tsx'; // Импорт типа организации
import { Trash } from 'lucide-react';

/**
 * Типизация props для таблицы организаций
 *
 * @property {OrganizationTypes[]} organizations - массив организаций для отображения
 * @property {(index: number) => void} onDelete - функция удаления организации по индексу
 */
interface Props {
  organizations: OrganizationTypes[];
  onDelete: (index: number) => void;
}

/**
 * Компонент OrganizationTable отображает список организаций в табличном виде.
 *
 * Позволяет просматривать информацию о ролях, названиях, группах,
 * актуальности и контактах каждой организации. Также поддерживает удаление записей.
 */
const OrganizationTable: React.FC<Props> = ({ organizations, onDelete }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      {/* Заголовок таблицы */}
      <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Роль</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Организация</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Актуальный</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Контакты</th>
      </tr>
      </thead>

      {/* Тело таблицы с данными */}
      <tbody className="bg-white divide-y divide-gray-200">
      {organizations.map((org, index) => (
        <tr key={index}>
          {/* Роль в организации */}
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{org.role}</td>

          {/* Название организации и группа (если есть) */}
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div className="flex flex-col">
              <span className="font-medium text-blue-600 hover:underline">{org.organization}</span>
              {org.group && <span className="text-gray-500">{org.group}</span>}
            </div>
          </td>

          {/* Статус "актуальный" */}
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{org.current ? 'Да' : 'Нет'}</td>

          {/* Контакты — отображаются списком */}
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <ul className="pl-4 list-disc">
              {org.contacts.map((contact, idx) => (
                <li key={idx}>{contact}</li>
              ))}
            </ul>
          </td>

          {/* Кнопка удаления */}
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <button
              onClick={() => onDelete(index)}
              className="text-red-600 hover:text-red-900"
              aria-label={`Удалить организацию ${org.organization}`}
            >
              <Trash size={16} />
            </button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default OrganizationTable;