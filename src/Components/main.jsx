import Slider from 'react-slick';
import * as B from './main.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../Img/1.png';
import img2 from '../Img/2.png';
import NextArrow_img from '../Img/NextArrow.png';
import PrevArrow_img from '../Img/PrevArrow.png';
import PropTypes from 'prop-types';

function Detail1() {
    const settings1 = {   
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        appendDots: dots => (
          <B.CustomDots>
              {dots}
          </B.CustomDots>
        ),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    
    return (
        <div>
            <B.ImageSlider>
                <Slider {...settings1}>
                    <div className="slide-container">
                        <img className="img" src={img1} alt="1" />
                    </div>
                    <div className="slide-container">
                        <img className="img" src={img2} alt="2" />
                    </div>
                </Slider>
            </B.ImageSlider>
        </div>
    );
}

const NextArrow = ({ onClick }) => {
  return (
    <B.ArrowContainer right="true" onClick={onClick}>
      <img src={NextArrow_img} alt="Next" style={{ width: '50px', height: '50px' }} />
    </B.ArrowContainer>
  );
};
NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired, 
};

const PrevArrow = ({ onClick }) => {
  return (
    <B.ArrowContainer left="true" onClick={onClick}>
      <img src={PrevArrow_img} alt="Prev" style={{ width: '50px', height: '50px' }} />
    </B.ArrowContainer>
  );
};
PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Detail1;