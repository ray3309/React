import React, { useEffect, useState } from "react";
import Layout from "./Layout";

interface Info{
    name?: string;
    age?: number;
}

const Page: React.FC<Info> = () => {
    const [Info, setInfo] = useState({name: '', age: 0});

    //
    useEffect(() => {
        console.log(`useEffect name value : {Info.name}`);
        console.log(`useEffect age value : {Info.age}`);
        
        const Obj = {name: '윤희상', age: 44}
        setInfo(Obj);
    }, []);

    return (
        <Layout>
            <h2>Here is {Info.name} Page</h2>
            <p>My Age {Info.age}</p>            
        </Layout>
    )
}

export default Page;
