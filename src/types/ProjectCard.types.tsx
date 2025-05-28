// Примитивные типы данных, используемые в проекте
export type Primitive = string | number | Date;

// Вложенный объект — поддерживает рекурсивную структуру
export type NestedObject = {
  [key: string]: Primitive | NestedObject;
};

/**
 * Интерфейс props для компонента ProjectDetails.
 *
 * @property {Record<string, Primitive | NestedObject>} data - данные проекта,
 *   где ключи представляют поля, а значения могут быть примитивами или вложенными объектами.
 */
export interface ProjectDetailsProps {
  data: Record<string, Primitive | NestedObject>;
}