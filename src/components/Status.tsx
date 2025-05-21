import { useState, useEffect } from 'react';
import {Check, ChevronDown} from "lucide-react";


type Status = {
  id: string;
  label: string;
  variant: 'default' | 'primary' | 'success' | 'danger' | 'warning';
};

const statusOptions: Status[] = [
  { id: 'in_progress', label: 'В строительстве', variant: 'primary' },
  { id: 'on_hold', label: 'На паузе', variant: 'warning' },
  { id: 'completed', label: 'Введен в эксплуатацию', variant: 'success' },
  { id: 'cancelled', label: 'Аварийный/под снос', variant: 'danger' },
  { id: 'unknown', label: 'Неизвестен', variant: 'default' },
];

export default function Status({
                                 projectId,
                                 initialStatus = 'unknown',
                                 onStatusChange,
                               }: {
  projectId: string;
  initialStatus?: string;
  onStatusChange?: (statusId: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<Status>(statusOptions[0]);

  // Загрузка сохраненного статуса при монтировании
  useEffect(() => {
    const savedStatus = localStorage.getItem(`projectStatus_${projectId}`);
    const statusToSet = savedStatus
      ? statusOptions.find(s => s.id === savedStatus)
      : statusOptions.find(s => s.id === initialStatus);

    if (statusToSet) {
      setSelectedStatus(statusToSet);
    }
  }, [projectId, initialStatus]);

  const handleSelect = (status: Status) => {
    setSelectedStatus(status);
    setIsOpen(false);

    // Сохраняем в localStorage
    localStorage.setItem(`projectStatus_${projectId}`, status.id);

    if (onStatusChange) {
      onStatusChange(status.id);
    }
  };

  const variantClasses = {
    default: 'bg-gray-200 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className="relative w-48 text-xs">
      <button
        type="button"
        className={`flex items-center justify-between w-full px-3 py-2 rounded-lg ${
          variantClasses[selectedStatus.variant]
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedStatus.label}</span>
        <ChevronDown
          size={16}
          className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {statusOptions.map((status) => (
            <div
              key={status.id}
              className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 ${
                selectedStatus.id === status.id ? 'bg-gray-100' : ''
              }`}
              onClick={() => handleSelect(status)}
            >
              <div className="flex items-center">
                <span
                  className={`inline-block w-3 h-3 rounded-full mr-2 ${
                    status.variant === 'default'
                      ? 'bg-gray-400'
                      : status.variant === 'primary'
                        ? 'bg-blue-400'
                        : status.variant === 'success'
                          ? 'bg-green-400'
                          : status.variant === 'warning'
                            ? 'bg-yellow-400'
                            : 'bg-red-400'
                  }`}
                ></span>
                {status.label}
              </div>
              {selectedStatus.id === status.id && <Check size={16} className="text-blue-500" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}