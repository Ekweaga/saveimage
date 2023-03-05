import React,{useState,useEffect} from 'react'
import {projectfirestore, projectstorage} from './firebase.js'
import { collection, getDocs,query, orderBy, limit,deleteDoc,doc,onSnapshot } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, deleteObject, uploadBytesResumable } from "firebase/storage";
import {IoCloudUpload, IoTrash} from 'react-icons/io5'
import {MdDownloading} from 'react-icons/md'
import Nav from './Nav.js';
import {BsUpload} from 'react-icons/bs'
import './gallery.css'
import {Link,useHistory} from "react-router-dom"
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from './firebase';


const Gallery = () => {
  const [feeds,setfeeds] = useState([])
  const [user,setUser] = useState({});
  const history = useHistory();
  const [ galleryloading, setgalleryloading] = useState(false)

  const deleteimage = (id)=>{
    const deleteref = ref(projectstorage)
    deleteDoc(doc(projectfirestore,"images",id)).then(() => {
  // File deleted successfully
}).catch((error) => {
  // Uh-oh, an error occurred!
});
   
  }

    const getallfeeds = async ()=>{
      setgalleryloading(true)
      const items = []
      onSnapshot(doc(projectfirestore,"images",`${user?.email}`), doc=>{
        items.push(doc.data()?.saveImages)
      })
    
     setfeeds(items)

     console.log(feeds)
    }
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
      
          setUser(user)
         
          // ...
        } else {
          // User is signed out
          // ...
          return;
        }
      });})

    useEffect(()=>{
getallfeeds();
    },[])
  return (
    <>
  
<div className="grid grid-cols-1 md:grid-cols-3">
    <div className="flex flex-col items-center justify-center mt-50" style={{marginTop:'230px'}}> {feeds.length === 0 ? (<><div className="flex flex-col items-center justify-center gap-10"><div style={{marginTop:'100px'}} className="text-3xl">Library empty</div>
    <div onClick={()=>history.replace('/upload')}><BsUpload fontSize="50"/></div></div></>):(<div> {galleryloading ?<MdDownloading fontSize="50" style={{marginTop:'0px'}} className="mb-20"/> : (<div className="galleries">
     {
      feeds.map((feed,index)=>{
        return (<>
       <div  key={index} className="gallery"><img src={feed?.imageurl ? feed?.imageurl : null}/><span><IoTrash onClick={deleteimage(feed.id)}/></span></div> 

        </>)
      })
     }
    </div>)} </div>)}
  
    </div>
    </div>
    </>
  )
}

export default Gallery;