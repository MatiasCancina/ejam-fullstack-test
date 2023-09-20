const Discount = () => {
  return (
    <div className="flex bg-[#EDF3FD] items-center gap-3 w-full min-h-[52px] md:h-[52px] rounded-[10px]">
      <img
        alt="icon"
        src="/assets/others/porcent.svg"
        className="ml-5 w-6 h-6 md:h-8 md:w-8"
      />
      <p className="text-sm md:text-base">
        Save <span className="text-[#2C7EF8]">53%</span> and get
        <span className="text-[#2C7EF8]">6 extra Clarifision</span> for only
        <span className="text-[#2C7EF8]">$14 Each.</span>
      </p>
    </div>
  )
}

export default Discount
