import Discount from './Discount'
import DiscountContainer from './discount/DiscountContainer'
import Features from './Features'
import Guarantee from './guarantee/Guarantee'
import ItemInfo from './ItemInfo'
import OfferTitle from './OfferTitle'

const DataOffer = () => {
  return (
    <div className="lg:w-[550px] flex flex-col gap-7">
      <OfferTitle />
      <ItemInfo />
      <Features />
      <Discount />
      <DiscountContainer />
      <Guarantee />
    </div>
  )
}

export default DataOffer
