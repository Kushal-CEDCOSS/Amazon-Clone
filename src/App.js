import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Main } from './Contexts/Main';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Products from './Products';
import Checkout from './Checkout';


function App() {

  
  return (
    <div className="App">
      <Main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      </Main>
    </div>
  );
}

export default App;
