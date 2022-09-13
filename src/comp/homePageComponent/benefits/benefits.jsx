import b from './benefits.module.css';

const Benefist = (props) => {
    
    return (
        
        <div className={b.benefits_cont}>
            <div className={b.benefits_title}>{props.benefistData.name}</div>
            <div className={b.benefits_text}>
                {props.benefistData.text}   
            </div>
        </div> 
    );
}
export default Benefist;