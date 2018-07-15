import React, {Component} from 'react';
import  {Carousel} from 'react-bootstrap';
import "./CarouselContainer.css";
import pic from './smartmirrorproject2.jpg';
import screen from './weather_widget.jpg';
import forest from './screen.jpg';
import lobby from "./lobby4.jpg";



export default class CarouselContainer extends Component {


 render(){
return(
<Carousel className="carouselContainer">
 <Carousel.Item>
    <img width={"100%"} height={"auto"} alt="900x500" src={pic} />
    <Carousel.Caption className='carouseldata'>
      <h3>Smart Mirror</h3>
      <p>New possibilities for better time management. <br/>Start your day in the know...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img width={1677} height={550} alt="900x500" src={forest} />
    <Carousel.Caption className='carouseldata'>
      <h3>Personalize Your Desktop Screen</h3>
      <p>See your appointments and get your local weather!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={'100%'} height={600} alt="900x500" src={lobby} />
    <Carousel.Caption className='carouseldata'>
      <h3>Add to Your Place of Business</h3>
      <p>Display your information digitally</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  

)};
}


  