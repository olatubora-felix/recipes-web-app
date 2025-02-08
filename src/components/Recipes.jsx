/* eslint-disable react/prop-types */
import Recipe from "./Recipe";
import { recipes } from "../constant/recipes.json";
const Recipes = ({ start = 0, end = 8, heading }) => {
  return (
    <section className="mx-auto container">
      {heading && (
        <h1 className="text-[2.25rem] font-semibold text-black">{heading}</h1>
      )}
      <section className=" py-4 grid grid-cols-4 gap-5">
        {recipes?.slice(start, end).map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </section>
  );
};

export default Recipes;
