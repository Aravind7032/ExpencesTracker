import React,{useState} from 'react'
import './login.css'
export const Login1 = () => {
 
   
    // const[email,setEmail]=useState('');
    // const[password,setPassword]=useState('');
    // const[valid,setValid]=useState(false)
   
   
    // const handlersubmit=(event)=>{
    //     event.preventDefault();
    //    if((email==='aravind@gmail.com')&&(password==='12345'))
    //     {
    //         setValid(true)
    //    }
    // }
  
  return (
    <div className='body'>
    <div className='container1'>
        <form  action="/dashboard">
        <div className="header">
           
            <div className="text">Login</div>
        </div>

        <div className="inputs">

            <div className="input">
           
                <input type="email" placeholder='Email Id'   />
            </div>
            <div className="input">

                <input type="password" placeholder='Password' />
            </div>
        </div>
        <div className="forgot">Forgot Password? <span>Click Here</span></div>
       
        <div className="submit">
          <button type='submit'className="sub">Login </button>
        </div>
      </form>
    </div>
    </div>
  )
}

