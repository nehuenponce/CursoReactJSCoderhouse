import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/" style={{ color: "beige" }}>
          Las Recetas de La Abuela
        </Link>
        <ul className="categories">
          <Link to="/">Todas</Link>
          <Link to="/category/conservas">Conservas</Link>
          <Link to="/category/escabeches">Escabeches</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
