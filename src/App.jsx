import { Route, Routes } from "react-router";
import Home from "./pages/home";
import RecipeDetails from "./pages/recipes/RecipeDetails";
import RecipesPage from "./pages/recipes";
import NavBar from "./components/layouts/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="recipes">
            <Route index element={<RecipesPage />} />
            <Route path=":recipeId" element={<RecipeDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
