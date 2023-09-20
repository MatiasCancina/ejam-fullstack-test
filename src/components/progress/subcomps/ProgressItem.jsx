/* eslint-disable react/prop-types */
import check from '/assets/progress/check.svg'
import third from '/assets/progress/third.svg'
import fourth from '/assets/progress/fourth.svg'

const ProgressItem = ({data}) => {
  const itemMap = {
    checked: check,
    third: third,
    fourth: fourth
  }

  const itemSrc = itemMap[data.name]
  return (
    <div className='flex gap-2 items-center justify-center flex-col lg:flex-row'>
      <img className='w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]' src={itemSrc} alt='steps icon'/>
      <span className={`text-xl hidden 2lg:block ${data.name === 'third' && 'font-bold'}`}>{data.text}</span>
      <span className={`text-[10px] min:text-xs md:text-xl block text-center 2lg:hidden ${data.name === 'third' && 'font-bold'}`}>{data.smallText}</span>
    </div>
  )
}

export default ProgressItem