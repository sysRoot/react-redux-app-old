import React from "react";
import { Button } from "reactstrap";

const QuoteButton = props => {
    return <Button color='danger' onClick={e => props.clickAction(e)}>Fetch Quote</Button>;
};

export default QuoteButton;
