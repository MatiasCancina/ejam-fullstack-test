const Benefits = () => {
  return (
    <>
      <div className="md:h-[33px] w-full rounded-[4px] hidden md:flex flex-wrap justify-evenly text-xs items-center capitalize border-[#CFCFCF] border py-2">
        <span>Free shipping</span>
        {/* divider */}
        <span className="w-[1px] h-[16px] bg-[#CFCFCF] "></span>
        <div className="flex gap-1">
          <img src="/assets/others/lock.svg" alt="lock icon" />
          <span className="">Secure 256-bit SSL encryption.</span>
        </div>
        {/* divider */}
        <span className=" w-[289px] md:w-[1px] h-[1px] md:h-[16px] bg-[#CFCFCF] my-2 md:my-0"></span>
        <img src="/assets/others/cards.svg" alt="credit cards" height={14} />
      </div>
      {/* wrap */}
      <div className="md:h-[33px] w-full rounded-[4px] md:hidden flex flex-col text-xs items-center capitalize border-[#CFCFCF] border py-2">
        <div className="flex w-full justify-center gap-5 ">
          <span>Free shipping</span>
          {/* divider */}
          <span className="w-[1px] h-[16px] bg-[#CFCFCF] "></span>
          <div className="flex gap-1">
            <img src="/assets/others/lock.svg" alt="lock icon" />
            <span className="">Secure 256-bit SSL encryption.</span>
          </div>
        </div>
        {/* divider */}
        <span className=" w-[289px] md:w-[1px] h-[1px] md:h-[16px] bg-[#CFCFCF] my-2 md:my-0"></span>
        <img src="/assets/others/cards.svg" alt="credit cards" height={14} />
      </div>
    </>
  )
}

export default Benefits
