import { Link } from "react-router-dom"
import characterModel from "../../models/character.model"

interface PropTypes {
  character: characterModel
}

const HeroCard = (props: PropTypes) => {
  return (
    <div className="seriesCard">
      <div className="cardWrapper">
        <div className="heroImage">
          <img src={props.character.image} alt={props.character.title} key={props.character.id} />
        </div>

        <div className="dataWrapper">
          <p className="textYear">{props.character.startYear} - {props.character.endYear}</p>

          <p className="titleSeries">{props.character.title}</p>

          <p className="textData">Tipo: {props.character.type}</p>

          <p className="textData">Comics: {props.character.comics}</p>

          <p className="textData">Creadores: {props.character.creators}</p>

          <p className="textData">Personajes: {props.character.characters}</p>

          <Link to={`/detail/${props.character.id}`} >
            <button type="button" className="btnDetails">Ver detalles</button>
          </Link>

        </div>

      </div>
    </div>  )
}

export default HeroCard