import { useState, useEffect } from "react";
import { getImages } from "../../services/post.service";
function Gallery (){

      const [images, setImages] = useState([]);
      
    
      useEffect(() => {
        getImages()
          .then((res) => {
            setImages(res);
            console.log(res)
          })
          .catch((error) => {
            console.log(error);
            // handle errors
          });
      }, []);
      
    return  ( 
        <div>
            <h1>
                this is the gallery
            </h1>
            {images.map((image)=>
            <img src={image}/>)}
        </div>
    )
}

export default Gallery