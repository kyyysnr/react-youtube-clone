import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSelectedData } from '../../apis';
import { Store } from '../../store';
import VideoPlay from '../VideoPlay/VideoPlay';
import Style from './VideoDetail.module.scss'
import Linkify from 'react-linkify';


function VideoDetail() {
  const { globalState, setGlobalState } = useContext(Store)
  const location =useLocation();
  const setSelectedVideo = async () => {
    const searchParams  = new URLSearchParams(location.search);
    const id = searchParams.get('v')
    await fetchSelectedData(id).then((res) => {
      console.log('res',res)
      const item = res.data.items.shift()
      setGlobalState({type: 'SET_SELECTED',payload: {selected: item}})
    })
  }
  useEffect(() =>{
    
    
    setSelectedVideo()


  },[])
  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id}/>
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
       <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
      
    </div>
  ) : ( <span> No data </span> )
}

export default VideoDetail
