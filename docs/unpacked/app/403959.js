var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n
  } = e;
  const {
    listMessage: r
  } = t;
  if (r == null) {
    return;
  }
  let s;
  const {
    listType: l
  } = r;
  if (l === o.Message$ListMessage$ListType.SINGLE_SELECT || l === o.Message$ListMessage$ListType.PRODUCT_LIST) {
    let e = n.businessOwnerJid;
    let t = n.productListItemCount;
    var u;
    var c;
    if (r.listType === o.Message$ListMessage$ListType.PRODUCT_LIST) {
      e = (u = r.productListInfo) === null || u === undefined ? undefined : u.businessOwnerJid;
      t = (c = r.productListInfo) === null || c === undefined ? undefined : c.productSections.reduce((e, t) => e + t.products.length, 0);
    }
    s = (0, i.default)((0, i.default)({}, n), {}, {
      businessOwnerJid: e,
      productListItemCount: t,
      type: a.MSG_TYPE.LIST,
      list: r,
      footer: r.footerText
    });
  } else {
    s = (0, i.default)((0, i.default)({}, n), {}, {
      type: a.MSG_TYPE.UNKNOWN
    });
  }
  return {
    msgData: s,
    contextInfo: r.contextInfo
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./373070.js");
var o = require("./533494.js");