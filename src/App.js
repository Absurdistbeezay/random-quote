import React, {Component} from 'react';
import './App.css';
import QuoteContainer from'./components/QuoteContainer';
import Footer from './components/Footer';


class App extends Component{
  
  render(){
    return(
      <div className="container text-center">
      <h1>Random Quote Generator</h1>
      <QuoteContainer/>
      <Footer className="footer"/>
    </div>
  );
}
}
export default App;
