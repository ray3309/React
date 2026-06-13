//리액트 훅(React Hooks)은 리액트 v16.8부터 도입 이전에는 클래스형 컴포넌트 : 클래스로 정의해서 사용
//=> 함수형 컴포넌트에서도 상태(State) 관리와 리액트의 생명주기(Lifecycle) 기능을 사용할 수 있게 해주는 특별한 함수들
//클래스형 컴포넌트의 단점인 복잡한 상태관리나 생명주기를 쉽게 제공한다. *****
//코드의 재사용성: 컴포넌트 간에 상태 관리 로직을 쉽게 공유할 수 있다.
//단순함과 가독성: 클래스형 컴포넌트 특유의 복잡한 this 키워드나 장황한 코드를 줄여준다.
//관련 로직의 응집: 생명주기 메서드(componentDidMount 등)로 흩어져 있던 관련 코드를 하나의 훅 안에 모을 수 있다.
//useState는 React의 훅 중 하나로, 함수형 컴포넌트에서 상태를 관리할 수 있고,
import React, { useState } from "react";
//값을 저장하는 만능 변수정도로 생각
const Ex3_useStateHook: React.FC = () => {
    //const [상태이름, set상태이름] = useState([초기화할 값]);
    //현재 초기화는 6개 정도의 객체를 가진 배열을 초기값으로 설정한다. 
    // let names = [{id:1,text:'aa'},.....]  
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
        { id: 5, text: '구름' },
        { id: 6, text: '햇살' }
    ]);
    // arr.map((e,i)=>(jsx))
    const nameList = names.map(e => (
        <li key={e.id}>{e.text}</li>
    ))
    return (
        <div>
            <ul>{nameList}</ul>
        </div>
    )
}
export default Ex3_useStateHook
