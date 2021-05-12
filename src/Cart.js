import React from 'react';
import CartItem from './CartItem'

const Cart = (props)=>{ 
    const {
        products,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,    
    }=props;
    return (
        <div className="cart">
            {products.map((product)=>{ 
                return (
                <CartItem 
                    product={product} 
                    key={product.id}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    deleteItem={deleteItem}
                />
                )
            })}
        </div>  
    )
}
export default Cart;
