import React from 'react';

const Button = (props) => {
    return ( 
        <button onClick={(e) => props.clickAction(e)}>Fetch Quote</button>
     );
}
 
export default Button;