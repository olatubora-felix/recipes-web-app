/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
const Recipe = ({ recipe }) => {
  return (
    <div className="p-3 shadow-md rounded-md">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full mb-3 rounded-md"
      />
      <h6 className="text-[0.625rem] font-poppins text-[#A1A1A1] font-medium">
        {recipe.difficulty}
      </h6>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl text-[#252525]">{recipe.name}</h2>
          <div className="flex items-center gap-2">
            <FaStar className="text-[#FDC040] size-4" />
            <span className="font-medium font-poppins text-light-gray text-xs">
              {recipe.rating}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold font-poppins text-[#DC582A] text-xl">
            {recipe.prepTimeMinutes} Min
          </p>
          <div className="flex items-center gap-2">
            <FaRegHeart className="h-[19px] w-[21px]" />
            <FaRegComment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
