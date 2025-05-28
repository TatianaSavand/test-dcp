import React from 'react';

/**
 * Типизация пропсов для текстовой области
 *
 * @property {string} label - подпись поля (например: "Программа реализации")
 * @property {string} name - имя поля формы
 * @property {string} value - текущее значение textarea
 * @property {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} onChange - обработчик изменения
 * @property {number} [rows=2] - количество отображаемых строк (по умолчанию 2)
 */
interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

/**
 * Компонент TextAreaField реализует поле ввода многострочного текста с подписью.
 *
 * Используется в формах и карточках данных.
 * Поддерживает кастомизацию высоты через параметр rows.
 */
export const TextAreaField: React.FC<TextAreaFieldProps> = ({
                                                              label,
                                                              name,
                                                              value,
                                                              onChange,
                                                              rows = 2,
                                                            }) => (
  <div className="space-y-1">
    {/* Подпись текстовой области */}
    <label className="block text-sm font-medium text-gray-700">{label}</label>

    {/* Многострочное текстовое поле */}
    <textarea
      name={name}
      value={value || ''}
      onChange={onChange}
      rows={rows}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);