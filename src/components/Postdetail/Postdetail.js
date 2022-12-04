import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Postdetail = () => {
    const [detail,setDetail]=useState({});
    const {id}=useParams();
    useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(res=>res.json())
  .then(data=>setDetail(data))



    },[]);
    return (
        <div>
            <h3>het how are you:{id}</h3>
            <h3>id is{detail.id}</h3>
            <p>{detail.body}</p>
        </div>
    );
};

export default Postdetail;