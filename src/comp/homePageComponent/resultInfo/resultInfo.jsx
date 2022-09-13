
import React, { useState } from "react";
import r from './resultInfo.module.css';
import { connect } from "react-redux";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 const InfoHoney = (props) => {
    const [click, setClick] = useState(true);

    const shovHide = () => {
        setClick(!click);
        let a = document.getElementById('InfoHoneyText');
        a.style.display === 'none' ? a.style.display = 'block' : a.style.display = 'none';
    }

    return (
        <div className={r.InfoHoney_cont}>
            <div className={r.InfoHoney_cont__title} onClick={shovHide}><div className={r.awesomes_box}><FontAwesomeIcon icon={click ? faPlus : faMinus} /></div>{props.title}</div>
            <div className={r.InfoHoney_cont__text}  id="InfoHoneyText" style={{ display: 'none' }}>
                <p>
                    <strong>Пчелиный Мёд Акации Кислотность:</strong>{props.acidityText}
                </p>
                <p>
                    <strong>Диастаза = 13,9% </strong>{props.diastasText}
                </p>
                <p>
                    <strong>Влажность = 18,44% </strong>{props.humidityText}
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
  
    return {
        title: state.S3.sectionTitle, 
        acidityText: state.S3.acidityText,
        diastasText: state.S3.diastasText,
        humidityText: state.S3.humidityText,
    }
}

export default connect(mapStateToProps)(InfoHoney) ;