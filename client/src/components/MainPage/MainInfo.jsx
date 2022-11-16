import React from 'react'
import './MainPage.css'

const MainInfo = () => {
  return (
    <>
    <div className='mainInfo'>
    <div className='vegetableZoom'>
      <img className='mainImg' src='./images/vegetables.jpeg'></img>
      <div className='overlay'></div>
    </div>
    <div className='mainContent'>
      <h3>
      Счастливый фермер - 
Онлайн-платформа, объединяющая современные решения для фермеров: продажа и покупка товаров, поиск и пердоставление услуг, облегчение ремонта и обслуживания техники
      </h3>
    </div>
  </div>
      <div className='mainInfo'>
     
      <div className='mainContent_downer'>
        <h2>
        У Вас магазин продуктов? Не знаете, где найти надежного поставщика по более приятным ценам с качественным продуктом? 
        </h2>
      
      </div >
   
      <div className="hover-fold">
      <h3 className='tryReg'>
  
  Попробуйте разместить объявление. 

</h3>
  <div className="top">
    <div className="front face"></div>
    <div className="back face">
      <h3>Это просто, быстро и совершенно бесплатно!</h3>
    </div>
  </div>
  
  <div className="bottom"></div>
  
</div>
      {/* <div className='mainContent_downer'>
      <h1>
        ПОЗДРАВЛЯЕМ! Вы нашли то, что нужно!
        </h1>
        </div> */}
    </div>
    </>
  
  )
}

export default MainInfo
