import React, { createContext, useState } from "react";
import array from "../data";

const MyContext = createContext();

const Main = (props) => {
    const products = array;
    const [users, setUsers] = useState([{name:'Kushal', email:'kushal@gmail.com',password:'12345'}]);
    const [cart, setCart] = useState([]);
    const [signedUser, setSignedUser] = useState("");
    const [drawerState, setDrawerState] = useState(false);
    const [total, setTotal] = useState(0);
return (
    <MyContext.Provider value={{users:[users, setUsers], signedUser: [signedUser, setSignedUser], products, cart: [cart, setCart], drawerState: [drawerState, setDrawerState], total : [total, setTotal]}} >
    {props.children}
    </MyContext.Provider>
    )
}

export  { Main, MyContext };