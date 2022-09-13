// import S1Img from './../../../img/Section1Img.png';
import t from './section1Img.module.css';
import {connect} from 'react-redux';
import img from './../../../img/Section1Img.png';





function Section1Img(props) {
      
  

      return (
        <figure className={t.topImg}>
      
          <img src={img} alt=""   height="190"/>
          <figcaption>
            <div className={t.freeShipping}>{props.text}</div>  
          </figcaption>

        </figure>
      );
    }



const mapStateToProps = (state) => {
  console.log('Section1Imgstate',state);
  return {
      text: state.S1.text 
  }
}



export default connect(mapStateToProps)(Section1Img) ;