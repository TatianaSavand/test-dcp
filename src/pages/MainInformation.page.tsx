export const MainInformationPage = () => {
  return (
    <div className='bg-slate-100 p-4 h-full'>
      <div className='bg-white p-4 h-full overflow-auto'>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Описание проекта строительства
        </h1>

        <div className="space-y-6">
          {/* Основная информация */}
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Строительный адрес</span>
              <span className="flex-1 font-medium">ул. Гжатская, вл. 9</span>
            </div>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Вид работ</span>
              <span className="flex-1 font-medium">Новое строительство</span>
            </div>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Источник финансирования</span>
              <span className="flex-1 font-medium">Внебюджетные источники</span>
            </div>
          </div>

          {/* Сроки строительства */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Срок начала строительства</h2>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Плановый</span>
              <span className="flex-1 font-medium">13.11.2017</span>
            </div>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Фактический</span>
              <span className="flex-1 font-medium">13.11.2017</span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Срок завершения строительства</h2>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Плановый</span>
              <span className="flex-1 font-medium">14.09.2020</span>
            </div>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Фактический</span>
              <span className="flex-1 font-medium">14.09.2020</span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Срок ввода</h2>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Плановый</span>
              <span className="flex-1 font-medium">Декабрь 2021</span>
            </div>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Фактический</span>
              <span className="flex-1 font-medium">28.10.2020</span>
            </div>
          </div>

          {/* Функциональное назначение */}
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Основное функциональное назначение</span>
              <div className="flex-1">
                <p className="font-medium">010 - Многоквартирный дом</p>
                <p className="text-sm text-gray-600">010 001 - Многоэтажный многоквартирный дом</p>
                <p className="text-sm text-gray-600">010 001 001 - Многоэтажный многоквартирный дом</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Дополнительное функциональное назначение</span>
              <div className="flex-1">
                <p className="font-medium">004 - Торгово-бытовые объекты</p>
                <p className="text-sm text-gray-600">008 001 001 - Дошкольная образовательная организация</p>
                <p className="text-sm text-gray-600">014 001 005 - Подземная стоянка</p>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Реконструкция</span>
              <span className="flex-1 font-medium">Да</span>
            </div>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Объект ввода</span>
              <span className="flex-1 font-medium">Да</span>
            </div>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Программа</span>
              <span className="flex-1 font-medium">Нет данных</span>
            </div>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Подпрограмма</span>
              <span className="flex-1 font-medium">Нет данных</span>
            </div>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Экономическое направление</span>
              <span className="flex-1 font-medium">Нет данных</span>
            </div>
            <div className="flex items-start">
              <span className="w-48 text-gray-500">Состояние площадки</span>
              <span className="flex-1 font-medium">Нет данных</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}