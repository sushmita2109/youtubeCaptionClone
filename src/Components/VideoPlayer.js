import React from 'react'
import './App.css';
function VideoPlayer() {
  return (
    <div className='video-player'>
      <div className='video'>
          <h1>Video</h1>
      </div>
      <div className='video-pause'>
          <small>Enter subtitle faster with the keyboard shortcut</small>
          <div className='typing'>
          <input type="checkbox" id="typing" name="typing" value="Pause" /><small>Pause while typing</small>
          </div>
      </div>
    </div>
  )
}

export default VideoPlayer
