import React, { useState } from "react";
import Ex01_Child from "./Ex01_Child";

const Ex01_useState: React.FC = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>simple useState Struct Test</h1>
            <button onClick={ e => setCount(count + 1)}> Inc </button>
            {/* <p>Count : {count}</p> */}
            <Ex01_Child count = {count}/>
        </div>
    )
}

export default Ex01_useState;
