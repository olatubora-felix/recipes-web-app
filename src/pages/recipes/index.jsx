import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import Recipes from "../../components/Recipes";

const RecipesPage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <div className="space-y-10">
        <Recipes start={0} end={50} />
      </div>
    </div>
  );
};

export default RecipesPage;
