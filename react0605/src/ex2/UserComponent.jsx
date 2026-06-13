import React from 'react'

//Parent Component From Argument name, age Recv

const UserComponent = (props) => {
    const {name, age} = props;
    return(
        <div>
            <h1>컴포넌트와 props</h1>
            <p> 이름 : {name} / 나이 : {age}</p>
        </div>
    )
}

export default UserComponent;