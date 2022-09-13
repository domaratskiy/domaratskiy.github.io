import ShopSliderTop from './shopSliderComponent/ShopSliderTop';
import ShopSliderBox from './shopSliderComponent/ShopSliderBox';
import { connect } from "react-redux";
const ShopSlider = (props) => {


    return (
        <section className="shopSlider wow animate__zoomIn"  data-wow-duration="1s" id="shopSlider">
            <div className="wrapper">

                <ShopSliderTop title="ЛУЧШАЯ ПРОДУКЦИЯ"/>

                <ShopSliderBox shop={props.shop}/>

            </div>
        </section>
    );
}



const mapStateToProps = (state) => {
    
    return {
        shop: state.S2 
    }
}



export default connect(mapStateToProps)(ShopSlider) ;