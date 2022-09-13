// import * as  axios from 'axios';

import foto1 from "./../img/gallery/1.jpg";
import foto2 from "./../img/gallery/2.jpg";
import foto3 from "./../img/gallery/3.jpg";
import foto4 from "./../img/gallery/4.jpg";

// axios  
// .get("https://randomfox.ca/floof/")
// .then( 
//   function(data) {
//     console.log(data)
//     let img = document.getElementById('img');
//     img.src = data.data.image;
//   }
// ); 
let Gallery = () => {
    return (
        <div className="wrapper">
            <ul className="galleryCont">
                <li className='foto'>
                    <img src={foto1} alt="" id='img'/>
                </li>
                <li className='foto'>
                    <img src={foto2} alt="" id='img'/>
                </li>
                <li className='foto'>
                    <img src={foto3} alt="" id='img'/>
                </li>
                <li className='foto'>
                    <img src={foto4} alt="" id='img'/>
                </li>

            </ul>            
        </div>

    )
}

export default Gallery;