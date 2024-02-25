import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav>
      <h3>Las Recetas de la Abuela</h3>
      <div>
        <button>Berenjenas</button>
        <button>Chucrut</button>
        <button>Conservas</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
