import type {FC} from "react";
import type {NestedObject, Primitive} from "../types/ProjectCard.types.tsx";
import {BuildingMap} from "../components/BuildingMap.tsx";
import {type BuildingData} from "../types/BuldindData.type.tsx";

interface ProjectDetailsProps {
  data: Record<string, Primitive | NestedObject>;
}

export const buildingData: BuildingData = {
  id: 'HR3498-10-0001-99',
  address: 'ул. Гжатская, вл. 9',
  coordinates: [59.999795, 30.380960],
  projectNumber: 'HR3498-10-0001-99',
  constructionType: 'Жилой комплекс',
  startDatePlanned: '2023-01-15',
  endDatePlanned: '2025-12-31',
};

export const ProjectCardPage: FC<ProjectDetailsProps> = ({data}) => {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-slate-200 overflow-hidden pb-8">
      {/* Левая колонка (2/3 ширины экрана на десктопе) */}
      <div className="lg:w-2/3 w-full lg:pe-2 mx-4">
        <div className="bg-white rounded-lg shadow-md h-full p-6 lg:p-8 lg:me-0 my-4 sm:me-4">
          <h2 className="text-xl font-bold mb-4">Описание проекта строительства</h2>
          <div className="space-y-4">
            {Object.entries(data).map(([key, value], index) => {
              if (typeof value === 'object' && !Array.isArray(value)) {
                return Object.entries(value).map(([subKey, subValue], subIndex) => (
                  <div key={`${index}-${subIndex}`} className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-gray-700 sm:w-1/3 shrink-0">{`${key}: ${subKey}`}</span>

                    <div className="relative flex-1 h-4 sm:h-auto">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                    </div>

                    <span className="text-gray-500 text-right sm:w-2/3 whitespace-pre-line shrink-0">
                  {isDate(subValue) ? subValue.toLocaleDateString() : String(subValue)}
                </span>
                  </div>
                ));
              } else {
                return (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-gray-700 sm:w-1/3 shrink-0">{key}</span>

                    <div className="relative flex-1 h-4 sm:h-auto">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                    </div>

                    <span className="text-gray-500 text-right sm:w-2/3 whitespace-pre-line shrink-0">
                  {isDate(value) ? value.toLocaleDateString() : String(value)}
                </span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      {/* Правая колонка (1/3 ширины экрана на десктопе) */}
      <div className="lg:w-1/3 w-full lg:ps-2 bg-slate-200 me-4">
        <div className="flex flex-col gap-4 w-full h-full lg:mt-4 my-4">
          {/* Аватар проекта */}
          <div className='h-1/2 rounded-lg shadow-md overflow-hidden'>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(https://avatars.mds.yandex.net/i?id=f0c023772a3d5edf7e2c8cf8fd1d6c0e_l-5347559-images-thumbs&n=13)'
              }}
            ></div>
          </div>
          {/* Карта */}
          <div className="bg-white h-1/2 rounded-lg shadow-md">
            <section className="p-2 flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-4">Карта</h2>
              <BuildingMap
                address={buildingData.address}
                coordinates={buildingData.coordinates}
              />
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Вспомогательная функция для проверки типа ---
function isDate(date: any): date is Date {
  return date instanceof Date;
}

export default ProjectCardPage;