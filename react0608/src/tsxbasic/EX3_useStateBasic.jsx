//EX3_useStateBasic.jsx
//"상태가 바뀌면 컴포넌트가 다시 렌더링되어 UI를 갱신한다
//변경을 감지하는 함수 useState 이다.
//즉  useState가 아니면 React가 변경을 감지 못한다.
// 화면에 영향을 줄 값은 무조건 useState로 관리해야 함" *****

// 시나리오 : 10까지 누적한 데이터는 연산 후 랜더링에 반영이 되지만
// 상태변화 : onchange, onclick 등 일때는 랜더링에 반영이 안된다.
const EX3_useStateBasic = () => {
    //일반 변수 
    let count = 0;
    //onClick1함수표현식을 정의
    // const onClick1 = function(){
    //     alert("Test");
    // }
    //함수가 호출 될 때 마다 count 1씩 증가 
    const onClick1 = () => {
        //alert("Test");
        count++;
        console.log(`일반 변수 count => ${count}`);
    }
    return (
        <div>
            <h1>Event와 useState</h1>
            {/* 버튼 감지자가 클릭시 onClick1이란 자바스크립트 함수표현식으로 정의된 함수를 호출해라! */}
            <button onClick={onClick1}>Click1</button>
            <ul>
                <li>일반 변수 count 값 : {count}</li>
            </ul>
        </div>
    )
}
export default EX3_useStateBasic;