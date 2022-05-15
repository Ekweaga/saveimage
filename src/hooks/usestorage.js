import {useEffect, useState} from 'react'

import { async } from '@firebase/util';



const Usestorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        

    }, [file])

  return {progress, url, error}
}

export default Usestorage;