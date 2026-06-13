import React from "react";
import { Link, NavLink } from "react-router-dom";

// 외부 스타일을 typescript 모듈로 불러오기
// @ts-ignore: CSS module import (type declarations may be missing)
import style from "./Navbar.module.css";
import DropdownNav from "./DropdownNav";

const Navbar: React.FC = () => {
  
    /*
        className={({ isActive }) => isActive ?   :}
    */
   // 네비게이션에 공통으로 활성 유무에 따라 스타일 변경 조건
   // isActive === true => className='link active' apply
         const commLinkClass = ({isActive} : {isActive:boolean}) => {
            return isActive ? `${style.link} ${style.active}` : style.link;
        }

    return (
        <nav className={style.Navbar}>
            <NavLink to="/" className={commLinkClass}> Home </NavLink>

            <NavLink to="/Signup" className={commLinkClass}> 회원가입 </NavLink>
            <NavLink to="/Login" className={commLinkClass}> 로그인 </NavLink>

            <NavLink to="/Board" className={commLinkClass}> 게시판 </NavLink>
            <NavLink to="/Gallery" className={commLinkClass}> 갤러리 </NavLink>
            <NavLink to="/Chart" className={commLinkClass}> 차트 </NavLink>
            
            {/* <NavLink to="/Community" className={commLinkClass}> 커뮤니티 </NavLink> */}
            <DropdownNav />

            <NavLink to="/Diary" className={commLinkClass}> 다이어리 </NavLink>
        </nav>
    )
}
export default Navbar;
