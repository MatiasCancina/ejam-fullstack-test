import Benefits from './Benefits'
import DiscountButton from './DiscountButton'
import RejectBtn from './RejectBtn'

const DiscountContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      <DiscountButton />
      <Benefits />
      <RejectBtn />
    </div>
  )
}

export default DiscountContainer
