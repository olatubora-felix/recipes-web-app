import Banner from "./components/Banner";
import Categories from "./components/Categories";
import NavBar from "./components/layouts/NavBar";
import Recipes from "./components/Recipes";

const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Categories />
      <div className="space-y-10">
        <Recipes />
        <Recipes start={8} end={16} heading={"Recommended Recipes"} />
      </div>
    </>
  );
};

export default App;
