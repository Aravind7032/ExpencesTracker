import React from 'react'
import './Dv.css'
import { TiThMenu } from "react-icons/ti";


export const DetailView = () => {
  return (
    <div className='dv1'>
    <div className='nav'>
  <div className='manage'>Manage profile</div>
  <div className='dv'> <h1>Detailed View </h1></div>
  <div> <TiThMenu className='menu' /> </div>
   </div>
   <div className='content'>
    <div className='credit1'>
     <div className='c1'>
        <h1>Credit</h1>
     </div>
     <div className='c2'>
    <ul>  
     <li></li>
     <li></li>
     <li></li>


    </ul>
     </div>

    </div>
    <div className='debit1'>
        <div className='d1'>Debit</div>
        <div className='d2'>

          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    </div>
   </div>

   
   </div>
  )
}
