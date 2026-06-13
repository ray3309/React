import React, { useState } from "react";
// @ts-ignore: CSS module import (type declarations may be missing)
import style from "./Signup.module.css";
import { useNavigate } from "react-router-dom";

// 회원가입 정보 타입 정의
export interface SignupInfo {
    userId: string;
    userPw: string;
    userEmail: string;
    gender: string;
    birth: string;
    country: string;
    hobby: string[];
}

const Signup: React.FC = () => {
    const navigate = useNavigate();

    // 입력 폼 상태 관리
    const [info, setInfo] = useState<SignupInfo>({
        userId: "",
        userPw: "",
        userEmail: "",
        gender: "",
        birth: "",
        country: "",
        hobby: []
    });

    // input, select, radio, checkbox 값 변경 처리
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        // 체크박스 처리
        if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
            const checked = e.target.checked;

            setInfo(prev => {
                const prevHobby = prev.hobby;

                return {
                    ...prev,
                    hobby: checked
                        ? [...prevHobby, value] // 체크하면 추가
                        : prevHobby.filter(item => item !== value) // 체크 해제하면 제거
                };
            });

            return;
        }

        // 일반 input, radio, select 처리
        setInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 회원가입 submit 처리
    const submitFnc = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 기존 localStorage 데이터 가져오기
        const prevList: SignupInfo[] = JSON.parse(
            localStorage.getItem("signupList") || "[]"
        );

        // 기존 데이터 + 현재 입력 데이터 추가
        const newList: SignupInfo[] = [...prevList, info];

        // localStorage에 배열 형태로 저장
        localStorage.setItem("signupList", JSON.stringify(newList));

        // 결과 페이지로 현재 입력값 전달
        navigate("/signupRslt", { state: info });
    };

    return (
        <div className={style.singupContainer}>
            <h2>Signup</h2>

            <form className={style.form} onSubmit={submitFnc}>
                <label htmlFor="userId">아이디</label>
                <div className={style.inputRow}>
                    <input
                        type="text"
                        name="userId"
                        id="userId"
                        value={info.userId}
                        onChange={handleChange}
                    />
                    <button type="button" className={style.checkButton}>
                        중복확인
                    </button>
                </div>

                <label htmlFor="userEmail">이메일</label>
                <input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    value={info.userEmail}
                    onChange={handleChange}
                />

                <label htmlFor="userPw">비밀번호</label>
                <input
                    type="password"
                    name="userPw"
                    id="userPw"
                    value={info.userPw}
                    onChange={handleChange}
                />

                <label>성별</label>
                <div className={style.gender}>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="남자"
                            checked={info.gender === "남자"}
                            onChange={handleChange}
                        />
                        남자
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="여자"
                            checked={info.gender === "여자"}
                            onChange={handleChange}
                        />
                        여자
                    </label>
                </div>

                <label htmlFor="birth">생년월일</label>
                <input type="date" name="birth" id="birth" value={info.birth} onChange={handleChange}/>

                <label htmlFor="country">국가</label>
                <select
                    name="country"
                    id="country"
                    value={info.country}
                    onChange={handleChange}
                >
                    <option value="">국가 선택</option>
                    <option value="한국">한국</option>
                    <option value="미국">미국</option>
                    <option value="중국">중국</option>
                    <option value="영국">영국</option>
                    <option value="일본">일본</option>
                    <option value="대만">대만</option>
                </select>

                <label>취미</label>
                <div className={style.hobby}>
                    <label>
                        <input type="checkbox" value="독서"
                            checked={info.hobby.includes("독서")}
                            onChange={handleChange} />독서</label>

                    <label>
                        <input type="checkbox" value="등산" checked={info.hobby.includes("등산")}
                            onChange={handleChange} />등산</label>

                    <label>
                        <input type="checkbox" value="게임" checked={info.hobby.includes("게임")}
                            onChange={handleChange} />게임
                    </label>

                    <label>
                        <input type="checkbox" value="기타" checked={info.hobby.includes("기타")}
                            onChange={handleChange} />기타</label>
                </div>

                <button type="submit" className={style.submitButton}>
                    가입하기
                </button>
            </form>
        </div>
    );
};

export default Signup;