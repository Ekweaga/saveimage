import React,{useState,useEffect} from 'react'
import {projectfirestore, projectstorage} from './firebase.js'
import { collection, getDocs,query, orderBy, limit } from "firebase/firestore";
  

const Gallery = () => {
  const [feeds,setfeeds] = useState([])

    const getallfeeds = async ()=>{

      const items = []
      const querySnapshot = await getDocs(query(
        collection(projectfirestore,"images"),orderBy('id',"desc")
      ))
     querySnapshot.docs.map((doc)=>{
      items.push(doc.data())

     
     })
     setfeeds(items)

     console.log(feeds)
    }


    useEffect(()=>{
getallfeeds();
    },[])
  return (
    <div>
     {
      feeds.map((feed,index)=>{
        return (<><p key={index}>{feed?.id}</p>
        <img src={feed?.imageurl}/></>)
      })
     }
    </div>
  )
}

export default Gallery;