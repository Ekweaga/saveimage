import React from 'react';
import { useState,useEffect } from 'react';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useHistory , Link} from "react-router-dom";
import './uploadform.css';
import {projectfirestore, projectstorage} from './firebase.js'
import { doc, setDoc } from "firebase/firestore"; 

import {MdPhotoLibrary} from 'react-icons/md'
import {FcHome,FcAbout,FcMenu} from 'react-icons/fc'

import { ref,getDownloadURL,uploadBytes,deleteObject,listAll,uploadBytesResumable} from 'firebase/storage';

const Uploadform = () => {
    const [error, setError] = useState(null);
    const [loading,setloading] = useState(true)
    const [imgloading,setimgloading] = useState(false)
    const [file, setFile] = useState(null);
    const [user,setuser] = useState(null);
    const [imagesucess,setimagesuccess] = useState(null);
    const [imagelist,setImagelist] = useState([])
    const [progress,setprogress] = useState(null)
    const [url,seturl] = useState(null);
  
   
    let options = ['image/png', "image/jpg", "image/jpeg"];
    const Upload = (e)=>{
        setloading(true);
        const file = e.target.files[0]
        const storageref = ref(projectstorage,`images/${Date.now()}-${file.name}`);
        const uploadTask = uploadBytesResumable(storageref, file);
        
        uploadTask.on("state_changed", (snapshot)=>{
          const uploadprogress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setprogress(uploadprogress)
        },  (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            seturl(downloadURL)
            setloading(false)
          });
        }
        )
    }
    

    const uploadimage = async ()=>{
        try{
            setloading(true)
            if(!url){
              alert("Error")
            }
            else{
              const data = {
                  id:`${Date.now()}`,

                  imageurl:url
              }
              await setDoc(doc(projectfirestore, "images", `${Date.now()}`), data)
              setloading(false);
              
            }
          }
          catch{
          
          }
          }
          
   
    const history = useHistory();
    const logout = async ()=>{
            await signOut(auth)
            history.replace("/login");
    }
    
   useEffect(()=>{
      
     
   
   },[])

  return (

  <> 
 
  
  
   <div>
            <div>
               
                    <label for='img' style={{textAlign:'center'}}>
                        <span style={{fontSize:'30px',border:'1px solid crimson', padding:'5px',borderRadius:'50%',textAlign:'center'}}>+</span>
                       
                    </label>
                    <input type="file"  id='img' style={{display:'none'}} onChange={Upload}/>
                    <button type="submit" onClick={uploadimage}>Upload Image</button>
               
               
            </div>
            <div>
                {error && <div>{error}</div>}
              
                {file &&<div>{imagesucess}</div>}
                {imgloading && (<p>Loading</p>)}
               
            </div>


    </div>
    <div>{loading && (<p>Loading</p>)}</div>
   
    </>
  )
}

export default Uploadform;