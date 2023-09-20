const Footer = () => {
  return (
    <div className="mt-5 w-full h-[102px] bg-[#252F3D] flex flex-col md:flex-row items-center justify-center md:justify-between md:px-28 text-white gap-5">
      <div className="flex text-xs gap-2 items-center">
        <p>Copyright (c) 2023</p>
        <span className="h-[14px] w-[1px] bg-white"></span>
        <p>Clarifionsupport@clarifion.com</p>
      </div>

      <div className="flex text-xs gap-2 items-center">
        <img src="/assets/others/whiteLock.svg" className="w-[13px] h-[13px]" />
        <span>Secure 256-bit SSL encryption.</span>
      </div>
    </div>
  )
}

export default Footer
