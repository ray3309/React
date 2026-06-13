import React from 'react'
import ChildTs from './ChildTs'

const ParentBTs = () => {
    const dataA = "부모B의 데이터 A";
    const dataC = "부모B의 데이터 C";

    return (
        <> 
        <h1>ParentBTs</h1>
        <ChildTs propA={dataA} propB="" propC={dataC}/>
        </>
    )
}

export default ParentBTs