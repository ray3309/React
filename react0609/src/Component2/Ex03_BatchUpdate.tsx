import React, { useEffect, useState } from "react";

// useEffect : 랜더링 이후 해당 값을 사용하려 할때 사용

const  Ex03_BatchUpdate: React.FC = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const stateClick = () => {
    console.log('Before setState1:', state1);
    setState1(state1 + 1);
    console.log('After setState1:', state1);

    console.log('Before setState2:', state2);
    setState2(state2 + 1);
    console.log('After setState2:', state2);
    console.log("*************************");

  }
  console.log('Rendering...!!!!');

  useEffect(()=>{
    console.log('State1 update to:', state1);

  }, [state1]);

  useEffect(()=>{
    console.log('State2 update to:', state2);

  }, [state2])

  return(
    <div>
        <h1>useEffect & BatchUpdate</h1>
        <p>State 1 : {state1}</p>
        <p>State 2 : {state2}</p>
        <button onClick={stateClick}>상태값 업데이트</button>
    </div>
  )
}

export default Ex03_BatchUpdate;
