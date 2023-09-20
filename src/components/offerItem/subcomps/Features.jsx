import FeatureCard from './FeatureCard'
const featuresHelper = ['negative', 'designed', 'perfect']
const Features = () => {
  return (
    <div>
      {featuresHelper?.map((el, i) => (
        <FeatureCard text={el} key={i} />
      ))}
    </div>
  )
}

export default Features
