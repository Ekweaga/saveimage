import React from 'react'

function Login() {
  return (
    <div className='formtag'>
    <div style={{color:'white',background:'orangered',borderRadius:'50%',width:'100px',height:'100px', margin:'auto', marginTop:'100px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}> 
    <span style={{textAlign:'center',fontSize:'25px'}}>SOI</span> </div>
  <form>
     
      <div>
          <input type="email" placeholder='Email'/>
      </div><br/>
      <div>
        <button type="submit">SIGN UP</button>

      </div>
  </form>
  </div>
  )
}

export default Login