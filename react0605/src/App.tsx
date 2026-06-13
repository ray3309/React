import React from 'react';
import ParentA from './ex2/ParentA';
import ParentB from './ex2/ParentB';

import ParentATs from './tsx/ParentATs';
import ParentBTs from './tsx/ParentBTs';

function App() {
  return (
    <>
      {/* 자식 컴포넌트에서 매개변수 prop 값을 받도록 되어 있어 따짐 */}
      {/*<UserComponent /> */}
      {/* <SuperUserComponent name="test" age={40}/> */}

      {/* <ParentA/>
      <hr/>
      <ParentB/> */}

      <ParentATs />
      <hr/>
      <ParentBTs />
      
    </>
  );
}

export default App;
