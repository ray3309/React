import React from "react";
import HTMLFlipBook from "react-pageflip";

interface BookProps {
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    className?: string;

    //showCover가 true이면 첫번째 페이지를 표지로 사용
    showCover?: boolean;
    autoSize?: boolean;

    //페이지 넘길때 그림자의 투명도값(Default 1, 0~1)
    maxShadowOpacity?: number;
    mobileScrollSupport?: boolean;  //모바일 장치에서 스크롤로 넘길 것인지?
}

//json data : server size data?
const Data = [
    {
        image: "images/bg1.png",
        text: "산책겸 점심 먹었다1 \n 맛났다1"
    },
    {
        image: "images/bg2.png",
        text: "산책겸 점심 먹었다2 \n 맛났다2"
    },
    {
        image: "images/bg3.png",
        text: "산책겸 점심 먹었다3 \n 맛났다3"
    },
    {
        image: "images/bg4.png",
        text: "산책겸 점심 먹었다4 \n 맛났다4"
    },
    {
        image: "images/bg5.png",
        text: "산책겸 점심 먹었다5 \n 맛났다5"
    }
]

const Diary: React.FC = () => {

    return (
        <div>
            <h2>Diary</h2>
            <div style={{
                width: '620px', margin: '20px auto',
                overflow: 'hidden', borderRadius: '10px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
            }}>
                <HTMLFlipBook width={300} height={400} showCover={true}
                    {...({ style: {}, usePortrait: true } as any)}
                    autoSize={true} mobileScrollSupport={true} maxShadowOpacity={0.2}
                    usePortrait={true}
                >

                    {
                        (() => Data.flatMap((e, i) => [
                            <div key={`img-${i}`} style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#fff',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden',
                            }}>
                                <img src={e.image} alt={`Diary Image ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>,

                            //텍스트 페이지
                            <div key={`txt-${i}`} style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#fff',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '20px',
                                fontSize: '18px',

                            }}>
                                <p style={{ margin: 0 }}>{e.text}</p>
                            </div>
                        ]))()
                    }
                </HTMLFlipBook>
            </div>
        </div>
    )
}

export default Diary;
