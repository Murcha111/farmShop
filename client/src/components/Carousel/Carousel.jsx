import '../Carousel/Carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import one from './redis.jpeg'
import two from './coolman.jpeg'
import three from './strawberry.jpeg'
import four from './girl.webp'
import five from './ded.jpg'


function MyCarousel() {
  return (
    <Carousel className='contant'>
      <Carousel.Item interval={1000} className='item'>
        <img
          className="d-block w-100"
          src={one}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000} className='item'>
        <img
          className="d-block w-100"
          src={two}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000} className='item'> 
        <img
          className="d-block w-100"
          src={three}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className='item'> 
        <img
          className="d-block w-100"
          src={four}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className='item'> 
        <img
          className="d-block w-100"
          src={five}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
