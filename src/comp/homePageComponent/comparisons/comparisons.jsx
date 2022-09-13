import naturalImg from './../../../img/naturalImg.png';
import industrialImg from './../../../img/industrialImg.png';
import { connect } from "react-redux";
import c from './comparisons.module.css'


const Comparisons = (props) => {

    
    return (
        <div className={c.comparisonsCont}>
            <figure className={c.natural}>
                <figcaption>
                    <ul className={c.natural_list}>
                        <li><h4><strong>{props.titleNatural}</strong></h4></li>
                        <li><span>{props.row1Natural}</span></li>
                        <li><span>{props.row2Natural}</span></li>
                        <li><span>{props.row3Natural}</span></li>
                        <li><span>{props.row4Natural}</span></li>
                        <li><span>{props.row5Natural}</span></li>
                        <li><span>{props.row6Natural}</span></li>
                    </ul>
                </figcaption>
                <img src={naturalImg} alt="" />
            </figure>
            <figure className={c.industrial}>
                    <img src={industrialImg} alt="" />
                    <figcaption>
                        <ul className={c.industrial_list}>
                            <li><h4>{props.titleIndustrialHoney}</h4></li>
                            <li><span>{props.row1Industrial}</span></li>
                            <li><span>{props.row2Industrial}</span></li>
                            <li><span>{props.row3Industrial}</span></li>
                            <li><span>{props.row4Industrial}</span></li>
                            <li><span>{props.row5Industrial}</span></li>
                        </ul>                        
                    </figcaption>
            </figure>
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log("Comparisons", state)
    return {
        titleNatural: state.compasions.naturalHoney.title,
        row1Natural: state.compasions.naturalHoney.row1,
        row2Natural: state.compasions.naturalHoney.row2,
        row3Natural: state.compasions.naturalHoney.row3,
        row4Natural: state.compasions.naturalHoney.row4,
        row5Natural: state.compasions.naturalHoney.row5,
        row6Natural: state.compasions.naturalHoney.row6,

        titleIndustrialHoney: state.compasions.industrialHoney.title,
        row1Industrial: state.compasions.industrialHoney.row1,
        row2Industrial: state.compasions.industrialHoney.row2,
        row3Industrial: state.compasions.industrialHoney.row3,
        row4Industrial: state.compasions.industrialHoney.row4,
        row5Industrial: state.compasions.industrialHoney.row5,

    }
}



export default connect(mapStateToProps)(Comparisons) ;