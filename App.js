import React from 'react';
import ReactDOM from 'react-dom';
import ItemInfo from './components/ItemInfo';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>yujiangshui</h1>
        <ItemInfo />
      </div>
    )
  }
}


let app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<App />, app);
