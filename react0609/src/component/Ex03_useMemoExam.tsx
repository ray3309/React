import React, { useMemo, useState } from "react";

const Ex03_useMemoExam = () => {
    const [dan, setDan] = useState<number>(2);      // useState를 사용하여 setter를 구현 
    const [limit, setLimit] = useState<number>(3);  // useState를 사용하여 setter를 구현
    const [color, setColor] = useState<string>("#ff00ff");  // useState를 사용하여 setter를 구현

    const danList = useMemo(() => {     
        const half = Math.floor(limit / 2);   // limit 값 구하기

        let start = dan - half;   // 시작 구간
        let end = dan + half;     // 종료 구간

        // if (start < 2) {   // 시작 단 조건
        //     end += 2 - start;
        //     start = 2;
        // }

        // if (end > 9) {    // 종료 단 조건 
        //     start -= end - 9;
        //     end = 9;
        // }

        start = Math.max(2, start);  // 최대 최소 구하기

        const result: number[] = [];   // Number의 Array를 선언
        
        for (let i = start; i <= end; i++) {
            result.push(i);   // 해당 count를 저장
        }

        console.log(start);  // 시작 단 출력
        console.log(end);    // 종료 단 출력

        return result;
    }, [dan, limit]);   // 단과 limit의 useMemo를 선택

    console.log(color);  // 색상 출력

    return (
        <div
            style={{    // div의 전체적인 스타일 적용
                overflowY: "auto",
                border: "1px solid #ccc",
                maxHeight: "400px",
                padding: "10px",
            }}
        >
            <input               
                type="number"
                // min={2}
                // max={9}
                value={dan}  // 단의 입력값이 변경될 때마다 setDan을 호출
                onChange={(e) => setDan(Number(e.target.value))}
            />단

            <select
                value={limit}   // limit의 값이 선택될 때 setLimit을 호출
                onChange={(e) => setLimit(Number(e.target.value))}
                style={{
                    padding: "8px",
                    fontSize: "16px",
                    color: "black",
                    marginLeft: "10px",
                }}
            >
                <option value={1}>1</option>   
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
            </select>

            <input
                type="color"
                value={color}  // 색상의 값이 변경될 때마다 setColor를 호출
                onChange={(e) => setColor(e.target.value)}
                style={{ marginLeft: "10px" }}
            />

            <table
                style={{    // 테이블 넓이와 가운데 정렬 설정
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                <thead>
                    <tr>
                        {danList.map((num) => (  
                            <th
                                key={num}
                                style={{
                                    padding: "8px",
                                    border: "1px solid #ccc",
                                    backgroundColor: num === dan ? color : "white",                                    
                                    fontWeight: num === dan ? "bold" : "normal",                                    
                                }}
                            >{num}단</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                        <tr key={num}>
                            {danList.map((d) => (
                                <td
                                    key={`${d}-${num}`}
                                    style={{
                                        padding: "8px",
                                        border: "1px solid #ccc",
                                        backgroundColor: d === dan ? color : "white",                              
                                        fontWeight: d === dan ? "bold" : "normal",
                                    }}
                                >
                                    {d} x {num} = {d * num}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Ex03_useMemoExam;