import b from "./reviews.module.css";
import ReviewsItem from "./reviewsItem";


const Reviews = (props) => {
 
    let reviewsNew = props.reviews.map(h => <ReviewsItem name={h.name} text={h.text}/>)

    return (
            <div className={b.reviewsOut_cont}>
                <span className={b.reviews_title}>Отзывы</span>
                <div className={b.reviewsOut_item}>
                    {reviewsNew}
                </div>
            </div>
    )
}
export default Reviews;