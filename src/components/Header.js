import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo1.png";
import { logout } from "../firebase.js";
import Icon from "./Icon";
import Search from "./Search";
import avatar from '../assets/icons/avatar.png'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="flex items-center justify-between h-[60px] container mx-auto">
        <Link to="/">
          <img src={logo} className="h-[29px]" alt="logo" />
        </Link>

        <Search />

        <nav className="flex items-center gap-x-6">
          <NavLink to="/">
            <Icon name="home" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="direct" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="new" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="explore" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="heart" size={24} />
          </NavLink>
          <button onClick={logout}>
            <img src={avatar} className="w-6 h-6 rounded-full" alt="avatar" />
          </button>
        </nav>
        
      </div>
    </header>
  );
}
