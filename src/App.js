import './Components/App.css';
import Caption from './Components/Caption';
import VideoPlayer from './Components/VideoPlayer';
import AudioVisualizer from './Components/AudioVisualizer';

function App() {
  return (
    <div className="App">
      <div className='caption-video'>
      <Caption/>
      <VideoPlayer/>
      </div>
      <AudioVisualizer/>
    </div>
  );
}

export default App;
