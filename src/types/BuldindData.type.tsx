export interface BuildingData {
  id: string;
  address: string;
  coordinates: [number, number];
  projectNumber: string;
  constructionType: string;
  startDatePlanned: string;
  endDatePlanned: string;
  // добавьте другие необходимые поля
}