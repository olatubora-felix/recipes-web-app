const Menu = () => {
  return (
    <div className="flex items-center gap-10">
      <menu className="flex items-center gap-10 text-light-gray-200 text-base">
        <li>
          <a href="" className="text-primary">
            Home
          </a>
        </li>
        <li>
          <a href="">Explore</a>
        </li>
        <li>
          <a href="">Help</a>
        </li>
      </menu>
      <img src="/images/profile.svg" alt="profile" />
    </div>
  );
};

export default Menu;
