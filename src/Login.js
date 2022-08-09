import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MyContext } from './Contexts/Main';
import { Navbar } from './Navbar.js';

const Login = () => {

  const context = useContext(MyContext);
  const navigate = useNavigate();


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const validate = (e) => {
    e.preventDefault();
    var currentEmail = document.getElementById('loginEmail').value;
    var currentPassword = document.getElementById('loginPassword').value;
    var temp = context.users[0].filter(user => user.email.toLowerCase() === currentEmail.toLowerCase() && user.password === currentPassword);
    if(temp.length === 0)
    {
      document.getElementById('loginEmail').focus();
      handleOpen();
      return;
    }
    else{
      context.signedUser[1](temp[0].name);
      navigate('/');
    }
    
  }
  return (
    <>
    <Navbar />
    <div className="Login">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" />
        <form className="form" onSubmit={validate}>
            <h2>Sign-In</h2>
            <input required type="email" id="loginEmail" className="loginEmail" placeholder="Email ID"/>
            <input required type="password" id="loginPassword" className="loginPassword" placeholder="Password" />
            <button type="submit">Sign-In</button>
            <p className='declaration'>By Continuing, you agree to Amazon's <span style={{color: 'dodgerblue'}}>Terms & Conditions</span></p>
            <p className='declaration'>New to Amazon ?</p>
            <Link id="registerButton" to='/register'>Create your own Amazon account</Link>
        </form> 

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{color: 'red', }} id="modal-modal-title" variant="h6" component="h2">
            Warning!!!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Invalid Credentials. Please try again !!
          </Typography>
        </Box>
      </Modal>
    </div>
    </>
    
  )
}

export default Login