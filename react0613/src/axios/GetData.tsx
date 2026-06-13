import axios from "axios";
import React, { useState } from "react";

//interface Json

interface Json{
    userId: number;
    id: number;
    title: String;
    body: String;
}

const GetData: React.FC = () => {

    //useState
    const [data, setData] = useState<Json | null>(null);


  const handleGet = async () => {
    try{
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        //alert(`Data Get Success:\n${JSON.stringify(resp.data, null, 2)}`);
        console.log(`typeof:${resp.data} => ${typeof(resp.data)}`);
        setData(resp.data);

    } catch(error){
        console.log(`Data Get Fail:`, error);
        alert(`Data Get Fail`);
    }
  };

  return (
    <div>
        <h2>Axios Get Req Example</h2>
        <button onClick={handleGet}>Data Get</button>
        <p/>
        <div>
            ID : {data?.id} <p/>
            UserID: {data?.userId} <p/> Title: {data?.title} <p/> Body: {data?.body} <p/>
        </div>
    </div>
  );
};

export default GetData;
