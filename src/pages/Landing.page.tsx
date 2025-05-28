import backgroundImage from '../assets/Image.png';

/**
 * Компонент LandingPage реализует стартовую страницу приложения.
 *
 * Отличительная особенность: фоновое изображение на весь экран.
 */
export const LandingPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};