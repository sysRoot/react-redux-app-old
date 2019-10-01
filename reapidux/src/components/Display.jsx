import React from "react";
import Button from "./Button";

const Display = (props) => {
    return (
        <div>
            <p>{props.quote} {props.quote === '' ? '' : '--Kanye West'}</p>
            <Button clickAction={props.clickAction}/>
        </div>
    );
};

export default Display;
