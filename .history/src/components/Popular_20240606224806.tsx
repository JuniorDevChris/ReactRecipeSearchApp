
const Popular = () => {
    const getPopular = async () => { 
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT}
`)
    }
  return (
    <div>Popular</div>
  )
}

export default Popular