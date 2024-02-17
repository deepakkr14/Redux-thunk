import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
function App() {
  const Cartstatus = useSelector((state) => state.auth.Cartstatus);
  console.log(Cartstatus)
  return (
    <Layout>
      {Cartstatus && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
