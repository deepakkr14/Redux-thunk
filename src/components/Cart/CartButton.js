import classes from "./CartButton.module.css";
import { useDispatch,useSelector } from "react-redux";
import {uiActions} from "../Store/uiCart";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity=useSelector(state=>state.cart.cartTotal)
  return (
    <button className={classes.button} onClick={()=> dispatch(uiActions.toggleCart())}>
      <span >My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
