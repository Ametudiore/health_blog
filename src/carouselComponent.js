import Carousel from "react-bootstrap/Carousel";
import pix10 from './images/pix10.jpg'
import pic9 from './images/pic9.jpg'
import pic7 from './images/pic7.jpg'
import pic3 from './images/pic3.jpg'


const CarouselComponent = () => {
    return (
      <Carousel className="sliderHeight">
        <Carousel.Item className="sliderHeight">
          <img
            className="d-block w-100"
            src={pix10}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="sliderText">Safe Usage of Drug</h3>
            <p className="sliderText"></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="sliderHeight">
          <img className="d-block w-100" src={pic9} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="sliderText">Say no to Drug Abuse</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="sliderHeight">
          <img className="d-block w-100" src={pic7} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="sliderText">Say no to illicit use of drugs</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="sliderHeight">
          <img className="d-block w-100" src={pic3} alt="Fourth slide" />

          <Carousel.Caption>
            <h3 className="sliderText">See Doctor or a Pharmacist for Advice</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
    );
}
 
export default CarouselComponent;