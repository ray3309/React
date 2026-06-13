import React, { useState } from "react";
import style from "./board.module.css";
import { Link, useNavigate } from "react-router-dom";

//입력 저장 : localStorage

const BoardForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [writer, setwriter] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const boardSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newBoard = {
            id: Date.now(),
            title,
            writer,
            content
        }
        const boardList = localStorage.getItem('boardList');
        const list = boardList ? JSON.parse(boardList) : [];
        list.push(newBoard);
        localStorage.setItem('boardList', JSON.stringify(list));

        navigate("/board");
    }
    return (
        <div className={style.comtainer}>
            <h2>글쓰기</h2>
            <form onSubmit={boardSubmit}>
                <table className={style.boardTable}>
                    <tr>
                        <th>제목</th>
                        <td><input type="text" name='title' id='title'
                            className={style.input}
                            onChange={e => { setTitle(e.target.value) }} />
                        </td>
                    </tr>
                    <th>작성자</th>
                    <td><input type='text' name='writer' id='writer'
                        className={style.input}
                        onChange={e => { setwriter(e.target.value) }}
                    /></td>
                    <tr>
                        <th>내용</th>
                        <td><textarea name='content' id='content'
                            className={style.input}
                            onChange={e => { setContent(e.target.value) }}
                        /></td>
                    </tr>
                    <tfoot>
                        <tr>
                            <th colSpan={2}>
                                <button type='submit' className={style.button}>등록하기</button>
                                <Link to="/board" className={style.button}
                                    style={{ marginLeft: "10px" }}
                                >취소</Link>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </div>
    )
}

export default BoardForm;
