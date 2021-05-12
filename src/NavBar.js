import React from 'react';
const NavBar=(props)=>{
    const numberOfItems=props.count;
    return(
        <div className="nav" style={styles.navBar}>
            <div style={styles.name}>StoreWorld</div>
            <img style={styles.cartIcon} src="https://img.icons8.com/cute-clipart/344/shopping-cart.png"></img>
            <span style={styles.count}>{numberOfItems}</span>
        </div>

    )
}
export default NavBar;
const styles={
    name:{
        float: 'left', 
        fontSize:50,
        color:'black',
        fontWeight:'bold',
        fontFamily: 'cursive',
    },
    navBar:{
        backgroundColor:'teal',
        height:80,
        position:'sticky',
        top:0
    },
    cartIcon:{
        float:'right',
        margin:10,
        marginRight:40,
        height:60,
        width:60
    },
    count:{
        top:5,
        right:25,
        fontSize:15,
        fontWeight:'bold',
        background:'yellow',
        borderRadius:'50%',
        padding:'3px 8px',
        position:'absolute',
        color:'black'
    }
}