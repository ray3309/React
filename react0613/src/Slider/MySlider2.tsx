import React, { useEffect, useState } from "react";

import Slider from 'react-slick'; // 최상위 node_modules에서 불러옴
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Data {
    id:number,
    img:string,
    text:string
}
const MySlider2: React.FC = () => {
    const settings = {
        dots: true,         //슬라이더 하단 점 메뉴
        infinite: true,     //무한반복
        speed: 500,         //전환 속도
        slidesToShow: 1,    //한번에 보여줄 슬라이드 수
        slidesToScroll: 1,   //한번에 넘길때 몇개씩 넘길지에 대한 수량
        autoplay: true,
        autoplaySpeed: 2000,
    };
  
    const [homeData,setHomeData] = useState<Data[]>([]);//서버로부터 가져온 data객체의 존재 상태 변화를 감지하기 위해 설정 
    const [loading,setLoading] = useState(true);//로딩에 대한 상태변화 정보
    const [error,setError] = useState('');//에러에 대한 상태변화 정보
    
    const url = 'http://192.168.0.3:8080/Web_0613_Exam/HomeDataFront?num=1'
    useEffect(() => {//초기화 시에 한번만 데이터를 로드하기 위한 처리 훅
        const fetchHomeData = async () => {
            try{
                setLoading(true);

                const resp = await fetch(url);//fetch 함수를 호출해서 해당 url로부터 data 가져오기

                if (!resp.ok) {//만일 서버 응답 없을시 실행할 함수 호출
                    throw new Error("서버 응답 오류");
                }

                const data = await resp.json();//전달받은 data를 json객체화

                // 단일 객체와 배열 모두 처리
                setHomeData(Array.isArray(data) ? data : [data]);

            } catch (err) {
                console.error(err);
                setError("데이터를 불러오지 못했습니다.");
            } finally {//setLoading false로 줘서 최종적으로 빠져나갈 수 있도록 하기
               setLoading(false); 
            }
        };

        fetchHomeData();//딱 한번만 실행!
    },[])
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
                            background: `url(images/${hdata.img}) center/cover no-repeat`
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

export default MySlider2;
