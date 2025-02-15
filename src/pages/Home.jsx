import { Link } from "react-router";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <main className="py-10">
      <Banner />
      <Categories />
      <div className="space-y-10">
        <Recipes />
        <Recipes start={8} end={16} heading={"Recommended Recipes"} />
      </div>
      <div className="container mx-auto flex justify-center items-center">
        <Link
          to={"/recipes"}
          className="font-medium text-base text-white bg-green-500 py-2 px-4 rounded-xl"
        >
          See More
        </Link>
      </div>
    </main>
  );
};

export default Home;
