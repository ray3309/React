import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

// 일기 데이터 타입
interface DiaryData {
    title: string;
    date: string;
    image: string;
    content: string;
}

const DiaryFetch: React.FC = () => {

    // 서버에서 조회한 일기 데이터
    const [diary, setDiary] = useState<DiaryData[]>([]);

    // 로딩 및 에러 상태
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const url =
        "http://192.168.0.3:8080/Web_0612_Exam/diaryFront?num=1";

    // 컴포넌트 최초 렌더링 시 데이터 조회
    useEffect(() => {

        const fetchDiaryData = async () => {
            try {
                setLoading(true);

                const resp = await fetch(url);

                if (!resp.ok) {
                    throw new Error("서버 응답 오류");
                }

                const data = await resp.json();

                // 단일 객체와 배열 모두 처리
                setDiary(Array.isArray(data) ? data : [data]);

            } catch (err) {
                console.error(err);
                setError("데이터를 불러오지 못했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchDiaryData();

    }, []);

    // 조건부 렌더링
    if (loading) return <p>loading중...</p>;
    if (error) return <p>{error}</p>;
    if (diary.length === 0) return <p>NoData</p>;

    return (
        <div>
            <h2>Diary</h2>

            {/* FlipBook 영역 */}
            <div
                style={{
                    width: "620px",
                    margin: "20px auto",
                    overflow: "hidden",
                    borderRadius: "10px",
                    boxShadow: "0 8px 20px rgba(0,0,0,1)",
                }}
            >
                <HTMLFlipBook
                    width={300}
                    height={400}
                    showCover={false}
                    {...({ style: {}, usePortrait: true } as any)}
                    autoSize={false}
                    mobileScrollSupport={true}
                    maxShadowOpacity={0.2}
                    usePortrait={true}
                >
                    {
                        // 일기 1건당 이미지 페이지 + 내용 페이지 생성
                        diary.flatMap((e, i) => [

                            <div
                                key={`img-${i}`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "#f0cb28",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={`images/${e.image}`}
                                    alt={e.title}
                                    style={{
                                        width: "100%",
                                        height: "95%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>,

                            <div
                                key={`txt-${i}`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "#f0cb28",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "20px",
                                    fontSize: "18px",
                                }}
                            >
                                <p>{e.date}</p>
                                <p>{e.title}</p>
                                <p>{e.content}</p>
                            </div>
                        ])
                    }
                </HTMLFlipBook>
            </div>
        </div>
    );
};

export default DiaryFetch;