import Section1Img from './section1Img/section1Img';
import ShopSlider from './section2/ShopSlider';
import InfoHoney from './resultInfo/resultInfo';
import Vitamin from './vitamin/vitamin';
import Comparisons from './comparisons/comparisons';
import SeporatorLine from './seporator/seporator';
import Blog from './blog/Blog';
import Support from './support/Support';


const Main = (props) => {
    return (
      <div className="wrapper">
        <main>
          <Section1Img/>
          <ShopSlider/>
          <SeporatorLine/>
          <Vitamin/>
          <InfoHoney />
          <SeporatorLine/>
          <Comparisons/>
          <SeporatorLine/>
          <Blog/>
          <SeporatorLine/>
          <Support/>
        </main>      
      </div>
  
    );
  }
  
  export default Main;