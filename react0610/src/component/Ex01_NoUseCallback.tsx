import { useState } from "react";
import Ex01_ChildButton from "./Ex01_ChildButton";

const Ex01_NoUseCallback: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>('');

    //클릭시 호출되는 Normal Func : 부모/자식 관계 
    const myClick = () => {
        setCount(count + 2);
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <Ex01_ChildButton onClick={myClick}/>
            <input type="text" value={text} onChange={e=>setText(e.target.value)}
                    placeholder="text 입력"
            />
        </div>
    )
}

export default Ex01_NoUseCallback