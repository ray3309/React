import React from "react";
import Navbar from "./Navbar";

interface LayOutProps {
    children:React.ReactNode;
}

const LayOut : React.FC<LayOutProps> = ({children}) => {
  
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '200px'}}>

            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'skyblue',
                color: 'magenta',
                padding: '10px 20px',
                borderRadius: '8px'
            }}>
                <h1>ICT 신촌</h1>
                <div>
                    <a href="/login" style={{ marginRight: '10px', color:'magenta'}}>로그인</a>
                    <a href="/signup" style={{ color:'magenta'}}>회원가입</a>
                </div>
            </header>
            <Navbar></Navbar>            
            <main>{children}</main>
            <footer style={{
                backgroundColor: 'skyblue',
                color: 'magenta',
                padding: '10px',
                borderRadius: '0 0 8px 8px',
                textAlign: 'center'
            }}>@ 2026 ICT 신촌</footer>
        </div>
    )
}

export default LayOut;
