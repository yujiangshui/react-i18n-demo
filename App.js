import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>yujiangshui</h1>
        <span>hello world</span>
      </div>
    )
  }
}


let app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<App />, app);
