import React from "react";

interface InfoProps{
    title:string;
    name?:string;
    age?:number;
    tel?:string;
    img?:string;
    backgroundColor?:string;
    children?:React.ReactNode;
}

const Info: React.FC<InfoProps> = ({title, name, age, tel, img, backgroundColor, children}) => {
    return (
        <div style={{
            margin: 8, padding: 8, borderRadius: 8,
            boxShadow: "0px 0px 4px grey",
            backgroundColor: backgroundColor || "magenta"
        }}>
            {title && <h1>{title}</h1>}
            {name && <h2>안녕하세요 <span style={{color:'skyblue'}}>{name}님</span></h2>}
            {age !== undefined && ((age >= 19) ? <h2> 나이는 <span style={{color:'skyblue'}}>{age}</span> 이며, <span style={{color:'skyblue'}}>성년 입니다.</span></h2> :
                                                 <h2> 나이는 <span style={{color:'skyblue'}}>{age}</span> 이며, <span style={{color:'skyblue'}}>미성년 입니다.</span></h2>)}
            {tel !== undefined && (<h2>연락처는 <span style={{color:'skyblue'}}>{tel}</span></h2>)}            
            {img !== undefined && (<img src='logo192.png' style={{width:'100px'}}></img>)}
            {children}
        </div>
    )
}

export default Info