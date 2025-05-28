import React, { useState, useEffect } from 'react';
import { Trash } from 'lucide-react';

// Типы и интерфейсы

/**
 * Формат файла документа (расширение).
 */
type DocumentFormat = 'pdf' | 'doc' | 'xls' | 'jpg' | 'png' | 'zip' | 'unknown';

/**
 * Интерфейс элемента документа.
 *
 * @property {string} id - уникальный идентификатор
 * @property {string} title - название файла
 * @property {DocumentFormat} format - формат файла
 * @property {string} size - размер файла
 * @property {string} url - URL для отображения/скачивания
 */
interface DocumentItem {
  id: string;
  title: string;
  format: DocumentFormat;
  size: string;
  url: string;
}

/**
 * Компонент DocumentsPage реализует страницу загрузки и управления документами.
 *
 * Возможности:
 * - Загрузка нескольких файлов
 * - Отображение списка документов
 * - Удаление документов
 * - Сохранение данных в localStorage
 */
export const DocumentsPage = () => {
  // Состояния
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<DocumentItem[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Иконки для форматов файлов
  const formatIcons: Record<DocumentFormat, string> = {
    pdf: '📄',
    doc: '📝',
    xls: '📊',
    jpg: '🖼️',
    png: '🖼️',
    zip: '🗄️',
    unknown: '📎',
  };

  // Загрузка сохранённых документов из localStorage при монтировании
  useEffect(() => {
    try {
      const savedDocs = JSON.parse(localStorage.getItem('documents') || '[]');
      setUploadedFiles(savedDocs);
    } catch (e) {
      console.error('Ошибка чтения localStorage', e);
      setErrorMessage('Не удалось загрузить файлы — localStorage повреждён или переполнен.');
    }
  }, []);

  /**
   * Определяет формат файла по расширению.
   * @param filename Название файла
   * @returns Распознанный формат или 'unknown'
   */
  const getFormatFromFileName = (filename: string): DocumentFormat => {
    const ext = filename.split('.').pop()?.toLowerCase() || '';
    if (['pdf'].includes(ext)) return 'pdf';
    if (['doc', 'docx'].includes(ext)) return 'doc';
    if (['xls', 'xlsx'].includes(ext)) return 'xls';
    if (['jpg', 'jpeg'].includes(ext)) return 'jpg';
    if (['png'].includes(ext)) return 'png';
    if (['zip', 'rar', '7z'].includes(ext)) return 'zip';
    return 'unknown';
  };

  /**
   * Обработчик выбора файлов пользователем.
   * Проверяет размер и тип, преобразует в объект DocumentItem и сохраняет.
   */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    selectedFiles.forEach((file) => {
      // Проверка размера файла (максимум 5 МБ)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage(`Файл "${file.name}" превышает 5 МБ.`);
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        try {
          const fileDataUrl = reader.result as string;

          const documentItem: DocumentItem = {
            id: `upload-${Math.random().toString(36).substring(2, 11)}`,
            title: file.name,
            format: getFormatFromFileName(file.name),
            size: `${(file.size / 1024).toFixed(1)} KB`,
            url: fileDataUrl,
          };

          saveDocumentToLocal(documentItem);
          setUploadedFiles((prev) => [...prev, documentItem]);
          setErrorMessage(null); // Сброс ошибок
        } catch (err) {
          console.error('Ошибка сохранения файла:', err);
          setErrorMessage('Не удалось сохранить файл — возможно, закончилось место в хранилище.');
        }
      };

      reader.onerror = () => {
        setErrorMessage(`Ошибка чтения файла "${file.name}".`);
      };

      reader.readAsDataURL(file);
    });
  };

  /**
   * Сохраняет документ в localStorage.
   * @param doc Объект документа
   */
  const saveDocumentToLocal = (doc: DocumentItem) => {
    try {
      const storedDocs = JSON.parse(localStorage.getItem('documents') || '[]');
      storedDocs.push(doc);
      localStorage.setItem('documents', JSON.stringify(storedDocs));
    } catch (e) {
      throw new Error('localStorage переполнен или недоступен.');
    }
  };

  /**
   * Удаляет документ по его ID.
   * Обновляет состояние и localStorage.
   * @param id Уникальный идентификатор документа
   */
  const handleDeleteDocument = (id: string) => {
    const updatedFiles = uploadedFiles.filter((doc) => doc.id !== id);
    setUploadedFiles(updatedFiles);
    localStorage.setItem('documents', JSON.stringify(updatedFiles));

    if (selectedDoc?.id === id) {
      setSelectedDoc(null);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Сообщение об ошибках */}
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm sm:text-base">
          {errorMessage}
        </div>
      )}

      {/* Поле загрузки файлов */}
      <div className="mb-6">
        <label
          htmlFor="file-upload"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Загрузите документы
        </label>
        <input
          id="file-upload"
          type="file"
          multiple
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip"
          className="
            block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0 file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
          "
        />
      </div>

      {/* Список загруженных документов */}
      <div>
        {uploadedFiles.length === 0 ? (
          <p className="text-gray-500 text-sm italic">Нет загруженных документов</p>
        ) : (
          <ul className="space-y-3">
            {uploadedFiles.map((doc) => (
              <li
                key={doc.id}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer rounded-md transition-colors ${
                  selectedDoc?.id === doc.id ? 'bg-indigo-50' : 'hover:bg-indigo-50'
                }`}
                onClick={() => setSelectedDoc(doc)}
                role="option"
                aria-selected={selectedDoc?.id === doc.id}
              >
                <div className="flex items-center flex-1 min-w-0">
                  <span className="mr-3 text-xl">{formatIcons[doc.format]}</span>
                  <div className="flex-1 min-w-0">
                    <p className="truncate font-medium">{doc.title}</p>
                    <p className="text-xs text-gray-500">{doc.size}</p>
                  </div>
                </div>
                {/* Кнопка удаления документа */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteDocument(doc.id);
                  }}
                  className="z-50"
                  aria-label={`Удалить документ ${doc.title}`}
                >
                  <Trash size={18} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};