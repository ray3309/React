import React from "react";

interface Props {
    count: number;
}

const Ex01_Child: React.FC<Props> = (prop) => {
      
    const {count} = prop;
    const bgColor = count % 2 === 1 ? 'skyblue' : 'magenta';
    return (
        <div>
            <h3 style={{backgroundColor:bgColor}}>
            자식 컴포넌트에서 받은 count: {count}
            </h3>
        </div>
    )
}

export default Ex01_Child;
