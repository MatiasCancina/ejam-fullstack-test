import { navbarItemsHelper } from '../../utils/helper'
import NavItem from './subcomps/NavItem'
import NavSlide from './subcomps/NavSlide'

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:flex h-[50px] w-full bg-[#252F3D] justify-evenly items-center">
        {navbarItemsHelper &&
          navbarItemsHelper?.map((el, i) => <NavItem data={el} key={i} />)}
      </div>
      <div className="flex lg:hidden h-[42px] w-full bg-[#252F3D] justify-evenly items-center">
        <NavSlide data={navbarItemsHelper} />
      </div>
    </>
  )
}

export default Navbar
