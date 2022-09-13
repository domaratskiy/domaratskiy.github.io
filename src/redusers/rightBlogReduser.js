
export let initialState = {
    blog:{
        name: "Andrea Williams",
        city:"USA, New York, 3174 Groveland Terrace",
        cityTitle:"There are many variations of passages of Lorem Ipsum available but the domised words which don't look even slightly believable.", 
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with" ,

    },
    person:{
        name: ["Andrea Williams", "Bernard Martin", "Abigail Meyer"],
        contry: ["USA, New York","USA, Chicago","German, Berlin"],
        
    }
}

 const rightBlog = (state = initialState) => {
    return state;
}

export default rightBlog;

