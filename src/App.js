import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification'

var isInitial= true;
function App() {
  const showCart =useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const notification = useSelector(state => state.ui.notification);
  
  // Show the cart when there are items in it or hide if empty

  useEffect(()=>{
    const sendCartData = async () => {
      dispatch(uiActions.setNotification({
        status:'Pending',
        title:'Sending ...',
        message:'Sending cart data!!!',
      }))
      const cartData = await fetch('https://redux-basics-a8f83-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      })
      if(!cartData.ok ){
        throw new  Error("Couldn't save the data!");

      }
      const responseData = await cartData.json();
      // now if we do not have any error
      dispatch(uiActions.setNotification({
        status:'Sucess',
        title:'Sucess...',
        message:'Sent cart data!!!',
      }))
    }
    if(isInitial){
      isInitial = false;
      return;
    }
    sendCartData().catch((error) =>{
      dispatch(uiActions.setNotification({
        status:'error',
        title:'Error ...',
        message:'Error Sending cart data!!!',
      }))
    } )
  } , [cart , dispatch])
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}></Notification>}
    <Layout>

      {showCart &&<Cart />}
      <Products />
    </Layout> 
    </Fragment>
  );
}

export default App;
