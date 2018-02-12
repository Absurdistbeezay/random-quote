import React, { Component } from "react";
import "./QuoteContainer.css";

class QuoteContainer extends Component {
  constructor() {
    super();
    this.state = {
      url: `https://talaikis.com/api/quotes/random/`,
      quote:
        "This is Life! You learn from your mistakes. Do not be afraid of creating something useless. Keep creating and that's how you get perfection.",
      author: "Vijay The Great!"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
  }
  handleClick() {
    fetch(this.state.url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          quote: data.quote,
          author: data.author
        });
      });
  }
  handleTweet() {
    window.open(
      `https://twitter.com/intent/tweet?text="${this.state.quote}"-${
        this.state.author
      }`
    );
  }

  render() {
    return (
        <div>

        <div className="quote-container">
            <div className="quote">
            {this.state.quote}
            </div>
            <div className="author">{this.state.author}</div>
            </div>
            <div className="buttons">
                <a onClick={this.handleClick} className="btn btn-success btn1"><i className="fa fa-random"></i> Next Quote</a>
                <a onClick={this.handleTweet} className="btn btn-primary btn2"><i className="fab fa-twitter"></i> Tweet Quote</a>
            </div>      
    
    </div>
      
    );
  }
}
export default QuoteContainer;
