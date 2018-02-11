import React, {Component} from 'react';
import './QuoteContainer.css';

class QuoteContainer extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <div className="quote-container">
                <div className="quote">
                    hello, life is quote!
                </div>
                <br/>
                <div className="author">
                    Vijay the great
                </div>
                </div>
                <div className="buttons">
                    <button className="btn-quote">Next Quote</button>
                    <button className ="btn-tweet">Tweet</button>
                </div>
            </div>
        );
    }
}
export default QuoteContainer;