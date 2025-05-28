import React from 'react';

/**
 * Типизация пропсов для InputField
 *
 * @property {string} label - подпись поля
 * @property {string} name - имя поля (для формы и onChange)
 * @property {string} value - текущее значение инпута
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - обработчик изменения
 * @property {'text' | 'date'} [type='text'] - тип инпута (по умолчанию 'text')
 */
interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'date';
}

/**
 * Компонент InputField отображает текстовое поле с подписью.
 *
 * Используется в формах и режиме просмотта данных.
 * Поддерживает типы: text (по умолчанию), date.
 */
export const InputField: React.FC<InputFieldProps> = ({
                                                        label,
                                                        name,
                                                        value,
                                                        onChange,
                                                        type = 'text',
                                                      }) => (
  <div className="space-y-1">
    {/* Подпись поля */}
    <label className="block text-sm font-medium text-gray-700">{label}</label>

    {/* Текстовое поле */}
    <input
      type={type}
      name={name}
      value={value || ''}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);
