import { NavLink } from "react-router";

const Menu = () => {
  const handleActive = ({ isActive }) => ({
    color: isActive ? "#509E2F" : "black",
  });
  return (
    <div className="flex items-center gap-10">
      <menu className="flex items-center gap-10 text-light-gray-200 text-base">
        {routes.map((route) => (
          <li key={route.id}>
            <NavLink
              to={route.path}
              style={handleActive}
              className="text-base font-medium"
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </menu>
      <img src="/images/profile.svg" alt="profile" />
    </div>
  );
};

export default Menu;
const routes = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "Explore",
    path: "/recipes",
    id: 2,
  },
  {
    name: "Help",
    path: "/help",
    id: 3,
  },
];
