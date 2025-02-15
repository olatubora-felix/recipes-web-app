/* eslint-disable react/prop-types */
const SubContent = ({ text, values }) => {
  if (typeof values === "string") {
    return (
      <p className="text-sm text-gray-600">
        <strong>{text}:</strong> {values}
      </p>
    );
  }
  return (
    <p className="text-sm text-gray-600">
      <strong>{text}:</strong> {values?.join(" , ")}
    </p>
  );
};

export default SubContent;
