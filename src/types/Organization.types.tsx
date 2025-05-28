/**
 * Типизация данных об организации.
 */
export interface OrganizationTypes {
  role: string;       // Роль в проекте (например: "Застройщик")
  organization: string; // Название организации
  group: string;      // Группа компаний
  current: string;    // Актуальность ("Да" или "Нет")
  contacts: string[]; // Контактная информация
}