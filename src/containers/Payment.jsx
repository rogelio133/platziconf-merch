import React, {useContext} from 'react';
import {PayPalButton} from 'react-paypal-button';
import {  useHistory} from 'react-router-dom';
import AppContext from '../context/AppContext';



import '../styles/components/Payment.css';

const Payments = () => {

  const {state,addNewOrder} = useContext(AppContext);
  const {cart,buyer} = state;
  const history = useHistory();

  const paypalOptions = {
    clientId : 
    'AQxLGQdP2fK5RwChcd2ewhsAQo8yxw4JMva7_6WLyQhA70T9QF7C9PJV9guSYq5X7FWy_Hy94VRFdAj0',
    intent : 'capture',
    currency : 'MXN'
  }

  const buttonStyles = {
    layout : 'vertical',
    shape : 'rect'
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  const handlePaymentSuccess = (data) => {
    console.log(buyer);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };


  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item)=>(
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                {'$ '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={()=> console.log('Start payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log("errorData",error)}
            onPaymentCancel={data => console.log("cancelData",data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}
export default Payments;
