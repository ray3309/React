import React from "react";
import style from "./singupRslt.module.css";
import { useLocation } from "react-router-dom";
import { SignupInfo } from "./Signup";

const SignupRslt: React.FC = () => {
    const loc = useLocation();

    // navigate로 전달받은 현재 가입 정보
    const signInfo = loc.state as SignupInfo | null;

    console.log("전달받은 값:", signInfo);

    // localStorage에 저장된 전체 회원가입 목록 가져오기
    const signupList: SignupInfo[] = JSON.parse(
        localStorage.getItem("signupList") || "[]"
    );

    // 저장된 데이터가 없으면 출력
    if (signupList.length === 0) {
        return <div>No Data</div>;
    }

    return (
        <div className={style.rsltContainer}>
            <h2>회원가입 결과</h2>

            <table className={style.table}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>아이디</th>
                        <th>이메일</th>
                        <th>비밀번호</th>
                        <th>성별</th>
                        <th>생년월일</th>
                        <th>국가</th>
                        <th>취미</th>
                    </tr>
                </thead>

                <tbody>
                    {signupList.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.userId}</td>
                            <td>{item.userEmail}</td>
                            <td>{item.userPw}</td>
                            <td>{item.gender}</td>
                            <td>{item.birth}</td>
                            <td>{item.country}</td>
                            <td>{item.hobby.join(", ")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SignupRslt;