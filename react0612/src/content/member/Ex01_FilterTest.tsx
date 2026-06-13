import React from "react";

const Ex01_FilterTest: React.FC = () => {
    const name="hobby";
    const value="음악"; //체크가 안된 값
    const checked=true;
    const selectHobbies = ['독서', '운동', '음악', '여행'];

    const result = {
        [name]:checked ? value : selectHobbies.filter(h => h !== value)
    }

    console.log(result);

    return (
        <div>
            <h1>Filter Test</h1>
            <p>result</p>
        </div>
    )
}

export default Ex01_FilterTest;
