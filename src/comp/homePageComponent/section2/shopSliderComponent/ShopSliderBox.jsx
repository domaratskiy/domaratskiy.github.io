import ShopItems from './sliderBoxComponent/ShopItems'

const ShopSliderBox = (props) => {

    let ShopItem = props.shop.map(m => <ShopItems   
                                                title={m.title}
                                                price={m.price}
                                                buy={m.buy}   
                                           />);
    return (
        <div className="shopSlider__box">
            {ShopItem}

        </div>
        
    );
}

export default ShopSliderBox;





  