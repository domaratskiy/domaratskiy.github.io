
import SuportContact from "./SuportComponent/SuportContact";
import { connect } from "react-redux";
import AddressMap from "./SuportComponent/Map";

const Support = (props) => {
    return (
        
            <div class="wrapper">
                <div class="support_box">
                    <SuportContact name={props.name} email={props.email} adress={props.adress} number={props.number}/>
                    <AddressMap/> 
                </div>                   
           </div>
             
    );
}

const mapStateToProps = (state) => {
    console.log("Support > ", state);
    return {
        name: state.suport.suportInfo.name, 
        email: state.suport.suportInfo.email, 
        adress: state.suport.suportInfo.adress, 
        number: state.suport.suportInfo.number,
    }
}

export default connect(mapStateToProps)(Support);