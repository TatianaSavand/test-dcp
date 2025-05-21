import {FileText, MapPinIcon} from "lucide-react";
import Status from "./Status.tsx";

interface HeaderProjectCardProps {
  address: string;
  type: string;
  projectId: string;
}

export const HeaderProjectCard = ({address, type, projectId, }: HeaderProjectCardProps) => {
  return (
    <div className="space-y-2 mb-6">
      {/* Адрес */}
      <div className="flex items-center gap-2">
        <MapPinIcon className="h-5 w-5 text-gray-500"/>
        <h1 className="text-xl font-bold text-gray-800">{address}</h1>
      </div>

      {/* Тип объекта */}
      <p className="text-lg text-gray-600">{type}</p>

      {/* Номер проекта */}
      <div className="flex items-center gap-2 text-sm">
        <FileText className="h-4 w-4 text-gray-400"/>
        <span className="text-gray-500">
          Уникальный номер проекта: <span className="font-mono">{projectId}</span>
        </span>
      </div>

      {/* Статус */}
      <div className="pt-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-gray-700">Текущий статус:</span>
          <Status projectId={projectId}/>
        </div>
      </div>
    </div>
  );
};