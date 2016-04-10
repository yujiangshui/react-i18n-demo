import React from 'react';
import ReactDOM from 'react-dom';
import ItemInfo from './components/ItemInfo';
import iteminfoData from './data/iteminfo.json';
import {addLocaleData, IntlProvider} from 'react-intl';

import zh from 'react-intl/locale-data/zh';
addLocaleData(zh);

let messages = {
  'zh': {
    'color': '颜色',
    'size': '尺寸',
    'comments': '{comments, plural, =0 {无评论} other {共 {comments, number} 条评论}}',
    'amount': '共 {amount, number} 件'
  }
};
// locale 的值可以通过 navigator.language || navigator.browserLanguage 在浏览器端获取
// 通常也需要提供给用户手动切换器
let locale = 'en';

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

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <App />
  </IntlProvider>,
  app
);
