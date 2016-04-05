import React from 'react';
import ReactDOM from 'react-dom';
import ItemInfo from './components/ItemInfo';
import iteminfoData from './data/iteminfo.json';

class App extends React.Component {

  render() {
    return (
      <div style={styles.wrap}>
        <ItemInfo data={iteminfoData} />
      </div>
    )
  }
}

let styles = {
  wrap: {
    width: 375,
    margin: '0 auto'
  }
}

let app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<App />, app);
