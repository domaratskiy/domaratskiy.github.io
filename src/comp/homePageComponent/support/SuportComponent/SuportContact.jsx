import css from "./../suport.module.css"
const SuportContact = (props) => {
    return (
        <ul className={css.suport_contact}>
            <li>{props.name}</li>
            <li>{"Телефон"}: <a href="tel:8002346789">{props.number} </a></li>
            <li>{"Почтовый адрес"}:<a href="mailto:info@website.com">{props.email}</a></li>
            <li>{"Адрес по которому вы можете нас найти"}: <i className="fa-solid fa-location-dot"></i><span>{props.adress}</span> </li>
        </ul>
    );
}

export default SuportContact;