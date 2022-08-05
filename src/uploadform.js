import React from 'react';
import { useState,useEffect } from 'react';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useHistory , Link} from "react-router-dom";
import './uploadform.css';
import {projectfirestore, projectstorage} from './firebase.js'
import { doc, setDoc } from "firebase/firestore"; 
import {IoCloudUpload, IoTrash} from 'react-icons/io5'


import { ref,getDownloadURL,uploadBytes,deleteObject,listAll,uploadBytesResumable} from 'firebase/storage';
import Nav from './Nav';

const Uploadform = () => {
    const [error, setError] = useState(null);
    const [loading,setloading] = useState(false)
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
              seturl(null)
              
            }
          }
          catch{
          
          }
          }
          
   
    
   useEffect(()=>{
      
     
   
   },[])

  return (

  <> 
 
  <Nav/>
  
   <div className="fileupload">
            <div>
               
                    <label for='img' style={{textAlign:'center',marginTop:'100px'}}>
                       
                        {url ? null :<IoCloudUpload fontSize="100"/>}
                    </label><br/><br/>
                    <input type="file"  id='img' style={{display:'none'}} onChange={Upload}/>

                    <img src={url}/><br/><br/>
                    <button type="submit" onClick={uploadimage} style={{background:'orangered',color:'white',width:'250px',border:'none',padding:'9px',borderRadius:'15px'}}>Upload Image</button>
               
               
            </div>
            <div>
                {error && <div>{error}</div>}
              
                {file &&<div>{imagesucess}</div>}
                {imgloading && (<p>Loading</p>)}
               
            </div>
            <div>{loading && (<p>Uploading.....</p>)}</div>

    </div>
    
   
    </>
  )
}

export default Uploadform;