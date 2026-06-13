import React, { useState } from "react";

const LocalStorage: React.FC = () => {
    const [msg, setMsg] = useState('');
    const [storedMsg, setStoredMsg] = useState<String|null>('');

    const saveLocalStoreage = () => {
        localStorage.setItem("msg", msg);
        setStoredMsg(msg);
    }

    const saveSessionStorage = () => {
        sessionStorage.setItem("msg", msg);
        setStoredMsg(msg);
    }

    const deleteLocalStoreage = () => {
        localStorage.removeItem("msg");
        setStoredMsg(null);
    }

    const deleteSessionStoreage = () => {
        sessionStorage.removeItem("msg");
        setStoredMsg(null);
    }

    return (
        <div>
            <input type="text" name="msg" id="msg" onChange={e=>setMsg(e.target.value)}/>
            <p></p>
            <button onClick={saveLocalStoreage}>Save to LocalStorage</button>
            <button onClick={deleteLocalStoreage}>Delete From LoaclStorage</button>
            <p></p>
            <button onClick={saveSessionStorage}>Save to SessionStorage</button>
            <button onClick={deleteSessionStoreage}>Delete From SessionStorage</button>
            <p></p>
        </div>
    )
}

export default LocalStorage;
