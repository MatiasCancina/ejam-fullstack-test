import HeaderText from './subcomps/HeaderText'
import Sponsors from './subcomps/Sponsors'

export const Container = () => {
  return (
    <div className="w-full flex flex-col">
      <Sponsors />
      <HeaderText />
    </div>
  )
}
