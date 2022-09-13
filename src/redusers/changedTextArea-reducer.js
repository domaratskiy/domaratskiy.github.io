
const textAreaReviews = (state, action) => {

    if (action.type === 'REVIEWS-TEXT-CHANGE'){
        state.blogData.textArea = action.text;
    }
    return state;
}

export  let ActionReviewsTextArea = (text) => {
    return {
        type: "REVIEWS-TEXT-CHANGE",
        text: text
    }
}

export default textAreaReviews;