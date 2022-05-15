import React from 'react';
import { useState,useEffect } from 'react';
import Progressbar from './hooks/progessbar';
import Usestorage from './hooks/usestorage';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useHistory } from "react-router-dom";
import './uploadform.css';
import {projectfirestore, projectstorage} from './firebase.js'

import { ref,getDownloadURL,uploadBytes,deleteObject,listAll} from 'firebase/storage';

const Uploadform = () => {
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);
    const [user,setuser] = useState(null);
    const [imagesucess,setimagesuccess] = useState(null);
    const [imagelist,setimagelist] = useState([])
    console.log(user)
   
    let options = ['image/png', "image/jpg", "image/jpeg"];
    const list = ref(projectstorage,`${user?.uid}`)

    const uploadimage = async ()=>{
       
        if(file && options.includes(file.type)){
            try{
                const storageref = ref(projectstorage,`${user?.uid}/${file.name}`);
                await uploadBytes(storageref,file).then((snapshot)=>{
                    getDownloadURL(snapshot.ref).then((url)=>{
                        setimagelist((prev)=>[
                            ...prev, url
                        ])
                    })
                  
                })
                setimagesuccess("image uploaded");
                   setError(null)
            }
            catch(err){
                console.log(err)
            }
           
       
        }
        else{
            setError("Please use image of png, jpg, jpeg only");
           
        }
    }
   
    const history = useHistory();
    const logout = async ()=>{
            await signOut(auth)
            history.replace("/login");
    }
    
   useEffect(()=>{
       onAuthStateChanged(auth,(currentuser)=>{
           setuser(currentuser)
          
       });
listAll(list).then((response)=>{
    console.log(response)
    response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
            setimagelist((prev)=>[...prev,url])
        })
    })
})
   },[])

  return (

  <> 
  <div className='head'>
     
          <h2>SOI</h2>
          <div style={{display:'flex',justifyContent:'space-between'}}>
          {user?.email}
          <div style={{marginLeft:'10px'}}>
              <button onClick={logout} style={{background:'white',color:'orangered',border:'none',padding:'6px',width:'50px'}}>logout</button>
          </div>

          </div>
         
     

  </div>
  
   <div>
            <div>
               
                    <label for='img' style={{textAlign:'center'}}>
                        <span style={{fontSize:'30px',border:'1px solid crimson', padding:'5px',borderRadius:'50%',textAlign:'center'}}>+</span>
                       
                    </label>
                    <input type="file"  id='img' style={{display:'none'}} onChange={(e)=>{setFile(e.target.files[0])}}/>
                    <button type="submit" onClick={uploadimage}>Upload Image</button>
               
               
            </div>
            <div>
                {error && <div>{error}</div>}
              
                {file &&<div>{imagesucess}</div>}
               
            </div>


    </div>
    <div>
        {imagelist.map((url)=>{
            return <img src={url}/>
        })}
    </div>
   
    </>
  )
}

export default Uploadform;