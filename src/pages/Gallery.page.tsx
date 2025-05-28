import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Plus, Trash } from 'lucide-react';

/**
 * Типизация отдельного фото в галерее
 *
 * @property {string} src - URL изображения
 * @property {string} [alt] - альтернативный текст (опционально)
 */
type PhotoType = {
  src: string;
  alt?: string;
};

/**
 * Пропсы для компонента галереи
 *
 * @property {PhotoType[]} [initialPhotos] - начальные фотографии
 * @property {number} [columns=5] - количество колонок на разных устройствах
 */
type GalleryProps = {
  initialPhotos?: PhotoType[];
  columns?: number;
};

/**
 * Компонент GalleryPage реализует галерею изображений с возможностью:
 *
 * - Загрузки новых фото
 * - Просмотра в полноэкранном режиме
 * - Навигации между изображениями
 * - Удаления фото
 *
 * Все данные сохраняются в localStorage
 */
export default function GalleryPage({ initialPhotos = [], columns = 5 }: GalleryProps) {
  // Состояние выбранного фото (для полноэкранного просмотра)
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  // Список фото в галерее
  const [photos, setPhotos] = useState<PhotoType[]>(() => {
    const savedPhotos = localStorage.getItem('galleryPhotos');
    return savedPhotos ? JSON.parse(savedPhotos) : initialPhotos;
  });

  // Сохранение фото в localStorage при изменении списка
  useEffect(() => {
    try {
      localStorage.setItem('galleryPhotos', JSON.stringify(photos));
    } catch (error) {
      console.error('Ошибка сохранения в localStorage:', error);
      alert('Ошибка: Не хватает места для сохранения фото. Удалите лишние изображения.');
    }
  }, [photos]);

  // CSS-классы сетки в зависимости от количества колонок
  const gridClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  };

  /**
   * Открывает фото по индексу в полноэкранном режиме
   * Блокирует скролл страницы
   */
  const openPhoto = (index: number) => {
    setSelectedPhoto(index);
    document.body.style.overflow = 'hidden'; // Блокируем скролл
  };

  /**
   * Закрывает полноэкранный просмотр
   * Восстанавливает скролл страницы
   */
  const closePhoto = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto'; // Восстанавливаем скролл
  };

  /**
   * Перелистывает фото влево или вправо
   */
  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return;

    setSelectedPhoto((prev) => {
      if (prev === null) return null;

      if (direction === 'prev') {
        return prev === 0 ? photos.length - 1 : prev - 1;
      } else {
        return prev === photos.length - 1 ? 0 : prev + 1;
      }
    });
  };

  /**
   * Обработчик добавления нового изображения через input type="file"
   */
  const handleAddPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 МБ
    if (file.size > MAX_FILE_SIZE) {
      alert('Ошибка: Размер файла не должен превышать 5 МБ.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        const newPhoto: PhotoType = {
          src: event.target.result as string,
          alt: `Фото ${photos.length + 1}`,
        };
        setPhotos((prev) => [...prev, newPhoto]);
      }
    };
    reader.readAsDataURL(file);
  };

  /**
   * Удаляет фото по индексу
   * Если удалено текущее открытое фото — закрывает просмотр
   */
  const handleDeletePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));

    if (selectedPhoto === index) {
      closePhoto();
    }
  };

  return (
    <>
      {/* Кнопка добавления фото */}
      <div className="flex justify-center items-center mb-4">
        <label
          htmlFor="add-photo"
          className="cursor-pointer text-blue-500 hover:text-blue-700 flex items-center gap-1"
        >
          <Plus size={20} /> Добавить фото
        </label>
        <input
          id="add-photo"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleAddPhoto}
        />
      </div>

      {/* Галерея изображений */}
      <div className={`grid ${gridClasses[columns as keyof typeof gridClasses]} gap-4`}>
        {photos.map((photo, index) => (
          <div key={index} className="relative group">
            {/* Миниатюра изображения */}
            <div
              className="aspect-square overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openPhoto(index)}
            >
              <img
                src={photo.src}
                alt={photo.alt || `Фото ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Кнопка удаления (показывается при наведении) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeletePhoto(index);
              }}
              className="absolute top-1 right-1 text-red rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Удалить фото"
            >
              <Trash size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Полноэкранный просмотр изображения */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-90 z-50 flex items-center justify-center p-4">
          {/* Кнопка закрытия */}
          <button
            onClick={closePhoto}
            className="absolute top-4 right-4 text-white text-2xl p-2 hover:bg-white/10 rounded-full"
            aria-label="Закрыть"
          >
            <X />
          </button>

          {/* Кнопка "Предыдущее" */}
          <button
            onClick={() => navigatePhoto('prev')}
            className="absolute left-4 text-white text-2xl p-2 hover:bg-white/10 rounded-full"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft />
          </button>

          {/* Отображение текущего фото */}
          <div className="max-w-full max-h-[90vh]">
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt || `Фото ${selectedPhoto + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          {/* Кнопка "Следующее" */}
          <button
            onClick={() => navigatePhoto('next')}
            className="absolute right-4 text-white text-2xl p-2 hover:bg-white/10 rounded-full"
            aria-label="Следующее фото"
          >
            <ChevronRight />
          </button>

          {/* Индикатор номера фото */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            {selectedPhoto + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}