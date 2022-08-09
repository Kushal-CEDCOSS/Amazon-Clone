import React, { useContext } from 'react';
import { Navbar } from './Navbar'
import './Products.css';
import { MyContext } from './Contexts/Main';
import { useNavigate } from 'react-router-dom';


const Products = () => {

  const context = useContext(MyContext);
  const navigate = useNavigate();

  const addToCart = (e) => {
    if(context.signedUser[0] === "")
    {
      navigate("/login");
      return;
    }
    else
    {
      var check = 0;
      var sum = 0;
      var temporary = [...context.cart[0]];
      var id = e.target.parentNode.parentNode.id;
      temporary.map(item => item.id === id ? check = 1 : null) 
      if(check === 0)
      {
        var newItem = context.products.filter(item => item.id === id);
        var temp = [...context.cart[0],...newItem];
        temp.map(item => sum += (item.price * item.quantity));
        context.total[1](sum);
        context.cart[1](temp);
      }
      else
      {
        temporary.map(item => item.id === id ? item.quantity+=1 : null);
        temporary.map(item => sum += (item.price * item.quantity));
        context.total[1](sum);
        context.cart[1](temporary);
      }      
    }
  }
  console.log(context.cart[0]);
  return (
    <div className="Products">
      <Navbar />
      <div className="productsArea">
      {
        context.products.map((item, index)=> <div id={item.id} key={index} className="Card">
          <div className="imageArea">
            <img src={item.photo} alt="" />
          </div>
          <div className="detailsArea">
            <h3>{item.name}</h3>
            <p className='cutText'>₹{item.fakeprice}</p>
            <p className='realText'>₹{item.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>)
      }
      </div>
    </div>
  )
}

export default Products