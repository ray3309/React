import React from "react";

interface CardProps{
    title:string;
    backgroundColor:string;
    children?:React.ReactNode;
}

const Card: React.FC<CardProps> = ({title, backgroundColor, children}) => {
    return (
        <div style={{
            margin: 8, padding: 8, borderRadius: 8,
            boxShadow: "0px 0px 4px grey",
            backgroundColor: backgroundColor || "white"
        }}>
            {title && <h1>{title}</h1>}
            {/* {children} 상위 컴포넌트에서 전달 해주는 element */}
            {children}
        </div>
    )
}

export default Card