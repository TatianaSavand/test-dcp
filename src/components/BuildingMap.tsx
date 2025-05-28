import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

interface BuildingMapProps {
  address: string;
  coordinates: [number, number];
}

/**
 * Компонент BuildingMap отображает карту с меткой,
 * соответствующей указанному зданию.
 *
 * @param {{
 *   address: string;
 *   coordinates: [number, number];
 * }} props - параметры компонента
 * @param {string} props.address - адрес объекта для отображения
 * @param {[number, number]} props.coordinates - долгота и широта точки на карте
 */
export const BuildingMap = ({ address, coordinates }: BuildingMapProps) => {
  return (
    <div className="h-full w-full rounded-lg border border-gray-200 shadow-sm">
      {/* Инициализация API Яндекс Карт */}
      <YMaps query={{ apikey: 'dfdcb4d7-7dce-41e9-91d2-c646a44a1ac3', lang: 'ru_RU' }}>
        {/* Карта с центром на заданных координатах */}
        <Map
          defaultState={{
            center: coordinates,
            zoom: 18,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
          width="100%"
          height="100%"
          className="h-[380px] rounded-lg"
        >
          {/* Метка с информацией об объекте */}
          <Placemark
            geometry={coordinates}
            modules={['geoObject.addon.balloon']}
            properties={{
              balloonContent: address,
              iconCaption: address,
            }}
            options={{
              // Используем предустановленный стиль иконки здания
              preset: 'islands#darkBlueBuildingIcon',
              // Цвет иконки переопределяется вручную
              iconColor: '#ff0000',
              // Не скрывать иконку при открытии балуна
              hideIconOnBalloonOpen: false,
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};