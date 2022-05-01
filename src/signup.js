import React,{useState,useRef} from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './signup.css'

function Signup() {
  const [loading,setLoading] = useState(false)
  const emailref = useRef();
  const passwordref = useRef();
 
  const  signup = async ()=>{
    setLoading(true)
    try{
      await createUserWithEmailAndPassword(auth,emailref.current.value,passwordref.current.value);
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
        <form onSubmit={signup}>
            <div>
                <input type="email" placeholder='Email' ref={emailref}/>
            </div>
            <div>
                <input type="password" placeholder='Password' ref={passwordref}/>
            </div><br/>
            <div>
              <button type="submit" >{loading ? "CREATING...." :"SIGN UP"}</button>

            </div>
        </form>
        </div>
  )
}

export default Signup