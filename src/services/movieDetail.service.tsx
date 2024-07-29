export const MovieDetail = async (serieId: string) => {
  const hash = "08b861e0420d37a1a417cd1e2d586504"

  const res = await fetch(`https://gateway.marvel.com:443/v1/public/series/${serieId}?limit=50&ts=100&apikey=f26fcec8c4238531db72a55e146f2b72&hash=${hash}`)

  return res.json()
}