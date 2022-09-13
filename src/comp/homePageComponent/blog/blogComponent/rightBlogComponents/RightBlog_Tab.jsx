const RightBlog_Tab = (props) => {
    return (
        <div className={props.class}>
            <h5 className="testemonialTab_title">{props.name}</h5>
            <span className="testemonialTab_adress"><i className="fa-solid fa-location-dot"></i>{props.city}</span>
            <cite className="testemonialTab_cite">{props.citeTitle}</cite>
            <figure>
                <img src={props.imgSrc} data={props.imgSrc} alt={props.alt} width="687" height="120"/> 
            </figure> 
            <p className="testemonialTab_text">{props.text}</p>  
        </div>      
    );
}

export default RightBlog_Tab;