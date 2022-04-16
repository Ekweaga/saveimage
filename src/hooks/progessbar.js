import React from 'react'
import Usestorage from './usestorage';

const Progressbar = ({file,setfile}) => {
    const {url, progress} = Usestorage(file);
    console.log(progress,url)
  return (
    <div className='progress'>P</div>
  )
}

export default Progressbar;