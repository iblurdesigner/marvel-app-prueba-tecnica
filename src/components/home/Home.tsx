import Header from "../header/Header"
import HeroCard from "../heroCard/HeroCard"
import characterModel from "../../models/character.model"
import { useEffect, useState } from "react"
import { TestingService } from "../../services/testing.service"
import { useSeriesData } from "../../services/queries"

const Home = () => {

  const seriesData = useSeriesData()

  const [characterList, setCharacterList] = useState<characterModel[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getCharacters = async () => { 
    setLoading(true)
    const heroesArray:Array<characterModel> = []

    await TestingService().then((response) => {
      response.data.data.results.forEach( (item:any) => {
        heroesArray.push({
          id: item.id,
          comics: item.comics.available,
          creators: item.creators.available,
          characters: item.characters.available,
          image: `${item.thumbnail.path}/portrait_fantastic.${item.thumbnail.extension}`,
          title: item.title,
          type: item.type,
          startYear: item.startYear,
          endYear: item.endYear,
        })
      })

      setCharacterList(heroesArray)

    }).catch((error) => {
      console.log("error: ", error)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    getCharacters()
  }, [])

  

  return (
    <>
      <Header />
      <div className="scrollWrapper">
        <div className="cardArea">
          {loading && <img src="./spinner.svg" />}

          {
            !loading && characterList.length >0 && characterList.map( (item:characterModel, id:number) => {
              return (
                <div className="cardAreaColumn" key={id} >
                  <HeroCard key={id} character={item} />
                </div>
              )
            })
          }
          {
            !loading && characterList.length === 0 && <p>No hay personajes</p>
          }
          {!seriesData.isLoading && <p>Se demora la API de Marvel en cargar</p>}


        </div>
      </div>
    </>
  )
}

export default Home