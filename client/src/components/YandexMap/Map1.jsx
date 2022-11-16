import React from 'react'
import { YMaps, Map } from '@pbe/react-yandex-maps';
import ReactDOM from "react-dom";

const Map1 = () => {
  // console.log(YMaps.ready(init) , 'YMAPS' );
  // function init(){
  //   const suggestView1 = new YMaps.SuggestView('suggest1');
  // }
  return (
    <YMaps>
    <div>
      <Map  width='100%'
      max-height='30%'
      defaultState={{
           center: [55.75, 37.57],
           zoom: 9,
             }}>
        
      </Map>
    </div>
  </YMaps>
  )
}

export default Map1




