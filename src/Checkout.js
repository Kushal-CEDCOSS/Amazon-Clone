import React, { useContext, useEffect } from 'react';
import './Checkout.css';
import { Navbar } from './Navbar'
import { MyContext } from './Contexts/Main';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const context = useContext(MyContext);
    const navigate = useNavigate();

    useEffect(()=> {
        if(context.signedUser[0] === "")
        navigate("/");
    },[])
  return (
    <div className="Checkout">
        <Navbar />
        <div className="checkoutArea">
            <img src="https://cdn.dribbble.com/users/2983604/screenshots/8140241/media/d0905a1fd24438a96a158b355a72d0b8.gif" alt=""/>
            <h4>Thanks...Your Order of ₹{context.total[0]} will be delivered soon!!</h4>
            <img src="https://cdn.dribbble.com/users/2983604/screenshots/8140241/media/d0905a1fd24438a96a158b355a72d0b8.gif" alt=""/>
        </div>
    </div>
  )
}

export default Checkout