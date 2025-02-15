import { useParams } from "react-router";
import { recipes } from "../../constant/recipes.json";
import Title from "../../components/recipes/Title";
import ContentLists from "../../components/recipes/ContentLists";
import SubContent from "../../components/recipes/SubContent";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = recipes?.find((recipe) => recipe.id === Number(recipeId));
  console.log(typeof recipeId, recipe);

  const navigate = useNavigate();

  return (
    <main className="container mx-auto space-y-4">
      <button
        className="py-2 px-4 bg-primary text-white text-sm font-medium rounded-md flex items-center gap-2 hover:bg-primary/80"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft />
        Back
      </button>
      <section className=" grid grid-cols-2 gap-6">
        <div>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="rounded-xl shadow-lg object-center"
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <Title className="text-xl font-semibold">{recipe.name}</Title>
            <SubContent
              text={"Cooking Time"}
              values={`${recipe?.cookTimeMinutes} Mins`}
            />
            <SubContent text={"Meal Type"} values={recipe?.mealType} />
            <SubContent text={"Tags"} values={recipe?.tags} />
          </div>
          <ContentLists
            title={"Recipe ingredients"}
            lists={recipe?.ingredients}
          />
          <ContentLists
            title={"Recipe Instructions"}
            lists={recipe?.instructions}
          />
        </div>
      </section>
    </main>
  );
};

export default RecipeDetails;
