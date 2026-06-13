import React, { useState } from "react";

const Child = ({ state }: any) => {
    console.log("랜더링!");
    return <button>{state}</button>
}

const Ex02_FlowReactState: React.FC = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const incrementBtn = () => {
        setNumber1((prev) => prev + 2);
        setNumber2((prev) => prev + 3);
    }
    return (
        <div>
            <h2>하위 컴포넌트와 useState 관계</h2>
            {/* 1. 상위 useState에서 값 전달 가능 
                2. 하위 컴포넌트로 한번에 전달 가능
            */}
            <Child state={number1} />
            <Child state={number2} />
            <button onClick={incrementBtn}>Change</button>
        </div>
    )
}

export default Ex02_FlowReactState;
