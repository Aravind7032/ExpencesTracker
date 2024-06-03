import React from 'react'
import './login.css'
export const Login = () => {
 


  return (
<div className='formcontainer'>
<form>

<div className='form'>
  
<div className='fieldset'>
   <div className='heading'>Login</div>
        <table>
            <tr>
               <td>
                <label for="name">Email</label>
                </td>
                <td>
                <input type="Email"id="name" placeholder='Enter your name'></input>
               </td>

            </tr>
            <tr>
                <td>
                 <label for="password">password</label>
                </td>
                <td>
                 <input type="password"id="password" placeholder='Enter your password'></input>
                </td>
             </tr>
        </table>
        <div className='btn'>
              
               <input type="submit" value="login" id="btn1"></input>
              </div>
    </div>

</div>

</form>

</div>

  )
}
