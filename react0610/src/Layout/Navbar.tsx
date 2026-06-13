import React from "react";
import { Link, NavLink } from "react-router-dom";

// 외부 스타일을 typescript 모듈로 불러오기
import style from './Navbar.module.css'

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
        // <nav style={{ marginTop: '10px'}}>
        //     <Link to="/" style={{ marginRight: '10px '}}> Home </Link>

        //     <Link to="/Signup" style={{ marginRight: '10px '}}> 회원가입 </Link>
        //     <Link to="/Login" style={{ marginRight: '10px '}}> 로그인 </Link>

        //     <Link to="/Board" style={{ marginRight: '10px '}}> 게시판 </Link>
        //     <Link to="/Gallery" style={{ marginRight: '10px '}}> 갤러리 </Link>
        //     <Link to="/Chart" style={{ marginRight: '10px '}}> 차트 </Link>
        //     <Link to="/Community" style={{ marginRight: '10px '}}> 커뮤니티 </Link>
        //     <Link to="/Diary"> 다이어리 </Link>
        // </nav>       

        <nav className={style.Navbar}>
            <NavLink to="/" className={commLinkClass}> Home </NavLink>

            <NavLink to="/Signup" className={commLinkClass}> 회원가입 </NavLink>
            <NavLink to="/Login" className={commLinkClass}> 로그인 </NavLink>

            <NavLink to="/Board" className={commLinkClass}> 게시판 </NavLink>
            <NavLink to="/Gallery" className={commLinkClass}> 갤러리 </NavLink>
            <NavLink to="/Chart" className={commLinkClass}> 차트 </NavLink>
            <NavLink to="/Community" className={commLinkClass}> 커뮤니티 </NavLink>
            <NavLink to="/Diary" className={commLinkClass}> 다이어리 </NavLink>
        </nav>
    )
}
export default Navbar;
