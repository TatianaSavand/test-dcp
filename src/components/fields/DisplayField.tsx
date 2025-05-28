import React from 'react';

/**
 * Типизация пропсов для DisplayField
 *
 * @property {string} label - подпись поля (например: "Адрес")
 * @property {string | null | undefined} value - значение, которое нужно отобразить
 */
interface DisplayFieldProps {
  label: string;
  value: string | null | undefined;
}

/**
 * Компонент DisplayField отображает пару "подпись + значение"
 *
 * Используется для отображения данных в режиме просмотта (non-editable).
 * Если значение отсутствует (null или undefined), отображается символ "—".
 */
export const DisplayField: React.FC<DisplayFieldProps> = ({ label, value }) => (
  <div className="space-y-1">
    {/* Подпись поля */}
    <label className="block text-sm font-medium text-gray-700">{label}</label>

    {/* Значение поля */}
    <div className="p-2 bg-gray-50 rounded-md whitespace-pre-line">
      {value || '—'}
    </div>
  </div>
);