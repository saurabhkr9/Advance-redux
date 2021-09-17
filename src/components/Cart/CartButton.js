import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const totalItems = useSelector(state=> state.cart.totalQuantity)

  const toggleCart=()=>{
    dispatch(uiAction.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
