import React from "react";
import { useNavigate } from "react-router-dom";
import"./home.css";
import {useStateValue} from "./StateProvider";


function Product({ title,image,rating}){
    const navigate = useNavigate() 

    const handleSubmit  = (event) => {
        event.preventDefault();
        navigate("/booking")
        alert('Booking page ')
      }
  

      const onSubmit  = (event) => {
        event.preventDefault();
        navigate("/hoteldetail")
        alert('hotel detail ')
      }


     const [{basket}, dispatch] =useStateValue();
console.log("basket content",basket)

    //  const AddToBasket = () => {
    //      dispatch({
    //     type:"ADD_TO_BASKET",
    //     item :{
    //         id:id,
    //         title:title,
    //         image:image,
    //          price:price,
    //         rating:rating

        
    //      }
    //   })
    //  }

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
           <button onClick={handleSubmit} type="submit" value="Submit" class="col-1-4">Booked Now</button>
            {/* <button onClick={AddToBasket}>Booked Now</button> */} 

            <button onClick={onSubmit}>Booked Now</button> 
        </div>
    )
}
export default Product;