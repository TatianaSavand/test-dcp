import React from 'react';

/**
 * Типизация пропсов для SelectField
 *
 * @property {string} label - подпись поля
 * @property {string} name - имя поля формы
 * @property {string} value - текущее значение селекта
 * @property {{ value: string; label: string }[]} options - список доступных опций
 * @property {(e: React.ChangeEvent<HTMLSelectElement>) => void} onChange - обработчик изменения
 */
interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Компонент SelectField реализует выпадающий список с подписью.
 *
 * Используется в формах и карточках данных.
 * Поддерживает пустой вариант по умолчанию.
 */
export const SelectField: React.FC<SelectFieldProps> = ({
                                                          label,
                                                          name,
                                                          value,
                                                          options,
                                                          onChange,
                                                        }) => (
  <div className="space-y-1">
    {/* Подпись поля */}
    <label className="block text-sm font-medium text-gray-700">{label}</label>

    {/* Выпадающий список */}
    <select
      name={name}
      value={value || ''}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Выберите значение</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);