import React,{useState} from 'react'
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from './firebase';
import { useHistory, Link } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [data, setdata] = useState({
    email:'',
    password:''
  
  });
  const [loading,setLoading] = useState(false);
  const [error, seterror] = useState(null)
  const {email,password} = data
  const handlechange = (e)=>{
    setdata({...data, [e.target.name]: e.target.value})
  }
  const  login = async (e)=>{
    e.preventDefault();
    setLoading(true)

    if(email === "" || !password === "" ){
      seterror("Fields are empty")
      setLoading(false)
    }

   else{
    try{
      await signInWithEmailAndPassword(auth,email,password);
     setLoading(false)
     history.replace("/upload");
   }
   catch(err){
     console.log(err)
     seterror(err.message)
   }

   }
   
   
  

  }
  return (
    <div className='formtag'>
    <div style={{color:'white',background:'orangered',borderRadius:'50%',width:'100px',height:'100px', margin:'auto', marginTop:'100px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}> 
    <span style={{textAlign:'center',fontSize:'25px'}}>SOI</span> </div>

    <div><h2>Welcome back, Login in</h2></div>
  <form onSubmit={login}>
     
      <div>
          <input type="email" placeholder='Email' name='email' value={email} onChange={handlechange}/>
      </div><br/>
      <div>
          <input type="password" placeholder='password' name='password' value={password} onChange={handlechange}/>
      </div><br/>
      <div>
        <button type="submit">LOGIN</button><br/>

      </div>
      <div>{error}</div><br/>
      <div>Don't have an account ? <Link to="signup" style={{color:'black',textDecoration:'none'}}>Sign up</Link></div>
  </form>
  </div>
  )
}

export default Login