import React from 'react'
import './Footer.css'
// import facebook from './facebook.png'
// import instagram from './instagram.png'
import telegram from './telegram.png'
import vkontakte from './vkontakte.png'
import whatsapp from './whatsapp.png'

export default function Footer() {
  return (

    <div className='allFoot'>
      <br />
      <div className='foot'>
        <div>
          <h6> Связаться с нами </h6>
          <div className='allImg'>
            {/* <a  href=''><img src={facebook} className='img'></img></a> */}
            {/* <a  href=''><img src={instagram} className='img'></img></a> */}
            <a  href=''><img src={telegram} className='img'></img></a>
            <a  href=''><img src={vkontakte} className='img'></img></a>
            <a  href=''><img src={whatsapp} className='img'></img></a>
          </div>
        </div>
        
        <div>
          <h6> created by @Dream_Team </h6>
          
        </div>
        <div>
          <p> privacy policy </p>
          
        </div>
      </div>
      <br />
      <br />

    </div>

  )
}
