import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <nav className="footer_nav">
                    <ul className="footer_menu">
                       
                        <li><Link to="/about-us">{"О нас"}</Link></li>
                        <li><Link to="/products">{"Продукция"}</Link></li>
                        <li><Link to="/news1">{"Интерстное о мёде"}</Link></li>
                    </ul>
                </nav> 
                <div className="social_copyright">
                    <div className="footer_social">
                        <a href="#" className="social_icons"><i className="fa-brands fa-google"></i></a>
                        <a href="#" className="social_icons"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" className="social_icons"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="social_icons"><i className="fa-brands fa-pinterest-p"></i></a>
                    </div>
                    <div className="footer_copy">
                        <span>© 2014  - All Rights Reserved </span>
                    </div>
                </div>
            </div>           
        </footer>
    );
}
export default Footer;