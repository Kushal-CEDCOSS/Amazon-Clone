import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { MyContext } from './Contexts/Main';
import Drawer from '@mui/material/Drawer';



export const Navbar = () => {
  const context = useContext(MyContext);

  const navigate = useNavigate();


  const minus = (e) =>{
    if(e.target.nextSibling.innerText === "1")
    {
      return;
    }
    var sum = 0;
    var temp = [...context.cart[0]];
    var id = e.target.parentNode.parentNode.id;
    temp.map((item) => item.id === id ? item.quantity-=1 : null);
    temp.map(item => sum+=(item.price*item.quantity))
    context.total[1](sum);
    context.cart[1](temp);
  } 

  const plus = (e) => {
    var sum = 0;
    var id = e.target.parentNode.parentNode.id;
    var temp = [...context.cart[0]];
    temp.map((item) => item.id === id ? item.quantity+=1 : null);
    temp.map(item => sum+=(item.price*item.quantity))
    context.total[1](sum);
    context.cart[1](temp);
  }

  const deleteItem = (e) => {
    var sum = 0;
    var pos = -1;
    var id = e.target.parentNode.parentNode.id;
    var temp = [...context.cart[0]];
    temp.map((item, index) => item.id === id ? pos=index : null)
    temp.map((item) => item.id === id ? item.quantity=1 : null)
    temp.splice(pos, 1);
    temp.map(item => sum+=(item.price*item.quantity))
    context.total[1](sum);
    context.cart[1](temp);
  }

  const checkout = () => {
    var temp = [...context.cart[0]];
    temp.map(item => item.quantity=1)
    context.cart[1]([]);
    context.drawerState[1](false);
    navigate('/checkout');
  }
  
  return (
    <div className="Navbar">
        <img onClick={()=> {navigate('/')}} src={require('./logo.png')} className="logo" alt="" />
        <div className="searchContainer">
            <select>
                <option>All</option>
            </select>
            <input type="text" className="seachbar" />
            <button>
            <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        {context.signedUser[0]==="" ? <Link className='BigSmall' to='/login'>
          <p>Hello, <span className="bigFont">Login/SignUp</span></p>
        </Link> : <p style={{color: 'white', fontSize: '1.5vw',marginTop: '1%'}}>Hello, <br/><span className="bigFont">{context.signedUser[0]}</span></p>}
        
        <Link className='BigSmall' to='/products'>
          <p>All <br/><span className="bigFont">Products</span></p>
        </Link>
        <div className="cartCounter">{context.cart[0].length}</div>
        <i onClick={()=>{context.drawerState[1](true)}} className="fas fa-shopping-cart"></i>
        <Drawer anchor='right' open={context.drawerState[0]} onClose={()=>{context.drawerState[1](false)}}>
        {context.cart[0].length === 0 ? <div className="EmptyCart"><h3>Your Cart is Empty</h3><img src="https://c.tenor.com/8BeuRyZSb90AAAAC/shopping-cart-shopping.gif" alt="Epty Cart GIF" /><h4>Go Add Some Items Now!!</h4></div> : 
        <div className="CartDisplay">
          <h1>Your Shopping Cart</h1>
          <h4>Total Cart Value: ₹{context.total[0]}</h4>
        <table>
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {context.cart[0].map((item, index) => <tr key={index} id={item.id}><td><img src={item.photo} alt="" /></td><td>{item.name}</td><td><button onClick={minus}>-</button><span>{item.quantity}</span><button onClick={plus}>+</button></td><td><i onClick={deleteItem} className="fa-solid fa-trash-can"></i></td></tr>)}
          </tbody>
        </table>
        <button onClick={checkout} className='checkout'>Checkout</button>
        </div>
        
        }
        </Drawer>
    </div>
    
  )
}

