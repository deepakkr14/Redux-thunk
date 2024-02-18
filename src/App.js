import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import {
  sendCartData,
  fetchCartData,
} from "./components/Store/cart-actionsThunk";

import Notification from "./components/UI/Notification";
let isInitial = true;

function App() {
  const Cartstatus = useSelector((state) => state.toggler.Cartstatus);
  const cart = useSelector((state) => state.cart.cartItems);
  const notification = useSelector((state) => state.toggler.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    useEffect(() => {
      dispatch(fetchCartData());
    }, [dispatch]);
    
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  console.log(Cartstatus);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {Cartstatus && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
