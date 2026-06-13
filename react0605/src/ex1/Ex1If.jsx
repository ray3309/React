import React from 'react'

const Ex1If = () => {

    const isLogin = true;
    return (
        <div>
            <h1>Ex1If Component Test</h1>
            <h2>삼항연산자</h2>

            <hr/>
            isLogin = {String(isLogin)}<br/>  {/* boolean을 출력하고 싶을때는 String으로 변환후 출력 */}
            {isLogin ? <p>로그인 성공</p> : <p>로그인 실패</p>}
        </div>
    )

    // // 굳이 if else로 사용을 해야하는 병신짓을 한다면!!!
    // let result;
    // if(true === isLogin)
    // {
    //     result = <p>isLogin = 로그인성공</p>;
    // }
    // else
    // {
    //     result = <p>isLogin = 로그인실패</p>;
    // }

    // return (
    //     <div>
    //         {result}
    //     </div>
    // )
}

export default Ex1If