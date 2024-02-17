import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartitems=useSelector((state)=>state.cart.cartItems);
  console.log(cartitems)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>

       {cartitems.length > 0 &&  <CartItem
          item={cartitems}
        />}
       {cartitems.length==0 &&  <h1>cart is empty</h1>}
      </ul>
    </Card>
  );
};

export default Cart;
