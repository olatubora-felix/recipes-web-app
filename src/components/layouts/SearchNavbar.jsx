import { IoIosSearch } from "react-icons/io";

const SearchNavbar = () => {
  return (
    <div className="flex items-center bg-light-gray-100 w-[497px] h-[42px] rounded-tl-md rounded-bl ">
      <div className="flex-1 flex items-center gap-4">
        <select name="" id="" className="input px-2">
          <option selected>All Categories</option>
          <option value="">Lunch</option>
          <option value="">Dinner</option>
          <option value="">Break Fask</option>
        </select>
        <input
          type="text"
          placeholder="Search for recipes..."
          className="input  !border-l border-light-gray placeholder:text-light-gray px-3 h-[21px]"
        />
      </div>
      <button className="bg-primary h-full w-[55px] flex justify-center items-center text-white rounded-tr-md rounded-br-md">
        <IoIosSearch className="size-6" />
      </button>
    </div>
  );
};

export default SearchNavbar;
