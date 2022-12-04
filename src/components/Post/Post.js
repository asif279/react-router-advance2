import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
    const {id,title}=props.post;
    const navigate = useNavigate();
    const handleClick= id =>{
        const url=`./post/${id}`;
        navigate(url);}
    return (
        <div>
            <h1>{title}</h1>
            <h4>{id}</h4>
            <button onClick={()=>handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Post;