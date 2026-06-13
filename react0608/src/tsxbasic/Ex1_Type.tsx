import React from "react"
// 자바스크립트 : let 변수명 = 10;
// 타입스크립트 : let 변수명: 자료형 = 값;
// 자료형 
// * 기본자료형 : 
// number 숫자(정수 및 실수)
// string 문자열
// boolean , any => all type 즉 타입을 검사하지 않는다.
// * 복합자료형 : array, tuple, enum , obj ..
//FC는 함수 컴포넌트의 약어
// --template=typescript => jsx => tsx
const Ex1_Type: React.FC = () => {
    //typescipt 나이 변수로 선언
    let age: number = 30;
    let score: number = 99.9; //숫자 실수형
    let name: string = "테스형";
    let isStudent: boolean = false;
    // any 모든 타입을 허용한다. 어떤 값이든 다 받아들인다.
    let variable: any = 100; //숫자형 정수형 초기화 , 자바스크립트 타입도 정수
    if (score > 90) {
        variable = "멋지십니다."; // any만이 모든 타입을 저장할 수 있다.
    } else {
        variable = 50;
    }
    return (
        <div>
            <h1 style={{ backgroundColor: 'orange', color: 'white' }}>
                기본 자료형 출력
            </h1>
            <p>나이 : {age} </p>
            <p>점수 : {score} </p>
            <p>이름 : {name} </p>
            {/* 예/아니오 */}
            <p>학생여부 : {isStudent ? '예':'아니오'}</p>
            <p>any의 값 : {variable} </p>
        </div>
    )
}
export default Ex1_Type