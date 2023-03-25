import React from "react";
import CartItem from "./cartItem";

const Cart = (props)=> {
   

       const {products}=props.product;
       console.log(products);
        return(
           <div className="cart">
           
           {
               products.map( (product)=> {
                return <CartItem
                product={product}
                 key={product.id}
                //  func={(()=>{console.log("hello World")})}
                //  jsx={<h1> testing </h1>}
                handleIncreaseQuantity ={props.onIncreseQuantity}
                handleDecreaseQuantity ={props.onDecreseQuantity}
                handleDeleteProduct= {props.onDeleteProduct}
        

                />
               })
            }
           </div>
        )
    }

export default Cart;