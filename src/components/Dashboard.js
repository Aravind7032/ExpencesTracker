
import React ,{useState}from 'react'
import Piechart from './Piechart';
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';
import './dashbord.css'
export const Dashboard = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    // const[auth,setAuth]=useState(false);

    // if(auth){
    //  return <Redirect to='/detailview'/>
    // }
    const handleMouseEnter = () => {
        setShowDropdown(true);
      };
    
      const handleMouseLeave = () => {
        setShowDropdown(false);
      };
  return (
    <div className='dashboard'>

        <div className='nav'>

       <div class="menu1"
            
            className="plans"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ><div> <TiThMenu className='menu' /> 
          </div> 
          
           {showDropdown && (
            <div className='dropdown'>
            <a href=''>Download report</a>
            <a href=''>Categories</a>
            </div>
           
             )}</div>

       <div> <button className='setting'>Profile Settings</button></div>
        </div>
       
       <div className='profile'>
        <img src='https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532' alt=''></img>
        <hr></hr>
        <h2>R Aravind Kumar</h2>
       </div>
       <div className='container'>
     <div className='credit'>
        <h1> Credit</h1>
        <p> + 60,000$</p>
     </div>
     <div className='bal'>
        <h1> Balance</h1>
        <p>30,000$</p>
     </div>
     <div className='debit'>
        <h1>Debit</h1>
        <p>- 30,000$</p>
     </div>
       </div>
       
<div className='chart'>
    {/* <img src='https://media.geeksforgeeks.org/wp-content/uploads/20200625174925/half-pie-2.png' alt=''></img> */}
   <Link to="/detailview">  <Piechart  /> </Link>
</div>
    </div>
  )
}
