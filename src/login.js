import React,{useState} from 'react'
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from './firebase';

function Login() {
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

    if(!email || !password ){
      seterror("Fields are empty")
      setLoading(false)
    }
   
   
    try{
       await signInWithEmailAndPassword(auth,email,password);
      setLoading(false)
     
    }
    catch(err){
      console.log(err)
    }
 
  

  }
  return (
    <div className='formtag'>
    <div style={{color:'white',background:'orangered',borderRadius:'50%',width:'100px',height:'100px', margin:'auto', marginTop:'100px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}> 
    <span style={{textAlign:'center',fontSize:'25px'}}>SOI</span> </div>
  <form>
     
      <div>
          <input type="email" placeholder='Email' name='email' value={email} onChange={handlechange}/>
      </div><br/>
      <div>
          <input type="password" placeholder='password' name='password' value={password} onChange={handlechange}/>
      </div><br/>
      <div>
        <button type="submit">SIGN UP</button>

      </div>
  </form>
  </div>
  )
}

export default Login