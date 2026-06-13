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
  );
}

export default App;
