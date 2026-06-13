import React, { useMemo, useState } from "react";
// Memoization pattern use useMemo is data cache
// useMemo는 불필요하게 재연산 되는 것을 방지



const Ex01_useMemo: React.FC = () => {
    //useState Decalre
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>('');

    const textChnage = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(`text 입력값 : ${e.target.value}`);
        setText(e.target.value);
    }   

    const memoTotal = (n:number) => {
        console.log(`memoTotal() 계산 실행됨!`);
        let total = 0;
        for(let i = 0; i<1000000; i++){
            total += i;
        }
        return total + n;
    }

    // useMemo를 사용하여 계산 결과를 저장
    // count가 변경될 때마다 useMemo의 함수를 다시 실행
    // useMemo(()={}, [감지할상태])
    // memoResult는 count가 변경될 때만 memoToal(count)를 다시 계산
    const memoResult = useMemo(()=>{
        console.log("count가 변경 될 때 실행");
        return memoTotal(count);
    }, [count]);

    return(
     <div>
        <h2>useMemoBasic</h2>
        {/* <input type="text" value={text} onChange={textChnage}/> */}
        {/* <input type="text" value={text} onChange={() => setText}/> */}

        <h2>MemoTotal과 관련이 없는 text</h2>
        <input type="text" value={text} onChange={ e => {
            setText(e.target.value);
            console.log(`text 입력값 : ${e.target.value}`);
        }}/>
       
        <p>입력값 : {text}</p>
        <button onClick={()=>setCount(e => e+1)}>count 증가</button>
        <p>현재 count: {count}</p>
       
        <hr/>
        <h2>memoResult: useMemo Cahce Value</h2>
        <p style={{backgroundColor:"fff7fa"}}>
            <strong>useMemo Result : {memoResult}</strong>
        </p>
     </div>
  )
}

export default Ex01_useMemo;
