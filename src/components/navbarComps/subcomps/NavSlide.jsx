/* eslint-disable react/prop-types */
import { useState } from 'react'
import NavItem from './NavItem'

const NavSlide = ({ data }) => {
  const [position, setPosition] = useState(0)

  const handlePrev = () => {
    position > 0 && setPosition((prev) => prev - 1)
  }
  const handleNext = () => {
    position < data.length - 1 && setPosition((prev) => prev + 1)
  }

  return (
    <div className="flex gap-3 items-center justify-center">
      <img onClick={handlePrev} src="/assets/leftArrow.svg" />
      <NavItem data={data[position]} />
      <img onClick={handleNext} src="/assets/rightArrow.svg" />
    </div>
  )
}

export default NavSlide
