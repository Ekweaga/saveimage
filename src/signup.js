import React,{useState,useRef,} from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory, Link } from "react-router-dom";
import './signup.css'

function Signup() {
  const history = useHistory();
  const [loading,setLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null)
  const [data, setdata] = useState({
    email:'',
    password:''
  });

 const {email,password} = data
 const handlechange = (e)=>{
   setdata({...data, [e.target.name]: e.target.value})
 }
  const  signup = async (e)=>{
    e.preventDefault();
    setLoading(true)

    if(email === "" || password === ""){
      seterror("Fields are empty")
    
  
      setLoading(false)
    }
    else if(password.length < 6){
      seterror("Password characters must be greater than 6")
      setLoading(false)
    }
   else{
    try{
      await createUserWithEmailAndPassword(auth,email,password)
     setLoading(false)
     setsuccess("Your Account is created successfully")
     setdata({
       email:'',
       password: ''
     });
     history.replace("/login");
   }
   catch(err){
   seterror(err.message)
   console.log(err)
   setLoading(false)
   }
   }
    
 
  

  }
 
  return (
    <div className='formtag'>
          <div style={{color:'white',background:'orangered',borderRadius:'50%',width:'100px',height:'100px', margin:'auto', marginTop:'100px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}> 
          <span style={{textAlign:'center',fontSize:'25px'}}>SOI</span> </div>

          <div><h2>Create an Account</h2>
          <p>Please create an account to continue</p>
          </div>
        <form onSubmit={signup}>
            <div>
                <input type="email" placeholder='Email' value={email} onChange={handlechange} name='email'/>
            </div>
            <div>
                <input type="password" placeholder='Password' value={password} onChange={handlechange} name='password'/>
            </div><br/>
            <div>
              <button type="submit" >{loading ? "CREATING...." :"SIGN UP"}</button>

            </div>
            <div>
              {error?<p>{error}</p>:''}
              {success ? <p>{success}</p>: ''}
            </div><br/>
            <div>Already have an account ? <Link to="login" style={{color:'black',textDecoration:'none'}}>Sign in</Link></div>
        </form>
        </div>
  )
}

export default Signup