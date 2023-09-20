const DiscountButton = () => {
  return (
    <div className="flex gap-2 bg-[#59AE43] text-white h-[59px] w-full rounded-[50px] items-center justify-center select-none cursor-pointer transition-all hover:bg-[#54a041]">
      <span className="uppercase font-bold text-base md:text-xl">
        Yes - Claim my discount
      </span>
      <img alt="arrow" src="/assets/others/rightArrow.svg" />
    </div>
  )
}

export default DiscountButton
