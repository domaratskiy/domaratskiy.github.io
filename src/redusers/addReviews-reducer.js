



const addsReviews = (state , action) => {
    if(action.type === 'ADD-REVIEWS'){
        let newPost = {
            name: state.blogData.textInput,
            text: state.blogData.textArea,
        };
        state.blogData.reviews.push(newPost);
    }

    return state;
}


export let AddActionCreator = () => {
    return {
        type: "ADD-REVIEWS"
    }
}

export default addsReviews;