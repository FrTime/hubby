import React, {Component} from 'react';
import  {Carousel} from 'react-bootstrap';
import "./CarouselContainer.css";
import pic from './smartmirrorproject.jpg';
import screen from './weather_widget.jpg';
import business from './Lowerdeck.jpg';
import phone from "./imagesphone.jpg";



export default class CarouselContainer extends Component {


 render(){
return(
<Carousel className="carouselContainer">
 <Carousel.Item>
    <img width={"100%"} height={"auto"} alt="900x500" src={pic} />
    <Carousel.Caption className='carouseldata'>
      <h3>Smart Mirror</h3>
      <p>New possibilities for better time management. Start your day in the know...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img width={1677} height={550} alt="900x500" src={screen} />
    <Carousel.Caption className='carouseldata'>
      <h3>Personalize your Computer</h3>
      <p>Glance at your appointments or check the weather!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={'100%'} height={600} alt="900x500" src={business} />
    <Carousel.Caption className='carouseldata'>
      <h3>Add to your Business</h3>
      <p>Display information digitally</p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item>
    <img width={'100%'} height={600} alt="900x500" src={phone} />
    <Carousel.Caption className='carouseldata'>
      <h3>DIY hubby</h3>
      <p>Use our site to power any monitor and utilize the endless possibilities. Simple to make your own!</p>
    </Carousel.Caption>
  </Carousel.Item> */}
  </Carousel>
  

)};
}


  