// JSX에서 컴포넌트 이름은 대문자로 시작
// 소문자로 사용시 HTML태그로 인식 될 수 있음
// jsx -> app.tsx에서 Load & Use -> index.tsx root.render() -> <div id="root"> </div> tag 내부에서 표현
// Function Component ==> Current 
// Class Component ==> past

// () == nonamespace function
const TestComponent = () =>{
    // 자바스크립트 익명함수 영역
    // local area

    const Data = {name: "Ray", age: 20};
    console.log(Data.name, Data.age);

    return(
        <div>
            <ul>
                <li>Name : {Data.name}</li>
                <li>Age : {Data.age}</li>
            </ul>
        </div>
    );
}

export default TestComponent