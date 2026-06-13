import React from 'react'

const ChildC = (props) => {
    
    const {PropA, PropB, PropC} = props;

    return (
        <div>
            <p>Prop A : {PropA}</p>
            {PropB && <p>Prop B : {PropB}</p>}
            {PropC && <p>Prop C : {PropC}</p>}
        </div>
    )
}

export default ChildC
