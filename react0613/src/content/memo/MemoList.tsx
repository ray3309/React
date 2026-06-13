import React, { useEffect, useState } from "react";
import style from "./memo.module.css"
import { Link } from "react-router-dom";
import axios from "axios";
interface memoVO {
    num?: number;
    writer: string;
    conts?: string;
    merip?: string;
    mdate?: string;
}
const MemoList = () => {
    console.log(1);
    const [myMemoList, setMyMemoList] = useState<memoVO[]>([]);
    const [loading, setLoading] = useState(true);
    const url = "http://192.168.0.3:8080/Web_0613_AJAX/memo/list";

    useEffect(() => {
        // setLoading(true);
        // axios.post(url, myMemoList, {
        //     headers: { 'Content-Type': 'application/json' }
        // });
        // console.log(myMemoList);
        // // setMyMemoList({...myMemoList, []:value});

        // alert("Memo Registry");
        // // navi('/community/memolist');
        // //console.log("Registry Fail", error);
        // setLoading(false);
        const fetchDiaryData = async () => {
            setLoading(true);
            await  axios.post(url, myMemoList, {
                headers: {'Content-Type': 'application/json'}
            });

            // 단일 객체와 배열 모두 처리
            setMyMemoList(Array.isArray(myMemoList) ? myMemoList : [myMemoList]);
            setLoading(false);    
        }
            
        fetchDiaryData();
    }, []);

    return (
        <div className={style.container}>
            <h2>Memo List</h2>
            <table className={style.boardTable}>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Writer</th>
                        <th>Content</th>
                        <th>IP</th>
                        <th>WrtieDate</th>
                    </tr>
                </thead>
                <tbody></tbody>
                <tfoot>
                    <tr>
                        <th colSpan={6} style={{ textAlign: "center" }}>
                            <Link to="/community/memoForm" className={style.button}>
                                Write
                            </Link>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default MemoList;
