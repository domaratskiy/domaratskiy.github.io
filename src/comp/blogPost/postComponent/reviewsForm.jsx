import React from "react";
import q from "./reviewsForm.module.css"


// import {AddActionCreator} from "./../../../redux/addReviews-reducer"
// import {ActionReviewsInput} from "./../../../redux/changedInput-reducer"
// import {ActionReviewsTextArea} from "./../../../redux/changedTextArea-reducer"

const ReviewsForm = (props) => {

    // let newPostName = React.createRef();
    // let newPostText = React.createRef();
    
    // let addReview = function () {
    //     props.dispatch(AddActionCreator());  
    //     props.dispatch(ActionReviewsInput("")); 
    //     props.dispatch(ActionReviewsTextArea(""));
    // }
    // let сhengeInput = function () {
    //     let name = newPostName.current.value;
    //     props.dispatch(ActionReviewsInput(name));   
    // }
    // let chengeTextArea = function () {
    //     let text = newPostText.current.value;
    //     props.dispatch(ActionReviewsTextArea(text));
    // }
    // let reviewClickName = function () {
    //     props.dispatch(ActionReviewsInput(""));

    // }
    // let reviewClickText = function () {
    //     props.dispatch(ActionReviewsTextArea(""));
    // }

    return (
        <div>
            <h5 className={q.reviewsForm}>{"Можешь оставить отзывы"}</h5>
            <div className={q.reviewsIn__cont}>
                {/* <input placeholder={props.placeholder} type="text" ref={newPostName}  value={props.textInput} onChange={сhengeInput} onClick={reviewClickName} />
                <textarea  ref={newPostText} cols="30" rows="10" className={q.textArea} onChange={chengeTextArea} value={props.textArea} onClick={reviewClickText}/>
                <button className={q.reviewsBTN} onClick={addReview}>Отправить</button> */}
            </div>            
        </div>
    )
}
export default ReviewsForm;