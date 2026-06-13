import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import LayOut from './Layout/LayOut';

import Ex01_FilterTest from './content/member/Ex01_FilterTest';
import LocalStorage from './content/board/LocalStorage';
import LocalStorage2 from './content/board/LocalStorage2';
import AppRoutes from './Router/AppRoutes';


function App() {
  return (
    
    <Router>
       <LayOut>
          <AppRoutes />
      </LayOut>
    </Router>

    // <div>
    //   <Ex01_FilterTest/>
    //   <LocalStorage />
    //   <LocalStorage2 />
    // </div>
    
    // <Router>
    //   <LayOut>
    //     <Routes>
    //       <Route path='/' element={<Home />} />
    //       <Route path='/Signup' element={<Signup />} />
    //       <Route path='/Login' element={<Login />} />
    //       <Route path='/Board' element={<BoardList />} />
    //       <Route path='/gallery' element={<GalleryList />} />
    //       <Route path='/chart' element={<Chart />} />
    //       <Route path='/community' element={<Community />} />
    //       <Route path='/diary' element={<Diary />} />
    //       <Route path='/signupRslt' element={<SignupRslt/>} />
    //     </Routes>
    //   </LayOut>
    // </Router>
  );
}

export default App;
