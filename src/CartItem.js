import React from 'react';

const CartItem=(props)=>{
    const {price, title, qty, id, img}=props.product;
    const {
        product,
        increaseQuantity, 
        decreaseQuantity, 
        deleteItem
        }=props;        
        return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={img}/>
            </div>
            <div className="right-block">
                <div style={{fontWeight:'bold',fontSize:25,color:'#777'}}>{title}</div>  
                <div style={{fontSize:20,color:'#777'}}>Rs {price}</div>
                <div style={{fontSize:20,color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                <img className="action-icons" 
                src="https://www.flaticon.com/premium-icon/icons/svg/3024/3024515.svg"
                alt="increase" onClick={()=>increaseQuantity(product)} 
                />
                <img className="action-icons" 
                src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740679.svg" 
                alt="decerease" onClick={()=>decreaseQuantity(product)} 
                />
                <img className="action-icons" 
                src="https://www.flaticon.com/premium-icon/icons/svg/3024/3024530.svg" 
                alt="delete " onClick={()=>deleteItem(id)}
                />
                </div> 
            </div>
        </div>
    )
}

const styles = {
    image:{
        height:150,
        width:150,
        borderRadius:4
    }
}
export default CartItem;

