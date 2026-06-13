import React from "react";
import { Link } from "react-router-dom";
import style from "./board.module.css";
import { BoardItem } from "./boardData";


const boardList: React.FC = () => {
  
    const boardList: BoardItem[] = JSON.parse(localStorage.getItem("boardList") || "[]");
    
    // 저장된 데이터가 없으면 출력
    if (boardList.length === 0) {
        return <div>No Data</div>;
    }

    return (
        <div className={style.container}>
            <h2>boardList</h2>
            <table className={style.boardTable}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.reverse().map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>
                            <Link to={`/board/${item.id}`}
                                className={style.titleLink}>
                                    {item.title}</Link>
                        </td>
                        <td>{item.writer}</td>
                    </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan={3} style={{ textAlign: "center" }}>
                            <Link to="/board/write" className={style.button}>글쓰기</Link>
                        </td>
                    </tr>

                </tfoot>
            </table>
            {/*  */}
        </div>
    )
}

export default boardList;
