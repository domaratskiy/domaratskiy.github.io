import css from "./../suport.module.css"
import React from 'react';
 const AddressMap=()=>{
    return (
        <div className={css.googlemap}>
          <iframe  id={css.gmap_canvas} src="https://maps.google.com/maps?q=%D0%94%D0%B2%D1%83%D1%80%D0%B5%D1%87%D0%BD%D1%8B%D0%B9%20%D0%BA%D1%83%D1%82&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    );
 }
 export default AddressMap;