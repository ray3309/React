import { useCallback, useState } from "react";
import Ex01_ChildButton from "./Ex01_ChildButton";

const Ex02_UseCallBack: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>('');

    // useCallback => Func Memozation
    // myClick Func wrapped useCallback, Parent rerendering, same func ref!!
    // useCallback(()=>{}, [])
    
    // Function Cache => child prop no change
    const Click = useCallback(()=>{
        setCount((p) => p+2);
    }, [count])

    return (
        <div>
            <h1>Count : {count}</h1>
            <Ex01_ChildButton onClick={Click}/>
            {/* input 데이터 입력시 text 변경 -> 부모 리랜더링 -> 자식도 리랜더링 -> 콘솔출력 안됨 */}
            <input type="text" value={text} onChange={e=>setText(e.target.value)}
                    placeholder="text 입력"
            />
        </div>
    )
}

export default Ex02_UseCallBack