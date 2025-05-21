export type Primitive = string | number | Date;

export type NestedObject = {
  [key: string]: Primitive | NestedObject;
};

export interface ProjectDetailsProps {
  data: Record<string, Primitive | NestedObject>;
}