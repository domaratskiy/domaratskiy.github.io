
const inputReviews = (state, action) => {

    if (action.type === 'REVIEWS-INPUT-CHANGE'){
        state.blogData.textInput = action.name;
    }
    return state;
}


export  let ActionReviewsInput = (name) => {
    return {
        type: "REVIEWS-INPUT-CHANGE",
        name: name
    }
}

export default inputReviews;