import LeftBlog from "./blogComponent/LeftBlog";
import RightBlog from "./blogComponent/RightBlog";

const Blog = () => {
    return (
        <section className="blog wow animate__zoomIn"  data-wow-duration="1s" id="blog">
            <div className="wrapper">
                <div className="blog_box">
                    <LeftBlog/>
                    <RightBlog/>
                </div>
           </div>
       </section>
    );
}

export default Blog;