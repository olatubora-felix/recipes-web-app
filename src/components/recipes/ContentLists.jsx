/* eslint-disable react/prop-types */
import Title from "./Title";

const ContentLists = ({ lists, title }) => {
  return (
    <div className="space-y-3">
      <Title className="text-xl font-medium text-black">{title}:</Title>
      <ul className="space-y-3 list-decimal text-gray-600 px-4">
        {lists?.map((list) => (
          <li key={list}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentLists;
