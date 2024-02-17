import classes from "./CartItem.module.css";
import { useDispatch } from 'react-redux';
import {CartActions} from '../Store/cartSlice';

const CartItem = (props) => {
  const dispatch=useDispatch()

  return (
    <>
      {props.item.map((each) => {
        return (
          <li className={classes.item} key={Math.random()}>
            <header>
              <h3>{each.name}</h3>
              <div className={classes.price}>
                ${each.totalPrice.toFixed(2)}{" "}
                <span className={classes.itemprice}>
                  (${each.price.toFixed(2)}/item)
                </span>
              </div>
            </header>
            <div className={classes.details}>
              <div className={classes.quantity}>
                x <span>{each.quantity}</span>
              </div>
              <div className={classes.actions}>
                <button onClick={()=>dispatch(CartActions.removeFromCart(each.name))}>-</button>
                <button onClick={()=>dispatch(CartActions.addToCart(each))}>+</button>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default CartItem;
