import React from 'react';
import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';

function AudioVisualizer() {
  return (
    <div className='audio'>
     <SpectrumVisualizer
     audio="https://youtu.be/7sDY4m8KNLc"
     theme={SpectrumVisualizerTheme.radialSquaredBars}
        colors={['#009688', '#26a69a']}
        iconsColor="#26a69a"
        backgroundColor="white"
        showMainActionIcon
        showLoaderIcon
        highFrequency={8000}
     />
    </div>
  )
}

export default AudioVisualizer;
