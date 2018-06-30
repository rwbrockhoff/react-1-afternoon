import React, { Component } from 'react';
import './index.css';
import TopicBrowswer from './components/TopicBrowser/TopicBrowser';


class App extends Component {
  render() {
    return(
      <div>
        <p id="fadedTitle">COMPUTER SCIENCE</p>
        <p id="fadedSubtitle">FUNDAMENTALS</p>
        < TopicBrowswer />
    </div>
    )
  }
}

export default App;
