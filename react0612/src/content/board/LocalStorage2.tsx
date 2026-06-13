import React, { useEffect, useState } from "react";

const LocalStorage: React.FC = () => {
    const [storedMsg, setStoredMsg] = useState<String|null>('');

    //localStorage에서 msg Read & useState Save
    useEffect(() => {  
        setStoredMsg(localStorage.getItem("msg"));
        setStoredMsg(sessionStorage.getItem("msg"));
    }, []);

    return (
        <div>            
            <p style={{ backgroundColor: "orange", color: "white"}}>{storedMsg}</p>
        </div>
    )
}

export default LocalStorage;
