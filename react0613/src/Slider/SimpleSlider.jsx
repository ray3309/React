//rafce
import React from "react";

import Slider from 'react-slick'; // 최상위 node_modules에서 불러옴
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {

  const settings = {
    dots: true,         //슬라이더 하단 점 메뉴
    infinite: true,     //무한반복
    speed: 500,         //전환 속도
    slidesToShow: 1,    //한번에 보여줄 슬라이드 수
    slidesToScroll: 1,   //한번에 넘길때 몇개씩 넘길지에 대한 수량
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container" style={{ textAlign: 'center', backgroundColor: 'orange', marginBottom: '30px'}}>
      <Slider {...settings}>
        <div>
          <h3 style={{textAlign: "center"}}>1</h3>
        </div>
        <div>
          <h3 style={{textAlign: "center"}}>2</h3>
        </div>
        <div>
          <h3 style={{textAlign: "center"}}>3</h3>
        </div>
        <div>
          <h3 style={{textAlign: "center"}}>4</h3>
        </div>
        <div>
          <h3 style={{textAlign: "center"}}>5</h3>
        </div>
        <div>
          <h3 style={{textAlign: "center"}}>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default SimpleSlider;
