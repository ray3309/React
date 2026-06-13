import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../content/Home";
import Signup from "../content/member/Signup";
import Login from "../content/member/Login";
import BoardList from "../content/board/BoardList";
import GalleryList from "../content/gallery/GalleryList";
import Chart from "../content/chart/Chart";
import Community from "../content/community/Community";
import Diary from "../content/diary/Diary";
import SignupRslt from "../content/member/SignupRslt";
import BoardForm from "../content/board/boardForm";
import BoardDetail from "../content/board/BoardDetail";
import UseEffectFetch from "../content/demo/UseEffectFetch";
import UseEffectFetch2 from "../content/demo/UseEffectFetch2";
import DiaryFetch from "../content/diary/DiaryFetch";
import GetData from "../axios/GetData";
import PostData from "../axios/PostData";
import MemoForm from "../content/memo/MemoForm";
import MemoList from "../content/memo/MemoList";

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
        {path:'/Community', element: <Community />},
        {path:'/diary',     element: <Diary />},
        {path:'/signupRslt', element: <SignupRslt/>},
        {path:'/Fetchthen1', element: <UseEffectFetch/>},
        {path:'/userdemo', element: <UseEffectFetch2/>},
        {path: '/DiaryFetch', element: <DiaryFetch/>},

        {path: '/getaxios', element: <GetData/>},
        {path: '/postaxios', element: <PostData/>},

        {path: '/community/memolist', element: <MemoList/>},
        {path: '/community/memoForm', element: <MemoForm/>}
        
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
