import Popular from "../components/Popular";
import Veggie from "../components/Veggies";
import { Recipe } from "../type/recipe";

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  return (
    <>
      <Veggie />
      <Popular />
    </>
  );
};

export default Home;
