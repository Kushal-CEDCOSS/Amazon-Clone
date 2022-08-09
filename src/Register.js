import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { MyContext } from './Contexts/Main';
import './Register.css';

const Register = () => {
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
    var name = document.getElementById('registerName').value;
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;
    var confirmPass = document.getElementById('registerConfirmPassword').value;
    if(password !== confirmPass)
    {
      document.getElementById('registerPassword').focus();
      handleOpen();
      return;
    }
    var temp = [...context.users[0], {name: name, email: email, password: password}];
    context.users[1](temp);
    navigate('/login');
  }
  return (
      <>
      <Navbar />
      <div className="Register">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" />
        <form className="form2" onSubmit={validate}>
            <input required type="text" id="registerName" className="registerName" placeholder="Username"/>
            <input required type="email" id="registerEmail" className="registerEmail" placeholder="Email ID"/>
            <input required type="password" id="registerPassword" className="registerPassword" placeholder="Password" />
            <input required type="password" id="registerConfirmPassword" className="registerConfirmPassword" placeholder="Confirm Password" />
            <button type="submit" className='registerButton'>Register</button>
            <p>Already have an account?</p>
            <Link to="/login" className="toSignIn">Sign In</Link>
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
            Password and Confirm Passwords do not match
          </Typography>
        </Box>
      </Modal>
        </div>
      </>
    
  )
}

export default Register