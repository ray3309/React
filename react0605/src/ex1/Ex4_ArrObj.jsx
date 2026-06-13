import { displayPartsToString } from "typescript";
import "../css/arr.css"

const Ex4_ArrObj = () => {    

    const boardV = [{num:1, title:"안녕하세요1",writer:"테스형",img:"images/prod1.jpg"},
                    {num:2, title:"안녕하세요2",writer:"희상형",img:"images/prod2.jpg"},
                    {num:3, title:"안녕하세요3",writer:"레이형",img:"images/prod3.jpg"}]

    return (
        <div id='const'>
            <h1>게시물 리스트</h1>
            {/**/}

            {boardV.map((board, index) =>(
                <div key={index} className="mdiv">
                    <p>번호 : {board.num}</p>
                    <p>제목 : {board.title}</p>
                    <p>작성자 : {board.writer}</p>
                    <p>이미지 : <img src={board.img} alt={board.title}/></p>
                </div>
            ))}
        </div>
    )
}

export default Ex4_ArrObj;