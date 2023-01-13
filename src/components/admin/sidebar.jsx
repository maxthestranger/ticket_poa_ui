import { NavLink } from "react-router-dom";
import logo from "../../assets/images/icons/logo.svg";
import { navBar } from "../../data/navbar";

const SideBar = () => {
  return (
    <nav className="h-screen flex flex-col px-4 py-6 bg-white w-64">
      <div className="px-2.5 mb-4">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <ul className="mt-8">
        {navBar.map(({ id, name, link, icon }) => {
          return (
            <li key={id}>
              <NavLink
                to={link}
                className={`${({ isActive }) => {
                  return isActive ? "bg-primary" : "bg-transparent";
                }} py-2.5 px-3.5 rounded-md text-dark text-base font-bold w-full inline-block transition-all duration-100 ease-in hover:bg-primary hover:text-white`}
              >
                <i className={`bi bi-${icon} mr-3.5`} /> {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="mt-auto">
        <ul>
          <li>
            <NavLink
              to="/"
              className="py-2.5 px-3.5 rounded-md text-dark text-base font-bold w-full inline-block transition-all duration-100 ease-in hover:bg-primary hover:text-white"
            >
              <i className="bi bi-box-arrow-left mr-3.5" /> Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
