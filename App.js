import React from 'react';
import ReactDOM from 'react-dom';
import Ab from 'Ab';

class App extends React.Component {

  render() {
    return (
      <Ab />
    )
  }
}


let app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<App />, app);
