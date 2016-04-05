var React = require('react');

var ItemInfo = React.createClass({

  displayName: 'ItemInfo',

  render: function() {
    var data = this.props.data;
    if (!data ) { return null; }

    var itemInfo = data.fields ? data.fields : data;
    var skuInfo = '';

    if (itemInfo.skuInfo && itemInfo.skuInfo.length) {
      itemInfo.skuInfo.forEach((sku, i) => {
        if (i > 0) {
          skuInfo += '，';
        }
        skuInfo += (sku.name + '：' + sku.value);
      });
    }

    itemInfo.image = itemInfo.pic;

    function htmlTitle() { return {__html: itemInfo.title }; };

    return (
      <div style={styles.wrap}>
        <div style={styles.listImg}>
          <a href={itemInfo.itemDetailUrl} style={styles.listImgLink}>
            <img
              src={itemInfo.image}
              style={styles.listImgImg} />
          </a>
        </div>
        <div style={styles.goodsDes}>
          <a href={itemInfo.itemDetailUrl} style={styles.listImgLink}>
            <span style={styles.goodsTitle} dangerouslySetInnerHTML={htmlTitle()} />
          </a>
          <div style={styles.goodsSpecification}><span>{skuInfo}</span></div>
        </div>
        <div style={styles.priceWrap}>
          <div style={styles.price}><span><span style={styles.unit}>￥</span>{itemInfo.price}</span></div>
          <div style={styles.nums}><span>共 {itemInfo.quantity} 件</span></div>
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
