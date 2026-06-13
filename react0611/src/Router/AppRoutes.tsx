import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../content/Home";
import Signup from "../content/member/Signup";
import Login from "../content/member/Login";
import BoardList from "../content/board/boardList";
import GalleryList from "../content/gallery/GalleryList";
import Chart from "../content/chart/Chart";
import Community from "../content/community/Community";
import Diary from "../content/diary/Diary";
import SignupRslt from "../content/member/SignupRslt";
import BoardForm from "../content/board/boardForm";
import BoardDetail from "../content/board/BoardDetail";

// import LayOut from './Layout/LayOut';

const AppRoutes: React.FC = () => {
    const routeList = [
        {path:'/',          element: <Home />},
        {path:'/Signup',    element: <Signup />},
        {path:'/Login',     element: <Login />},
        {path:'/board',     element: <BoardList />},
        {path:'/board/:id', element: <BoardDetail />},
        {path:'/board/write', element: <BoardForm/>},
        {path:'/gallery',   element: <GalleryList />},
        {path:'/chart',     element: <Chart />},
        {path:'/community', element: <Community />},
        {path:'/diary',     element: <Diary />},
        {path:'/signupRslt', element: <SignupRslt/>},        
    ]
    return (
        <Routes>
            {
                routeList.map((route, idx) => (
                    <Route key={idx}{...route}/>
                ))                
            }
        </Routes>
    )
}

export default AppRoutes
