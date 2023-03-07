import React from 'react';
import { useState,useEffect } from 'react';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useHistory , Link} from "react-router-dom";
import './uploadform.css';
import {projectfirestore, projectstorage} from './firebase.js'
import { updateDoc,arrayUnion, onSnapshot,setdoc,doc } from "firebase/firestore"; 
import { getDownloadURL,ref,uploadBytesResumable } from 'firebase/storage';
import {IoCloudUpload, IoTrash} from 'react-icons/io5'


import Nav from './Nav';

const Uploadform = () => {
    const [error, setError] = useState(null);
    const [loading,setloading] = useState(false)
    const [imgloading,setimgloading] = useState(false)
    const [file, setFile] = useState(null);
    const [user,setUser] = useState({});
    const [imagesucess,setimagesuccess] = useState(null);
    const [imagelist,setImagelist] = useState([])
    const [progress,setprogress] = useState(null)
    const [url,seturl] = useState(null);
    const router = useHistory()
   
  
   
    let options = ['image/png', "image/jpg", "image/jpeg"];
    const Upload = (e)=>{
        setloading(true);
        const file = e.target.files[0]
        const storageref = ref(projectstorage,`images/${user?.email}-${file.name}`);
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
                  id:`${user?.uuid}`,

                  imageurl:url
              }
              await updateDoc(doc(projectfirestore, "images", `${user?.email}`), {
                saveImages:arrayUnion({
                 
                    id:`${user?.uuid}`,
  
                    imageurl:url
                
              })
              }  
           )
              setloading(false);
              seturl(null)
              
            }
          }
          catch{
          
          }
          }
          
   
    
   useEffect(()=>{
      
     
   
   },[])
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
    
        setUser(user)
       
        // ...
      } else {
        // User is signed out
        // ...
        router.push("/login")
        return;
      }
    });})

  return (

  <> 
 
  <Nav/>
  
   <div className="fileupload">
            <div className="flex flex-col items-center justify-center">
               
                    <label for='img' style={{textAlign:'center',marginTop:'7px'}}>
                       
                        {url ? null :<IoCloudUpload fontSize="100"/>}
                    </label><br/><br/>
                    <input type="file"  id='img' style={{display:'none'}} onChange={Upload}/>

                    <img src={url} className="w-[150px]"/><br/>
                    <button type="submit" onClick={uploadimage} style={{background:'orangered',color:'white',width:'250px',border:'none',padding:'6px',marginBottom:'20px' ,borderRadius:'15px'}} className="text-sm">Upload Image</button>
               
               
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