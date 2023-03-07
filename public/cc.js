<div className="grid grid-cols-1 md:grid-cols-3">
    <div className="flex flex-col items-center justify-center mt-50" style={{marginTop:'230px'}}> {feeds.length === 0 ? (<><div className="flex flex-col items-center justify-center gap-10"><div style={{marginTop:'100px'}} className="text-3xl">Gallery empty</div>
    <div onClick={()=>history.replace('/upload')} className="flex items-center justify-center"><p>Upload Images</p><BsUpload fontSize="30"/></div></div></>):(<div> {galleryloading ?<MdDownloading fontSize="50" style={{marginTop:'0px'}} className="mb-20"/> : (<div className="galleries">
     {
      feeds.map((feed,index)=>{
        return (<>
       <div  key={index} className="gallery"><img src={feed?.imageurl ? feed?.imageurl : null} className="w-[250px]"/><span><IoTrash onClick={deleteimage(feed.id)}/></span></div> 

        </>)
      })
     }
    </div>)} </div>)}
  
    </div>
    </div>