
import s from "./postText.module.css"

const PostText2 = (props) => {
    return (
        <div className={s.container}>
            <p>{props.text2.title}</p> 
            <p>{props.text2.paragraf1}</p>
            <p>{props.text2.listName}</p>
            <p>{props.text2.listItem}</p>        
        </div>
    )
}

export default PostText2;