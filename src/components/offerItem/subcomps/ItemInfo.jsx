const ItemInfo = () => {
  return (
    <div className="flex">
      <div className="w-[80px] md:w-[134px] h-[80px] md:h-[134px] bg-[#2C7EF8] rounded-[10px] grid place-content-center">
        <img
          alt="clarifion air ionizer"
          src="/assets/others/clarifionitem.png"
        />
      </div>

      {/* //right side */}
      <div className="flex flex-col w-full px-3 gap-1">
        <div className="flex justify-between items-center w-full">
          <h4 className="text-sm md:text-xl">Clarifion Air Ionizer</h4>
          <div className="flex items-center gap-2">
            <span className="line-through font-semibold text-[#969696] text-[10px] md:text-base">
              $180
            </span>
            <p className="text-sm md:text-[22px] text-[#2C7EF8] font-semibold">
              $84
            </p>
          </div>
        </div>

        <img
          src="/assets/others/Stars.svg"
          alt="stars"
          className="h-[12px] md:h-[18px] w-[68px] md:w-[98px]"
        />

        <div className="flex gap-4 items-center">
          <img
            alt="point"
            src="/assets/others/point.svg"
            className="h-[12px] md:h-[16px] w-[12px] md:w-[16px]"
          />
          <span className="text-[#37465A] font-light text-xs md:text-base ">
            12 left in Stock
          </span>
        </div>

        <p className="text-[#4D5254] text-xs md:text-base ">
          Simply plug a Clarifion into any standard outlet and replace bulky,
          expensive air purifiers with a simple.
        </p>
      </div>
    </div>
  )
}

export default ItemInfo
