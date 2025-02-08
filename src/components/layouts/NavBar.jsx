import Menu from "./Menu";
import SearchNavbar from "./SearchNavbar";
const NavBar = () => {
  return (
    <header className="py-6">
      <nav className="container mx-auto px-2 flex justify-between">
        <a href="">
          <img src="/images/logo.svg" alt="Logo" />
        </a>
        <SearchNavbar />
        <Menu />
      </nav>
    </header>
  );
};

export default NavBar;
