import {useEffect, useState} from 'react'
import {projectfirestore, projectstorage} from '../firebase.js'
import React from 'react'
import { ref,getDownloadURL,uploadBytes,deleteObject} from 'firebase/storage';
import { async } from '@firebase/util';



const Usestorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        const storageRef = ref(projectstorage, file.name)

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, file.name).then((snapshot) => {
            let percent ;
            setProgress(percent)
          console.log('Uploaded a blob or file!');
        },(err)=>{
            setError(err)
        }, async ()=>{
            const snap = uploadBytes(storageRef , file.name);
            const url =  await getDownloadURL(ref(projectstorage,snap.ref.fullPath));
            setUrl(url)
        });

    }, [file])

  return {progress, url, error}
}

export default Usestorage;