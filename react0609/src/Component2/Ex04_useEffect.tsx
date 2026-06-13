import React, { useEffect, useState } from "react";
import Ex01_Child from "./Ex01_Child";

const Ex04_useEffect: React.FC = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect value : ${count}`);
        document.title = `당신이 클릭한 값: ${String(count)}`;
    }, [count]);
    return (
        <div>
            <h1>간단하게 useState구조</h1>
            <button onClick={e => setCount(count + 1)}>증가 시키기</button>
            <Ex01_Child count={count} />
        </div>
    )
}

export default Ex04_useEffect;
