import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './components/store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.isCartVisible);
  const cartItems = useSelector(state => state.cart.items);
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  

  useEffect(()=>{
    if(isInitial){
      dispatch(fetchCartData());
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  },[cart, dispatch])

  return (
    <>
    {notification && <Notification status={notification.status} message={notification.message} title={notification.title} />}
    <Layout>
     {showCart &&  <Cart cartItems={cartItems} />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
