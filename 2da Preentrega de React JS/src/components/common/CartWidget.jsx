import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useContext } from "react";

const CartWidget = () => {
  const { cart } = useContext();

  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} showZero color="primary">
        <BsFillCartCheckFill size="30px" color="beige" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
