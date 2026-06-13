import React from 'react';
// import Ex01_NoUseCallback from './component/Ex01_NoUseCallback';
// import Ex02_UseCallback from './component/Ex02_UseCallBack';
// import ProductCard from './Component2/ProductCard';
// import ProfileCard from './Component2/ProfileCard';
// import Home from './Component3/Home';
// import Page from './Component3/Page';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LayOut from './Layout/LayOut';
import Home from './content/Home';
import Diary from './content/diary/Diary';
import Community from './content/community/Community';
import Chart from './content/chart/Chart';
import GalleryList from './content/gallery/GalleryList';
import BoardList from './content/board/BoardList';
import Signup from './content/member/Signup';
import SignupRslt from './content/member/SignupRslt';
import Login from './content/member/Login';


function App() {
  return (
    // <div>
    //   {/* <Ex01_NouseCallBack /> */}
    //   {/* <EX02_USECALLBACK />  */}
    //   {/* <ProductCard /> */}
    //   {/* <ProfileCard /> */}

    //   {/* 가설 - 첫화면이 Home */}      
    //   <Home/>
    //   {/* <Page/> */}
    // </div>
    
    <Router>
      <LayOut>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Board' element={<BoardList />} />
          <Route path='/gallery' element={<GalleryList />} />
          <Route path='/chart' element={<Chart />} />
          <Route path='/community' element={<Community />} />
          <Route path='/diary' element={<Diary />} />
          <Route path='/signupRslt' element={<SignupRslt/>} />
        </Routes>
      </LayOut>
    </Router>
  );
}

export default App;
