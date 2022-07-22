import React from 'react'
import './App.css';
import ReactPlayer from 'react-player';

function VideoPlayer() {
  return (
    <div className='video-player'>
      <div className='video'>
          <ReactPlayer width='450px' height='280px' controls url='https://youtu.be/7sDY4m8KNLc'></ReactPlayer>
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
