import c from "./postFigure2.module.css";
import img from "./../../../img/blog/postNewsImg/blogImg2.png";
const PostFigure2 = (props) => {

    return (
        <figure className={c.img}>
            <img src={img} alt="" />
        </figure> 
    )
}

export default PostFigure2;