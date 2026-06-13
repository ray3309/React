import React, { useState } from "react";

//http://192.168.0.3:8080/Web_0612_Ajax/Msg
// {"msg":"Hello", "name":"희상"}
// fetch Func Use Async Data

const UseEffectFetch = () => {
  
    const [msg, setMsg] = useState<string>('');
    const [name, setName] = useState<string>('');
    const url = 'http://192.168.0.3:8080/Web_0612_Ajax/Msg';

    const fetchData = () => {
        //alert("Click!");
        
        fetch(url).
        then(reponse => reponse.json()).
        then(data => {
            console.log(data);
            console.log(`Name : ${data.name}, Msg : ${data.msg}`);
            setMsg(data.msg);
            setName(data.name);
        }).
        catch(error => console.log(`error: ${error}`));
    }

    return (
        <div>
            <h2>Fetch ~ Then</h2>
            <button onClick={fetchData}>Fetch Msg</button>
            {/* useState의 값을 연결 */}
            <div>{msg ? msg : 'no msg'}</div>
            <div>{name ? name : 'no name'}</div>
        </div>
    )
}

export default UseEffectFetch;
