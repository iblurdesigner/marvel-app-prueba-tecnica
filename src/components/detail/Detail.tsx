import { Link, useParams } from "react-router-dom"
import Header from "../header/Header"
import { useEffect, useState } from "react"

const Detail = () => { 
  const [serie, setSerie] = useState<any>({})	
  const params = useParams<{id: string}>()

  const MovieDetail = async () => {
    const hash = "08b861e0420d37a1a417cd1e2d586504"
  
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/series/${params.id}?limit=50&ts=100&apikey=f26fcec8c4238531db72a55e146f2b72&hash=${hash}`)
  
    const data = await res.json()

    setSerie(data.data.results[0])
  }

  useEffect( ()=> {
    MovieDetail()
  }, [])

  console.log(serie)

  return (
    <>
      <Header />

      <div className="textData">Detail of series 2</div>
      <h1 className="textData">{params.id} </h1>
      <p className="textData">{serie.title} </p>

      <p className="textYear">{serie.startYear} - {serie.endYear}</p>


      <Link to={`/`} >
        <button type="button" className="btnDetails">Volver</button>
      </Link>

    
    </>
  )
}

export default Detail