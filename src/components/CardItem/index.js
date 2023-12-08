// Write your code here.
import './index.css'

const TechCard = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card
  return (
    <li type="none" className={`${className} card`}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="img">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default TechCard
