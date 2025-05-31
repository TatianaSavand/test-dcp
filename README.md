## 🏗️ Цифровой строительный паспорт

> Приложение для управления данными о строительных проектах: документы, участники, галерея, статус и многое другое.

## 📌 Обзор

**Цифровой строительный паспорт** — это одностраничное React-приложение с адаптивным интерфейсом, предназначенное для отображения и редактирования информации о строительных проектах.  
Поддерживает работу с локальными данными через `localStorage`, содержит модальные окна, таблицы, формы и другие элементы UI.

![image](https://github.com/user-attachments/assets/c1fb8ab0-b08a-4f8d-909f-b2a176a84109)
---

## 🔧 Основной функционал

| Функция | Описание |
|--------|----------|
| **Главная страница (`LandingPage`)** | Приветственная страница с фоновым изображением. |
| **Карточка проекта (`ProjectCardPage`)** | Основная страница проекта с данными: адрес, тип работ, даты и т.д. |
| **Галерея изображений (`GalleryPage`)** | Позволяет загружать и просматривать фотографии проекта. |
| **Организации (`OrganizationsPage`)** | Управление участниками проекта: добавление, удаление и просмотр организаций. |
| **Документы (`DocumentsPage`)** | Загрузка и управление документами (PDF, DOC, XLS и т.д.). |
| **Сайдбар и навигация (`Sidebar`, `Tabs`)** | Адаптивное меню и вкладки для навигации между разделами. |

---

![image](https://github.com/user-attachments/assets/f84521a4-b799-458e-b1a8-e842ab836bab)
![image](https://github.com/user-attachments/assets/d35fc1b5-19fb-493c-a39b-0adbb9792457)
![image](https://github.com/user-attachments/assets/06461178-f9bc-42d2-b1e5-8d96ce057b85)
![image](https://github.com/user-attachments/assets/1774be6f-0e06-437f-b081-da0d28f54ab6)
![image](https://github.com/user-attachments/assets/26a9cad4-d4ae-4170-8ac8-191e02c0e106)
![image](https://github.com/user-attachments/assets/401416d9-16e3-48f8-928d-a5fc1bb8acf8)

---

## 🧩 Архитектурные особенности

- **React + TypeScript**
- **react-router v6** для маршрутизации
- **Lucide-react** для иконок
- **TailwindCSS** для стилизации
- **LocalStorage** как временное хранилище данных
- **Custom hooks** (`useOrganizationData`) для управления состоянием
- **Reusables** (`InputField`, `SelectField`, `DisplayField`, `TextAreaField`) для унифицированного UI

---

## 🛠️ Технологии

- **React 19** + StrictMode
- **TypeScript** — полная типизация
- **Tailwind CSS** — утилитная стилизация
- **Lucide-react** — иконки
- **react-router-dom** — клиентская маршрутизация

---

## 🚀 Установка и запуск

### 1. Клонирование репозитория:

```bash
git clone <ваш-репозиторий>
```

### 2. Установка зависимостей:

```bash
npm install
# или
yarn install
```

### 3. Запуск локального сервера:

```bash
npm run dev
# или
yarn dev
```

Приложение будет доступно по адресу [http://localhost:5173](http://localhost:5173)

---

## 📚 Доступные страницы

| Путь | Назначение |
|------|------------|
| `/` | Главная страница (Landing) |
| `/project-card` | Карточка проекта |
| `/project-card/gallery` | Галерея проекта |
| `/project-card/documents` | Документы проекта |
| `/project-card/organizations` | Участники проекта |

---


## 📦 Хранение данных

Данные временно сохраняются в `localStorage`:

- `constructionProject` — текущие данные проекта
- `documents` — список загруженных документов
- `organizations` — список организаций

---

 ссылка на Условия использования отдельных сервисов Яндекс Карт:
https://yandex.ru/legal/maps_api/

