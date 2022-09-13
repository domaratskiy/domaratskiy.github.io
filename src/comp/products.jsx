import ResultInfo from "./homePageComponent/resultInfo/resultInfo";
import ShopSlider from "./homePageComponent/section2/ShopSlider";
import Vitamin from "./homePageComponent/vitamin/vitamin";


let Products = () => {
    return (
        <div className="product-page">
            <ShopSlider/>
            <Vitamin/>
            <ResultInfo/>            
        </div>  

       
    )
}

export default Products;