import React, {Component} from 'react';
import './App.css';
import QuoteContainer from'./components/QuoteContainer';
import Footer from './components/Footer';


class App extends Component{
  
  render(){
    return(
      <div className="container">
      <h1>RandomQuote Generator</h1>
      <QuoteContainer/>
      <Footer/>
    </div>
  );
}
}
export default App;
