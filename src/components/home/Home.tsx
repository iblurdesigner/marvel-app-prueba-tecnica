import Header from "../header/Header"
import HeroCard from "../heroCard/HeroCard"
import characterModel from "../../models/character.model"
import { useEffect, useState } from "react"
import { TestingService } from "../../services/testing.service"

const Home = () => {

  const [characterList, setCharacterList] = useState<characterModel[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getCharacters = async () => { 
    setLoading(true)
    const heroesArray:Array<characterModel> = []

    await TestingService().then((response) => {
      response.data.data.results.forEach( (item:any) => {
        heroesArray.push({
          id: item.id,
          image: `${item.thumbnail.path}/portrait_fantastic.${item.thumbnail.extension}`,
          name: item.name
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
          {loading && <p>Cargando...</p>}

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
          {!loading && <p>Se demora la API de Marvel en cargar</p>}


        </div>
      </div>
    </>
  )
}

export default Home