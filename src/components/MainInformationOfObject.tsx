export const MainInformationOfObject = () => {
  return (
    <>
      <h1 className='text-lg font-bold'>ул. Медведева д. 14</h1>
      <h1>Жилой комплекс</h1>
      <h1 className='text-sm'>Уникальный номер проекта строительства: HH33098-10-0001-99</h1>
      <h1>Текущий статус:</h1>
      <h1>В строительстве</h1>
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">45%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{width: '45%'}}
          ></div>
        </div>
      </div>
    </>
  )
}