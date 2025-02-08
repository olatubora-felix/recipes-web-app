import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { categories } from "../constant/categories";

const Categories = () => {
  return (
    <section className="container mx-auto px-2 flex justify-between py-6">
      {categories.map((category, index) => (
        <div
          key={`${category.name}-${index}`}
          className={`py-2 px-6 h-[86px] rounded-lg text-white gap-2  flex justify-center items-center font-medium text-base`}
          style={{
            backgroundColor: category.color,
          }}
        >
          <span>{category.name}</span>{" "}
          <MdOutlineKeyboardArrowRight className="size-[26px]" />
        </div>
      ))}
    </section>
  );
};

export default Categories;
