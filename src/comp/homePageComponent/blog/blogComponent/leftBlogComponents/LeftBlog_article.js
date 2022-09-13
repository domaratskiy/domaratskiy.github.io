


const LeftBlog_article = (props) => {
    return (
        <article>
            <a href="/blogspage">
                <figure>
                    <img src={props.imgSrc} data={props.imgSrc} alt="blog 1"  width="218" height="144"/>
                    <figcaption>
                        <span className="post_data"><i className="fa-solid fa-calendar-days"></i>{props.postData}</span>
                        <span className="post_comments"><i className="fa-solid fa-comment"></i>{props.postComments}</span>
                        <h4 className="post_name">{props.postName}</h4>
                    </figcaption>
                </figure>                                    
            </a>
           
        </article>       
    );
}

export default LeftBlog_article;