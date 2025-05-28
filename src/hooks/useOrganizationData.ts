import { useState, useEffect } from 'react';
import type { OrganizationTypes } from '../types/Organization.types.tsx';

/**
 * Хук useOrganizationData предоставляет функционал для работы с данными организаций.
 *
 * Поддерживает:
 * - Чтение начальных данных
 * - Добавление и удаление записей
 * - Сохранение в localStorage
 */
export const useOrganizationData = () => {
  // Моковые данные, используемые по умолчанию
  const defaultData: OrganizationTypes[] = [
    {
      role: 'Застройщик',
      organization: 'ООО "МРК "Пионер"',
      group: 'Группа компаний: ГК ПИОНЕР',
      current: 'Да',
      contacts: ['ул Гжатская 5, К3', 'Москва, Гжатская 5, К2'],
    },
    {
      role: 'Технический заказчик',
      organization: 'ООО "ПИОНЕРСТРОЙ ИНВЕСТ"',
      group: '',
      current: 'Да',
      contacts: ['ул Гжатская 5, К3', 'Москва, Гжатская 5, К2'],
    },
  ];

  // Инициализация состояния: пытаемся загрузить данные из localStorage
  const [organizations, setOrganizations] = useState<OrganizationTypes[]>(() => {
    const saved = localStorage.getItem('organizations');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Если сохранённые данные некорректны — возвращаем дефолтные
        return defaultData;
      }
    }
    return defaultData;
  });

  /**
   * Удаляет организацию по индексу
   * @param index Индекс элемента в массиве
   */
  const deleteOrganization = (index: number) => {
    setOrganizations((prev) => prev.filter((_, i) => i !== index));
  };

  /**
   * Сохраняет текущее состояние в localStorage
   * Выполняется каждый раз при изменении organizations
   */
  useEffect(() => {
    localStorage.setItem('organizations', JSON.stringify(organizations));
  }, [organizations]);

  /**
   * Добавляет новую организацию в список
   * @param org Объект организации, соответствующий типу OrganizationTypes
   */
  const addOrganization = (org: OrganizationTypes) => {
    setOrganizations((prev) => [...prev, org]);
  };

  return {
    organizations,
    addOrganization,
    deleteOrganization,
  };
};