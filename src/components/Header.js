import { Link } from "react-router-dom";
import logo from "../assets/logo/logo1.png";
import { logout } from "../firebase.js";
import Search from "./Search";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="flex items-center justify-between h-[60px] container mx-auto">
        <Link to="/">
          <img src={logo} className="h-[29px]" />
        </Link>

        <Search />

        <nav>
          <button onClick={logout}>
            <b>Çıkış Yap</b>
          </button>
        </nav>
      </div>
    </header>
  );
}
