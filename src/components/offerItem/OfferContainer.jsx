import ReviewCard from './review/ReviewCard'
import DataOffer from './subcomps/DataOffer'

const OfferContainer = () => {
  return (
    <div className=" p-4 md:p-7 md:flex md:flex-col xl:flex-row xl:gap-7 items-center justify-center bg-[#FAFAFA] w-fit self-center">
      <div className="hidden xl:flex flex-col gap-10">
        <img
          src="/assets/others/product.png"
          alt="product"
          className="w-[575px] h-[591px]"
        />
        <ReviewCard />
      </div>
      <DataOffer />
    </div>
  )
}

export default OfferContainer
