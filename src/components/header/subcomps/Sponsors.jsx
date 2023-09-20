const Sponsors = () => {
  return (
    <div className="flex justify-between items-center px-10 lg:px-20 xl:px-56 h-[96px] select-none">
      <img
        src="/assets/logos/clarifion.png"
        alt="clarifion"
        className="h-5 lg:h-[36px] w-[106.67px] lg:w-[192px]"
      />
      <div className="flex gap-3 items-center justify-center">
        <img
          className="h-4 md:h-[32px]"
          alt="mcafee logo"
          src="/assets/logos/mcafee.png"
        />
        <img
          className="h-4 md:h-[32px]"
          alt="norton logo"
          src="/assets/logos/norton.png"
        />
      </div>
    </div>
  )
}

export default Sponsors
