import React from "react";

const Veggies = () => {
  const [veggies, setVeggies] = useState<any[]>([]);

  useEffect(() => {
    getVeggies();
  }, []);

  const getVeggies = async () => {
    try {
      const check = localStorage.getItem("veggies");

      if (check) {
        setVeggies(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=veggies&apiKey=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&number=10`
        );
        const response = await api.json();
        localStorage.setItem("popular", JSON.stringify(response.recipes));
        setPopular(response.recipes);
      }
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };
};

export default Veggies;
