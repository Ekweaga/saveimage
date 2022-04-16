import React from 'react';
import { useState } from 'react';
import Progressbar from './hooks/progessbar';
import Usestorage from './hooks/usestorage';

const Uploadform = () => {
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);
    let options = ['image/png', "image/jpg", "image/jpeg"];

    const selectfile = (e)=>{
        let selectedfile = e.target.files[0];
        if(selectedfile && options.includes(selectedfile.type)){
            setFile(selectedfile)
          //  console.log(selectedfile)
           // console.log(file)
            setError(null)
        }
        else{
            setError("Please use image of png, jpg, jpeg only");
            setFile(null);
        }
    }

  return (
  <>  <div>
            <div>
                <form>
                    <label for='img' style={{textAlign:'center'}}>
                        <span style={{fontSize:'30px',border:'1px solid crimson', padding:'5px',borderRadius:'50%',textAlign:'center'}}>+</span>
                       
                    </label>
                    <input type="file" onChange={selectfile} id='img' style={{display:'none'}}/>
                </form>
               
            </div>
            <div>
                {error && <div>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <Progressbar file={file} setfile={setFile}/>}
            </div>


    </div>
   
    </>
  )
}

export default Uploadform;