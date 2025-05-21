import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

interface BuildingMapProps {
  address: string;
  coordinates: [number, number]; // [долгота, широта]
}

export const BuildingMap = ({ address, coordinates }: BuildingMapProps) => {
  return (
    <div className="h-full w-full rounded-lg border border-gray-200 shadow-sm">
      <YMaps query={{ apikey: 'dfdcb4d7-7dce-41e9-91d2-c646a44a1ac3', lang: 'ru_RU' }}>
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
          <Placemark
            geometry={coordinates}
            modules={['geoObject.addon.balloon']}
            properties={{
              balloonContent: address,
              iconCaption: address,
            }}
            options={{
              preset: 'islands#darkBlueBuildingIcon',
              iconColor: '#ff0000',
              hideIconOnBalloonOpen: false, // Не скрывать иконку при открытии балуна
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};