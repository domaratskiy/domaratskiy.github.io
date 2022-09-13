


import c from "./postH1.module.css";

const PostH1 = (props) => {
    
    return (
        <h1 className={c.name}>{props.postData}</h1>       
    )
}

export default PostH1;