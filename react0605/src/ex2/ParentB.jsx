import React from 'react'
import ChildC from './ChildC'

const ParentB = () => {
    const dataA = "부모B의 데이터 A";
    const dataC = "부모B의 데이터 C";

    return (
        <>
        <h1>ParentB</h1>
        <ChildC PropC={dataC} />
        </>
    )
}
export default ParentB