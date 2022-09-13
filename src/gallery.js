import React,{useState,useEffect} from 'react'
import {projectfirestore, projectstorage} from './firebase.js'
import { collection, getDocs,query, orderBy, limit,deleteDoc,doc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, deleteObject, uploadBytesResumable } from "firebase/storage";
import {IoCloudUpload, IoTrash} from 'react-icons/io5'
import {MdDownloading} from 'react-icons/md'
import Nav from './Nav.js';
import {BsUpload} from 'react-icons/bs'
import './gallery.css'
import {Link,useHistory} from "react-router-dom"

const Gallery = () => {
  const [feeds,setfeeds] = useState([])
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
      const querySnapshot = await getDocs(query(
        collection(projectfirestore,"images"),orderBy('id',"desc")
       
      ))
     querySnapshot.docs.map((doc)=>{
      items.push(doc.data())

      setgalleryloading(false)
     })
     setfeeds(items)

     console.log(feeds)
    }


    useEffect(()=>{
getallfeeds();
    },[])
  return (
    <>
    <Nav/>

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
    
    </>
  )
}

export default Gallery;