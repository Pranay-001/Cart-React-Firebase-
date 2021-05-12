import React from 'react';

const TotalCost = (props) =>{
    const total=props.total
    return (
        <div className="totalCost" style={styles.total}>
            &nbsp;Total&nbsp;:&nbsp; {total}
        </div>
    )
}

const styles={
    total:{
        fontSize:50,
        position:'sticky',
        bottom:0,
        fontFamily:'serif',
        backgroundColor:'grey',
        color:'black',
    }
}

export default TotalCost;