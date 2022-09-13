import React, { useState } from "react";
import logo from './../../img/logo.png';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./header.module.css";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";





let Header = (props) => {

    const [nav, setNav] = useState(false);
    const [click, setClick] = useState(true);

    const showHidden = () => {
        setClick(!click);
        setNav(!nav);  
    }

    return (
        <header id="header">
            <div className="headerTop_Box">
                <div className="wrapper">
                    <div className='headerTop '>
                        <figure className='logoBox'>
                            <img src={logo} alt={props.logoName} width={"50"} />
                            <figcaption>
                                <span>{props.logoName}</span>
                                <span><a href="tel:+380995014122">{props.logoTell}</a> </span>
                            </figcaption>
                        </figure>
                        <nav>
                            <div className="burger " onClick={showHidden}>
                                <FontAwesomeIcon icon={click ? faBars : faXmark} />
                            </div>
                            <ul className={nav ? [style.menu, style.active].join(" ") : [style.menu]}>
                                <li><Link to="/" onClick={showHidden}>{"Главная"}</Link></li>
                                <li><Link to="/about-us" onClick={showHidden}>{"О нас"}</Link></li>
                                <li><Link to="/products" onClick={showHidden}>{"Продукция"}</Link></li>
                               
                                <li><Link to="/news1" onClick={showHidden}>{"Интерстное о мёде"}</Link></li>
                                <li><Link to="/photo" onClick={showHidden}>{"Галерея фото"}</Link></li>
                                <li><Link to="/contact" onClick={showHidden}>{"Контакты"}</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
} 

const mapStateToProps = (state) => {

    return {
        logoName: state.header.logo.name,
        logoTell: state.header.logo.tell 
    }
}



export default connect(mapStateToProps)(Header) ;