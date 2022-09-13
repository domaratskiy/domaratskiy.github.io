import RightBlog_person from "./rightBlogComponents/RightBlog_person";
import RightBlog_Tab from "./rightBlogComponents/RightBlog_Tab";
import { connect } from "react-redux";
const RightBlog = (props) => {

    
    return (
        <div className="right_blog">
            <div className="testemonial_cont">
                <RightBlog_Tab 
                    class="testemonialTab tab-0"
                    name={props.blogName}
                    city={props.blogCity} 
                    citeTitle={props.blogCityTitle}
                    text={props.blogtext}
                    alt="Bernard Martin foto"
                    imgSrc={require("./../../../../img/blog/blogImg.png")}
                />
                <div className="testemonial_slider">
                    <div className="testemonial_carusel">
                        <RightBlog_person name={props.blogPersonName[0]} cont={props.blogPersonContry[0]}  imgSrc={require("./../../../../img/testemonial/team1.webp")}/>
                        <RightBlog_person name={props.blogPersonName[1]} cont={props.blogPersonContry[1]} imgSrc={require("./../../../../img/testemonial/team2.webp")}/>
                        <RightBlog_person name={props.blogPersonName[2]} cont={props.blogPersonContry[2]} imgSrc={require("./../../../../img/testemonial/team3.webp")}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    console.log("RightBlog",state)
    return {
        blogName: state.rightBlog.blog.name,
        blogCity: state.rightBlog.blog.city,
        blogCityTitle: state.rightBlog.blog.cityTitle,
        blogtext: state.rightBlog.blog.text,


        blogPersonName: state.rightBlog.person.name,
        blogPersonContry: state.rightBlog.person.contry,
        blogPersonImg: state.rightBlog.person.img,
    }
}



export default connect(mapStateToProps)(RightBlog) ;