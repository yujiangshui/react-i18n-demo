var React = require('react');

var I18N = {
  data: {},
  register: function(data) {
    this.data = Object.assign({}, this.data, data);
    console.log(this.data);
  },
  t: function(locale, name, data) {
    var result = this.data[locale][name];
    if (data) {
      Object.keys(data).forEach(function(val, key) {
        result = result.replace('#' + val + '#', data[val]);
      });
    }
    return result;
  }
};

I18N.register({
  'en': {
    'color': 'color',
    'size': 'size',
    'comments': '#comments# customer reviews',
    'amount': '#amount# items'
  },
  'cn': {
    'color': '颜色',
    'size': '尺寸',
    'comments': '共有 #comments# 条评论',
    'amount': '共 #amount# 件'
  }
});

var ItemInfo = React.createClass({

  displayName: 'ItemInfo',

  render: function() {
    var data = this.props.data;
    var locale = this.props.locale || 'en';
    if (!data ) { return null; }

    var itemInfo = data;
    var skuInfo = '';

    if (itemInfo.skuInfo && itemInfo.skuInfo.length) {
      itemInfo.skuInfo.forEach((sku, i) => {
        if (i > 0) {
          skuInfo += '，';
        }
        if (sku.type === 'color') {
          skuInfo += (I18N.t(locale, 'color') + '：' + sku.value);
        }
        if (sku.type === 'size') {
          skuInfo += (I18N.t(locale, 'size') + '：' + sku.value);
        }
      });
    }

    return (
      <div style={styles.wrap}>
        <div style={styles.listImg}>
          <a href={itemInfo.itemDetailUrl} style={styles.listImgLink}>
            <img
              src={itemInfo.pic}
              style={styles.listImgImg} />
          </a>
        </div>
        <div style={styles.goodsDes}>
          <a href={itemInfo.itemDetailUrl} style={styles.listImgLink}>
            <span style={styles.goodsTitle} >{itemInfo.title}</span>
          </a>
          <div style={styles.goodsSpecification}><span>{skuInfo}</span></div>
          <div style={styles.comments}><a style={styles.commentsLink} href="#">{I18N.t(locale, 'comments', {comments: itemInfo.commentsAmount})}</a></div>
        </div>
        <div style={styles.priceWrap}>
          <div style={styles.price}><span><span style={styles.unit}>￥</span>{itemInfo.price}</span></div>
          <div style={styles.nums}><span>{I18N.t(locale, 'amount', {amount: itemInfo.quantity})}</span></div>
        </div>
        <div style={styles.refundWrap}>
          <a href={data.itemBtn.href} style={styles.primary} onClick={this.clickHandler}>
            <span>{data.itemBtn.title}</span>
          </a>
        </div>
      </div>
    );
  }

});

var styles = {
  wrap: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 12,
    paddingLeft: 12,
    backgroundColor: '#f5f5f5'
  },
  listImg: {
    width: 90,
    height: 90,
    marginRight: 10
  },
  listImgLink: {
    textDecoration: 'none',
    color: '#3d4245'
  },
  listImgImg: {
    width: 90,
    height: 90
  },
  goodsDes: {
    flex: 1
  },
  goodsTitle: {
    fontSize: 14,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    lineHeight: '18px'
  },
  goodsSpecification: {
    marginTop: 8,
    fontSize: 12,
    color: '#999'
  },
  priceWrap: {
    display: 'flex',
    marginLeft: 10,
    textAlign: 'right',
    flexDirection: 'column',
    lineHeight: '12px'
  },
  unit: {
    fontSize: 12
  },
  price: {
    color: '#666',
    fontSize: 14
  },
  nums: {
    color: '#666',
    fontSize: 12
  },
  refundWrap: {
    position: 'absolute',
    right: 12,
    bottom: 12
  },
  comments: {
    marginTop: 8,
    fontSize: 12,
    color: '#999'
  },
  commentsLink: {
    color: '#999',
    textDecoration: 'none'
  },
  primary: {
    textDecoration: 'none',
    display: 'block',
    paddingRight: 6,
    paddingLeft: 6,
    paddingTop: 2,
    paddingBottom: 2,
    marginLeft: 5,
    textAlign: 'center',
    fontSize: 14,
    borderRadius: 2,
    borderStyle: 'solid',
    borderColor: '#68676c',
    borderWidth: 1,
    color: '#68676c',
    position: 'relative',
    color: '#ff4e0a',
    borderColor: '#ff4e0a'
  }
};

module.exports = ItemInfo;
