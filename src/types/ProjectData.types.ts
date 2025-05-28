// Типизация данных проекта строительства
export interface ConstructionProject {
  constructionAddress: string;      // Адрес строительства
  workType: string;                 // Тип работ (например: "Новое строительство")
  fundingSource: string;            // Источник финансирования
  plannedStartDate: string;         // Планируемая дата начала
  actualStartDate: string;          // Фактическая дата начала
  plannedCompletionDate: string;    // Планируемая дата завершения
  actualCompletionDate: string;     // Фактическая дата завершения
  plannedCommissioningDate: string;  // Планируемая дата ввода в эксплуатацию
  actualCommissioningDate: string;   // Фактическая дата ввода в эксплуатацию
  isRenovation: boolean;            // Признак реконструкции
  inputObject: string;              // Входной объект
  program: string;                  // Программа реализации проекта
}

// Пустой проект по умолчанию
export const emptyProject: ConstructionProject = {
  constructionAddress: '',
  workType: '',
  fundingSource: '',
  plannedStartDate: '',
  actualStartDate: '',
  plannedCompletionDate: '',
  actualCompletionDate: '',
  plannedCommissioningDate: '',
  actualCommissioningDate: '',
  isRenovation: false,
  inputObject: '',
  program: '',
};

// Данные для тестирования и демонстрации
export const mockProject: ConstructionProject = {
  ...emptyProject,
  constructionAddress: 'ул. Строителей, д. 123, г. Стройград',
  workType: 'Новое строительство',
  fundingSource: 'Частные инвестиции',
  plannedStartDate: '2023-01-15',
  plannedCompletionDate: '2024-06-30',
};

// Данные, используемые для отображения на карте
export interface BuildingData {
  id: string;                     // Уникальный идентификатор проекта
  address: string;                // Адрес строительства
  coordinates: [number, number];  // Географические координаты [долгота, широта]
  projectNumber: string;          // Номер проекта
  constructionType: string;       // Тип строительства (например: "Жилой комплекс")
  startDatePlanned: string;       // Планируемая дата начала
  endDatePlanned: string;         // Планируемая дата завершения
}