import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector,useDispatch } from "react-redux";
import {sendCartData} from './components/Store/cartSlice'
import Notification from "./components/UI/Notification";
let isInitial = true;

function App() {
  const Cartstatus = useSelector((state) => state.toggler.Cartstatus);
  const cart = useSelector((state) => state.cart.cartItems);
  const notification=useSelector((state)=>state.toggler.notification);
  const dispatch=useDispatch()
  useEffect(() => {
    // const sendCartData = async () => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'pending',
    //       title: 'Sending...',
    //       message: 'Sending cart data!',
    //     })
    //   );
    //   const response = await fetch(
    //     "https://react-api-backend-dc22b-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: 'PUT',
    //       body: JSON.stringify(cart),
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error('Sending cart data failed.');
    //   }

    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'success',
    //       title: 'Success!',
    //       message: 'Sent cart data successfully!',
    //     })
    //   );
    // };

    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }

    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'error',
    //       title: 'Error!',
    //       message: 'Sending cart data failed!',
    //     })
    //   );
    // });
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  //   fetch(
  //     "https://react-api-backend-dc22b-default-rtdb.firebaseio.com/cart.json",
  //     { method: "PUT", body: JSON.stringify(cart) }
  //   )
  // }, [cart]);

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
