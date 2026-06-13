import React, { useState } from "react";

const Ex3_useStateBasicType: React.FC = () => {
    let count: number = 0;
    const [myCount, setMyCount] = useState<number>(0);
    const onClick1 = () => {
        count++;
        console.log(`일반 변수 count => ${count}`);
    };
    const onClick2 = () => {
        setMyCount(myCount + 1);
    };
    return (
        <div>
            <button onClick={onClick1}>Click1 (일반 변수)</button>
            <button onClick={onClick2}>Click2 (useState)</button>
            <ul>
                <li>count : {count}</li>
                <li>useState : <input type='text'
                    style={{ backgroundColor: (myCount % 2 === 0) ? 'pink' : 'orange' }}
                    value={myCount} readOnly /></li>
            </ul>
        </div>
    )
}
export default Ex3_useStateBasicType