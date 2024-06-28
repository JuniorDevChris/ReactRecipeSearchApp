import Popular from "../components/Popular";
import Veggie from "../components/Veggies";

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
