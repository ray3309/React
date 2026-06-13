import React from 'react';
import Profile from './component/Profile';

// JSX(Javascript XML)
// XML형식으로 작성하는 자바스크립트 문법
// Must have a Root Element
function App() {  
  //<> : React Flagment
  // h1, p만 랜더링 하고 싶을때만 사용하는 방법
  // 상위 엘리멘트를 추상화 시킬때 주로 사용
  // 변수 사용시 ${name} : JSX 안에서 중괄호 사용하며 JS 표현식을 삽입
  // jsx 에서는 class 대신 className을 사용
  
  return (    
    <>
    {/*<TestComponent />*/}
    {/* <Profile/> */}
    </> 
  );
}
export default App;
