
const LeftBlog_form = (props) => {
    return (
        <form action="#">
            <label htmlFor="mailForm">{props.labelText}</label>
            <span className="form_cont"><input type="text" placeholder="Your e-mail" id="mailForm"/></span>    
        </form>
    );
}

export default LeftBlog_form;