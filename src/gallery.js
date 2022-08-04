import React,{useState,useEffect} from 'react'
import {projectfirestore, projectstorage} from './firebase.js'
import { collection, getDocs,query, orderBy, limit } from "firebase/firestore";
import {IoCloudUpload, IoTrash} from 'react-icons/io5'
import {MdDownloading} from 'react-icons/md'
import Nav from './Nav.js';
import './gallery.css'

const Gallery = () => {
  const [feeds,setfeeds] = useState([])
  const [ galleryloading, setgalleryloading] = useState(false)

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
   {galleryloading ?<MdDownloading fontSize="50" style={{marginTop:'150px'}}/> : (<div className="galleries">
     {
      feeds.map((feed,index)=>{
        return (<>
       <div  key={index} className="gallery"><img src={feed?.imageurl}/><IoTrash/></div> 

        </>)
      })
     }
    </div>)} </>
  )
}

export default Gallery;