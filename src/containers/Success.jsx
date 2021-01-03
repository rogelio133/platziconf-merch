import React,{useContext} from 'react';
import '../styles/components/Success.css';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress'

const Success = () => {

  const {state} = useContext(AppContext);
  const {buyer} = state;
  const buyerLocation = useGoogleAddress(
    buyer[0].address,
    buyer[0].city,
    buyer[0].municipio,
    buyer[0].country
  ); 

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map data={buyerLocation} />
        </div>
      </div>
    </div>
  )};

export default Success;
