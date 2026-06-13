import React from "react";
import { ButtonProps } from "./Ex01_ButtonProps";

const Ex01_ChildButton: React.FC<ButtonProps> = ({onClick}) => {
    console.log("ChildButton 랜더링이 되었습니다.");
    
    return(
        <button onClick={onClick}>자식버튼</button>
    )
}

export default Ex01_ChildButton;
