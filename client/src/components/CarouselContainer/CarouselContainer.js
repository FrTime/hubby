import React, {Component} from 'react';
import  {Carousel} from 'react-bootstrap';
import "./CarouselContainer.css";
import pic from './smartmirrorproject.jpg';
import foyer from './hall.jpg';



export default class CarouselContainer extends Component {


 render(){
return(
<Carousel className="carouselContainer">
 <Carousel.Item>
    <img width={"100%"} height={"auto"} alt="900x500" src={pic} />
    <Carousel.Caption>
      <h3>Bathroom</h3>
      <p>New possibilities for better time management. Start your day in the know...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={1677} height={550} alt="900x500" src={foyer} />
    <Carousel.Caption>
      <h3>Foyer</h3>
      <p>Glance at your appointments or check the weather on your way out the door!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="./imagesphone.jpg" />
    <Carousel.Caption>
      <h3>Side Table</h3>
      <p>Have access to your contacts and calendar anywhere</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="./images.jpg" />
    <Carousel.Caption>
      <h3>DIY hubby</h3>
      <p>Use our site to power any monitor and utilize the endless possibilities. Simple to make your own!</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  

)};
}


  