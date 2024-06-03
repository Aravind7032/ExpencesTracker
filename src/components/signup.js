import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './signup.css'

const Signup = () => {
   
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationMessage, setRegistrationMessage] = useState('');
    const [errMsg, setErrMsg] = useState('');
  
    const navigate = useNavigate();
  
    const handleRegister = () => {
      if (!name || !mobile || !email || !password) {
        setErrMsg('Please fill in all fields.');
        return;
      }
  
      const storeddetails = {
        name: name,
        mobile: mobile,
        email: email,
        password: password
      };
  
      localStorage.setItem('userDetails', JSON.stringify(storeddetails));

      setRegistrationMessage('Registration Successful');
      setErrMsg('');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    };


  return (
   <div className='container2'>
  
  
  <form >
        <div className="header">
           
            <div className="text">SignUp</div>
          
        </div>

        <div className="inputs">
            <div className="input">
                
                <input type="text" placeholder='Name'    value={name}
            onChange={(e) => setName(e.target.value)}
  />
            </div>
           
           <div className="input">
           
                <input type="text" placeholder='Mobileno'    value={mobile}
            onChange={(e) => setMobile(e.target.value)}
 />
            </div> 

            <div className="input">
           
                <input type="email" placeholder='Email Id'    value={email}
            onChange={(e) => setEmail(e.target.value)}
  />
            </div>
            <div className="input">

                <input type="password" placeholder='Password'    value={password}
            onChange={(e) => setPassword(e.target.value)}
 />
            </div>
        </div>
       
       
        <div className="submit">
          <button  onClick ={handleRegister} className='sub' id='sub' > Sign up</button>
         <Link to="/Login1"><button type='submit'className='sub' id='sub' > Login</button> </Link>
        </div>
        {errMsg && <div className="err">{errMsg}</div>}
      {registrationMessage && <div className="reg">{registrationMessage}</div>}

      </form>


   </div>
  )
}
export default Signup
