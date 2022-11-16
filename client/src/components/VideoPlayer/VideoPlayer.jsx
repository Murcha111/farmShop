import React from 'react';
// import { Player } from 'video-react';
// import video from './'
import './VideoPlayer.css'



export default function VideoPlayer() {

  return (
    <div className='video'>
      <video src='./makrokadri-produktov-blinberi-malina_(videomega.ru).mp4' autoPlay loop muted />
      <p className="hello"> Сделайте первый шаг на пути развития в вашем деле!</p>
     
    </div>
    
  )
}
