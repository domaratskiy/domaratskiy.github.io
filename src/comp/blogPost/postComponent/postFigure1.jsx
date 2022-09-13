import c from "./postFigure2.module.css";
import img from "./../../../img/blog/postNewsImg/blogImg1.png";
const PostFigure1 = (props) => {

    return (
        <figure className={c.img}>
            <img src={img} alt="" />
        </figure> 
    )
}

export default PostFigure1;