
import s from "./postText.module.css"
import SupTitleList from "./supTitleList";

const PostText1 = (props) => {

    return (
        <div className={s.container}>
            <p>{props.text1.paragraf1}</p>
            <p>{props.text1.paragraf2}</p> 
           
    </div>
    )
}

export default PostText1;