interface ChildCProps{
    //propA는 필수 속성, 필수속성이 아니면 ?를 주도록
    propA:string;
    propB:string;
    propC:string;
}

// const ChildTs:React.FC<ChildCProps> = (props) =>{
    
//     //인터페이스에 정의된 속성만 허용!!!
//     const {propA,propB,propC} = props;

//     return (
//         <div>
//             {propA && <p>{propA}</p>}
//             {propB && <p>{propB}</p>}
//             {propC && <p>{propC}</p>}
//         </div>
//     )
// }

const ChildTs = ({propA,propB,propC} : ChildCProps) => {
    return (
        <div>
            {propA && <p>{propA}</p>}
            {propB && <p>{propB}</p>}
            {propC && <p>{propC}</p>}
        </div>
    )
}

export default ChildTs;

