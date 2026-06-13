import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import style from "./board.module.css"

const  BoardDetail: React.FC = () => {

    // <Route path='/board/:id' ==> {id}
     const navigate = useNavigate();
    const { id } = useParams<{id: string}>();

    const oriBoardList = JSON.parse(localStorage.getItem("boardList") || "[]");
    const details = oriBoardList.filter((item: any) => item.id === Number(id));

    console.log("************************");
    console.log(`id=>${id}`);
    console.log(`Detail => ${typeof(id)} || ${details}`);
    console.log(details);
    console.log("************************");

    const delBoard = () => {
        if(window.confirm("Sure?")){
            const oriBoardList = JSON.parse(localStorage.getItem("boardList") || '[]');
            const newBoardList = oriBoardList.filter((item:any) => item.id !== Number(id));            
            localStorage.setItem('boardList', JSON.stringify(newBoardList));
            alert('삭제 완료!!');
            navigate("/board");
        }
    }

    return (
        <div>
            <table className={style.boardTable}>
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td>{details[0]?.title}</td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>{details[0]?.writer}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>{details[0]?.content}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={2}>
                            <button className={style.button} onClick={delBoard}>삭제</button>
                            <Link to="/board" className={style.button}
                                    style={{ marginLeft: '10px'}}>리스트</Link>
                        </th>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}

export default BoardDetail;
