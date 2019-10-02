import React from "react";
import QuoteButton from "./Button";
import { Alert } from 'reactstrap'
const Display = (props) => {
    return (
        <div className="container">
            <Alert color="primary">{props.quote} <strong>{props.quote === '' ? '' : '--Kanye West'}</strong></Alert>
            <QuoteButton clickAction={props.clickAction}/>
        </div>
    );
};

export default Display;
