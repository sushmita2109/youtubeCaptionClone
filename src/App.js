import './Components/App.css';
import Caption from './Components/Caption';
import VideoPlayer from './Components/VideoPlayer';
import AudioVisualizer from './Components/AudioVisualizer';

function App() {
  return (
    <div className="App">
      <div className='caption-video'>
        {/* <nav className='navbar-cont'>
        <i class="fa fa-keyboard-o"></i>
          <span>English</span>
          <hr className='new1'></hr>
        </nav> */}
      <Caption/>
      <VideoPlayer/>
      </div>
      <div>
      <AudioVisualizer/>
      </div>
    </div>
  );
}

export default App;
