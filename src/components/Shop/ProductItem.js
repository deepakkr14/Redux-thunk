import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import {CartActions} from '../Store/cartSlice';
const productsDummy=[
  {itemId:'1',
  title:'Test',
  price:6,
  description:'This is a first product - amazing!'
},
  {itemId:'2',
  title:'Test2',
  price:10,
  description:'This is a second product - bad!'
},
  {itemId:'3',
  title:'Test3',
  price:20,
  description:'This is a third product - worse!'
},
]
const ProductItem = (props) => {
  const dispatch=useDispatch()
  // const { title, price, description } = props;
  
  return (
    <li className={classes.item}>
     {    productsDummy.map(each=>{
    return(
      
        <Card key={Math.random()} >
        <header>
          <h3>{each.title}</h3>
          <div className={classes.price}>${each.price.toFixed(2)}</div>
        </header>
        <p>{each.description}</p>
        <div className={classes.actions}>
          <button onClick={()=>dispatch(CartActions.addToCart(each))}> Add to Cart</button>
        </div>
      </Card>)
  })}
    </li>
  );
};

export default ProductItem;
