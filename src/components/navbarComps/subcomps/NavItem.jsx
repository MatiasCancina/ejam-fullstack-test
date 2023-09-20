/* eslint-disable react/prop-types */
import delivery from '/assets/delivery.svg'
import heart from '/assets/heart.svg'
import last from '/assets/last.svg'
import verify from '/assets/verify.svg'

const NavItems = ({ data }) => {
  const iconMap = {
    verify: verify,
    delivery: delivery,
    heart: heart,
    last: last,
  }

  const iconSrc = iconMap[data.name]

  return (
    <div className="flex text-white h-[22px] min:min-w-[234px] items-center justify-center gap-2">
      <img
        src={iconSrc}
        alt="navbar item icon"
        className="w-[18.2px] h-[18.2px]"
      />
      <p className="text-[12px] font-medium">{data.text}</p>
    </div>
  )
}

export default NavItems
