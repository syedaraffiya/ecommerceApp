import React from "react"
import"./home.css"
import {useStateValue} from "./StateProvider";


function Product({id, title,image,price,rating}){
     const [{basket}, dispatch] =useStateValue();
console.log("basket content",basket)

     const AddToBasket = () => {
         dispatch({
        type:"ADD_TO_BASKET",
        item :{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating

        
        }
        })
    }

    return(
        <div className="product">
            <div className="product__info">
                <h3>{title}</h3>
                
                {/* <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                 </p>  */}
                 <div className="product__rating">
                {
                    Array(rating)
                    .fill(2)
                    .map((_) => (
                        <p> * </p>
                    ))
                }

                </div>
                
                
            </div>
           <img src={image} alt=""/>
           <button onClick={AddToBasket}>Booked Now</button>
        </div>
    )
}
export default Product;