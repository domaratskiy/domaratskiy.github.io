import img from "./../../../../../img/honeyItem.png";
const ShopItems = (props) => {




    
    return (
        <div className="shop_slider__item">
            <figure>
                <img src={img}  alt="products" width="204" />
            </figure>
            <h4 className="item__name">{props.title}</h4> 
            <div className="item__price">{props.price}</div>
            <a href="#" className="item__buy"><i className="fa-solid fa-basket-shopping"></i>{props.buy}</a>
        </div>
    );
}

export default ShopItems;