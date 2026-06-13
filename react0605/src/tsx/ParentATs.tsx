import React from 'react'
import ChildTs from './ChildTs'

const ParentATs = () => {
    const dataA = "부모A의 데이터 A";
    const dataB = "부모A의 데이터 B";

    return (
        <>
        <h1>ParentATs</h1>
        <ChildTs propA={dataA} propB={dataB} propC='임시' />
        </>
    )
}

export default ParentATs