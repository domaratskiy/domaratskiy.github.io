


const RightBlog_person = (props) => {
    return (
        <div className="person">
            <figure>
                <img src={props.imgSrc} alt="Andrea Williams foto" width="107" height="106"/>
                <figcaption>
                    <h6 className="person_name">{props.name}</h6>
                    <span className="person_live">{props.cont}</span>
                </figcaption>
            </figure>
        </div>
    );
}
export default RightBlog_person;