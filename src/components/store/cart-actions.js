import { uiAction } from './ui-slice';
import {cartAction} from './cart-slice'

export const fetchCartData = () => {
    return async (dispatch) => {
        dispatch(
            uiAction.showNotification({
              status: 'pending',
              title: 'Sending...',
              message: 'Fetching data from mongodb!'
            })
          );

        const retrieveCartData = async () => {
            const response = await fetch('http://localhost:3000/cart')
    
            if(!response.ok){
              throw new Error('Sending to cart failed.')
            }
            let data = response.json()
            return data;
        };
        try{
            const cartData = await retrieveCartData();
            dispatch(cartAction.replaceCart(cartData));
        }
      catch(e){
          dispatch(
            uiAction.showNotification({
              status: 'error',
              title: 'Error...',
              message: 'Fetching data from db Failed!'
            })
          );
        }


    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiAction.showNotification({
              status: 'pending',
              title: 'Sending...',
              message: 'Sending data to mongodb!'
            })
          );

    const sentToCart = async () => {
          const response = await fetch('http://localhost:3000/cart',{
             method:'PATCH',
             headers:{'content-type': 'application/json'},
             body: JSON.stringify(cart)
          })
  
          if(!response.ok){
            throw new Error('Sending to cart failed.')
          }
          
      }
  
    try{
          await sentToCart();
          dispatch(
            uiAction.showNotification({
              status: 'success',
              title: 'Sent!',
              message: 'Sent data to mongodb successfully!'
            })
          );
      }
    catch(e){
        dispatch(
          uiAction.showNotification({
            status: 'error',
            title: 'Error...',
            message: 'Sending data to db Failed!'
          })
        );
      }
    }
}