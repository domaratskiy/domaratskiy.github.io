
import { connect } from "react-redux";

import PostH1 from "./postComponent/postH1";
import PostFigure1 from "./postComponent/postFigure1";
import PostText1 from "./postComponent/postText1";
import PostFigure2 from "./postComponent/postFigure2";

import"./post.css";
import PostText2 from "./postComponent/postText2";
import ReviewsForm from "./postComponent/reviewsForm";
import Reviews from "./postComponent/reviews";
import SeporatorLine from "./../homePageComponent/seporator/seporator";

const Post1 = (props) => {

    return (
        <div className="wrapper">
            <main className="postPage">
                <PostH1 postData={props.name}/>
                <PostFigure1/>
                <PostText1 text1={props.text1}/>
                <PostFigure2/>
                <PostText2 text2={props.text2}/>
             {/*         <ReviewsForm dispatch={props.dispatch}
                    
                            
                             textArea={props.data.blogData.textArea}
                             textInput={props.data.blogData.textInput}
                             />
                <Reviews reviews={props.data.blogData.reviews} />  */}
                
                <SeporatorLine/>
                
            </main>
        </div>
    )
}



                                                
                                                 
// addReviews={store.addReviews}
// ReviewsChengeInput={store.ReviewsChengeInput}
// ChengeTextArea={store.ChengeTextArea}
// textInput={store.allData.postData.textInput}
// textArea={store.allData.postData.textArea}

const mapStateToProps = (state) => {
    console.log("blogPost1", state)
    return {
        name: state.blogPost1.name,
        text1: state.blogPost1.text1, 
        
        text2 : state.blogPost1.text2, 
    }
}



export default connect(mapStateToProps)(Post1);