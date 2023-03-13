import React from 'react'
import YouTube from 'react-youtube';

function VideoPlay({id}) {
  return (
    <div>
      <YouTube videoId={id} />
    </div>
  )
}

export default VideoPlay
