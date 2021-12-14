import React from "react";
import Subtotal from "./Subtotal";
import {useStateValue} from"./StateProvider";
import ProductCart from "./ProductCart";


function Checkout(){
    const [{basket}] = useStateValue();

    return(
        <div style={{backgroundColor:"black",color:"white"} }>
            <div className="checkout_left">
                {
                    basket.length === 0 ? (
            
                <div>
                    <h1 className="checkout_title">Your Shopping basket is empty.</h1>
                    <p>You have no items in your basket .Buy one.</p>
                </div>):(
                    <div>
                        <h2>Items In the Shopping Basket</h2>
                        {
                        basket.map(item=>(
                            <ProductCart  
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            
                            rating={item.rating}/>
                        ))}
                    </div>

                )}
            </div>
            <div className="checkout_right">
           <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;