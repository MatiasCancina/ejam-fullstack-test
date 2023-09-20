const ReviewHeader = () => {
  return (
    <div className="flex gap-2 items-center">
      <img
        className="rounded-full object-contain"
        width={48}
        height={48}
        alt="user"
        src="/assets/others/user.png"
      />

      <div className="flex flex-col justify-center">
        <img src="/assets/others/Stars.svg" height={12} width={78} />

        <div className="flex gap-2 items-center">
          <p className="font-bold">Ken T.</p>
          <img
            alt="verify"
            src="/assets/others/userverify.svg"
            width={16}
            height={16}
          />
          <span className="text-[#5BB59A] text-xs">Verified Customer</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewHeader
