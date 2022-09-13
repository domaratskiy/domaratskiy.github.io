import VitaminImg from './../../../img/vitaminImg.png';
import v from './vitamin.module.css';

const Vitamin = () => {
    return(
        <figure className={v.vitaminFigure}>
            <img src={VitaminImg} alt="" />
        </figure>
    );
}
export default Vitamin;