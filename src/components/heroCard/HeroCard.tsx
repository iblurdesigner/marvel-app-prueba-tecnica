import characterModel from "../../models/character.model"

interface PropTypes {
  character: characterModel
}

const HeroCard = (props: PropTypes) => {
  return (
    <div className="heroCard">
      <div className="heroCardWrapper">
        <div className="heroImage">
          <img src={props.character.image} alt={props.character.name} key={props.character.id} />
        </div>
        <div className="heroName">{props.character.name}</div>
      </div>
    </div>  )
}

export default HeroCard