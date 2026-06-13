import React from "react";

import Slider from 'react-slick'; // 최상위 node_modules에서 불러옴
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider: React.FC = () => {
    const settings = {
        dots: true,         //슬라이더 하단 점 메뉴
        infinite: true,     //무한반복
        speed: 500,         //전환 속도
        slidesToShow: 1,    //한번에 보여줄 슬라이드 수
        slidesToScroll: 1,   //한번에 넘길때 몇개씩 넘길지에 대한 수량
        autoplay: true,
        autoplaySpeed: 2000,
    };
  
    // Dummy Data After Prac
    const homeData = [
        {id: 1, img: "images/bg1.png", text: "Hello IDC Shinchon!"},
        {id: 2, img: "images/bg2.png", text: "Spring & React Specialist"},
        {id: 3, img: "images/bg3.png", text: "Toghter Growup"}
    ]

    return (
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Home</h2>
            <Slider {...settings}>
                {
                homeData.map(hdata => (
                    <div key={hdata.id}>
                        <div style={{
                            position: 'relative', height: '400px',
                            borderRadius: '10px', overflow: 'hidden',
                            background: `url(${hdata.img}) center/cover no-repeat`
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '40%', left: '32%',
                                background: 'rgba(0,0,0,0.5)',
                                fontWeight: 'bold',
                                padding: '20px 40px',
                                borderRadius: '8px',
                            }}>{hdata.text}</div>
                        </div>
                    </div>
                ))
            }
            </Slider>
        </div>
    )
}

export default MySlider;
