import axios from "axios";
import React, { useState } from "react";

//interface Json

interface Json{
    userId: number;
    id: number;
    title: String;
    body: String;
}

const PostData: React.FC = () => {

    const handlePost = async () => {
    try{
        const newPost = {
            title: 'Axios Post Example',
            body: 'Button Click Post Req Execute',
            userId: 1,
        };



        const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost, {
            headers: {'Content-Type': 'application/json'},
        });
        
        alert(`Data Send Success \n${JSON.stringify(resp.data, null, 2)}`);
    } catch(error){
        console.log(`Data Post Fail:`, error);
        alert(`Data Post Fail`);
    }
  };

  return (
    <div>
        <h2>Axios Post Req Example</h2>
        <button onClick={handlePost}>Data Post</button>        
    </div>
  );
};

export default PostData;
