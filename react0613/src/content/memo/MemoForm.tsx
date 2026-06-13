import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./memo.module.css"
import axios from "axios";

// json방식 : if로 정의 한 useState값 Send

interface memoVO{
    num?: number;
    writer: string;
    content: string;
    merip?: string;
    mdate?: string;
}

const MemoForm: React.FC = () => {

    const [formData, setFormData] = useState<memoVO>({
        writer: '',
        content: '',
    })
    

    const navi = useNavigate();

    //입력시 마다 useState에 {} 형식으로 데이터 저장
    const formChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const {name, value} = e.target;

        //Recv Data useState Save
        setFormData({...formData, [name]:value});
    }

    const formSubmit = async (e:React.SubmitEvent) => {
        e.preventDefault();
        //alert(JSON.stringify(formData));
        const url = 'http://192.168.0.3:8080/Web_0613_AJAX/memo/add';
        //http://192.168.0.3:8080/Web_0613_AJAX/memo/List
        try{
            const data = await axios.post(url, formData, {
                headers: { 'Content-Type': 'application/json' }
            });

            // data.data
            alert("Memo Registry");
            navi('/community/memolist');
        } catch(error) {
            console.log("Registry Fail", error);
        }
    }

    return (
        <div className={style.container}>
            <h2 className={style.title}>Memo Note(Axios Example)</h2>
            <form className={style.form} onSubmit={formSubmit}>
                <table className={style.boardTable}>
                    <tbody >
                        <tr>
                            <th>Writer</th>
                            <td>
                                <input type="text" name="writer" id="writer" onChange={formChange}
                                className={style.input} style={{width: '90%', padding: '8px'}} required
                                />                                
                            </td>
                        </tr>
                        <tr>
                            <th>contentent</th>
                            <td>
                                <textarea name="content" id="content"  onChange={formChange}
                                    style={{width: '90%', height: '150px', padding: '8px'}}/>
                             </td>
                        </tr>
                    </tbody>
                    <tfoot>

                        <tr>
                            <th colSpan={2}>
                                <button type="submit"  
                                 className={style.button}>Reg</button>
                            </th>

                        </tr>
                    </tfoot>
                </table>
            </form>
        </div>
    )
}

export default MemoForm
