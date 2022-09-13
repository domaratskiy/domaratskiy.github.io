import LeftBlog_article from "./leftBlogComponents/LeftBlog_article";
import LeftBlog_form from "./leftBlogComponents/LeftBlog_form";
import LeftBlog_title from "./leftBlogComponents/LeftBlog_title";

const LeftBlog = () => {
    return (
        <div className="left_blog">
            <LeftBlog_title title="blog"/>
            <LeftBlog_form labelText="Subscribe for our blog"/>
            <div className="blog_list">
                <LeftBlog_article postData="25 Mar 2018" postComments="9" postName="Rangers review presents stark picture" imgSrc={require("./../../../../img/blog/img1.webp")}/>
                <LeftBlog_article postData="25 Mar 2018" postComments="9" postName="Rangers review presents stark picture" imgSrc={require("./../../../../img/blog/img2.webp")}/>
            </div>
        </div>
    );
}

export default LeftBlog;