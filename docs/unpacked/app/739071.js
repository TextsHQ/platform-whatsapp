Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProduct = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  return (0, i.addProduct)(e, t, n);
};
exports.appealProduct = function (e, t) {
  return (0, i.appealProduct)(e, t);
};
exports.createBusinessCatalog = function () {
  return (0, i.createCatalog)();
};
exports.deleteProducts = function (e) {
  return (0, i.deleteProducts)(e);
};
exports.editProduct = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  return (0, i.editProduct)(e, t, n);
};
exports.queryCatalog = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
  let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  let a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
  let o = arguments.length > 5 ? arguments[5] : undefined;
  let s = arguments.length > 6 && arguments[6] !== undefined && arguments[6];
  return (0, i.queryCatalog)(e, t, n, r, a, o, s);
};
exports.queryProduct = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  let a = arguments.length > 4 ? arguments[4] : undefined;
  let o = arguments.length > 5 ? arguments[5] : undefined;
  return (0, i.queryProduct)(e, t, n, r, a, o);
};
exports.queryProductList = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  let a = arguments.length > 4 ? arguments[4] : undefined;
  return (0, i.queryProductList)(e, t, n, r, a);
};
exports.reportProduct = function (e, t, n) {
  return (0, i.reportProduct)(e, t, n);
};
exports.sendProductToChat = function (e, t, n) {
  const {
    catalogWid: i
  } = e;
  if (!t) {
    return;
  }
  const p = t.productCollection.get(e.id);
  const f = p ? (0, d.unproxy)(p) : (0, d.unproxy)(e);
  if (!f) {
    return;
  }
  const _ = f.getProductImageCollectionHead();
  const g = _ == null ? undefined : _.mediaData;
  if (!g) {
    return;
  }
  (0, l.findChat)(i, "bizProductCatalogAction").then(function (e) {
    a.Cmd.openChatFromUnread(e).then(t => {
      if (t) {
        const t = (0, d.unproxy)((0, r.createProductInquiry)(f, i, g, n == null ? undefined : n.session.toString()));
        c.MsgCollection.add(t);
        e.composeQuotedMsg = t;
        o.ComposeBoxActions.focus(e);
        if (window.innerWidth <= u.LAYOUT_2COLUMNS_MAX_WIDTH) {
          s.DrawerManager.closeDrawerRight();
        }
      }
    });
  });
};
var r = require("./223300.js");
var i = require("./172949.js");
var a = require("./780549.js");
var o = require("./877171.js");
var s = require("./900316.js");
var l = require("./581354.js");
var u = require("./914368.js");
var c = require("./61113.js");
var d = require("./163139.js");