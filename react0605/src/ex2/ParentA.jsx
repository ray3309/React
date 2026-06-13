import React from 'react'
import ChildC from './ChildC'

const ParentA = () => {
    const dataA = "부모A의 데이터 A";
    const dataB = "부모A의 데이터 B";

    return (
        <>
        <h1>ParentA</h1>
        <ChildC PropA={dataA} PropB={dataB} />
        </>
    )
}

export default ParentA