import React from 'react';
import { connect } from 'react-redux'

import { getKanyeRest } from './actions'
import Display from './components/Display'
import './App.css';


function App(props) {
const getKanyeRest = (e) => {
e.preventDefault();
props.getKanyeRest();
}
  return (
    <div className="App">
      <Display clickAction={getKanyeRest} quote={props.quote}/>
    </div>
  );
}

const mapStateToProps = state => ({
  quote: state.someQuoteHere,
  error: state.error
});

export default connect( mapStateToProps, { getKanyeRest })(App);
