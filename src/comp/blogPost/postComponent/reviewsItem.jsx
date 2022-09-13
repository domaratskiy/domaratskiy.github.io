import b from "./reviewsItem.module.css";
import avatar from "./../../../img/logo.png"

const ReviewsItem = (props) => {

    return (
        <figure className={b.reviewsItem_cont}>
            <img src={avatar} alt="" />
            <figcaption>
                <span className={b.reviewsOut_name}>{props.name}</span>
                <p className={b.reviewsOut_text}>{props.text}</p>
            </figcaption>
        </figure>
    )
}
export default ReviewsItem;