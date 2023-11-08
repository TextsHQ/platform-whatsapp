Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshCart = function (e, t, n, u, s) {
  if ((0, r.commerceFeaturesDisabledBySanctions)()) {
    return Promise.reject(new a.E451());
  }
  if (s === true) {
    (0, o.qplPointCartView)("datasource_start");
  }
  return (0, i.attemptWithDirectConnectionRetry)(e, a => (0, l.refreshCartMD)(e, t, n, u, a)).then(e => {
    if (s === true) {
      (0, o.qplPointCartView)("datasource_end");
    }
    return e;
  });
};
exports.updateCart = function (e, t) {
  if ((0, r.commerceFeaturesDisabledBySanctions)()) {
    return Promise.reject(new a.E451());
  }
  let n = Promise.resolve();
  if (t) {
    u.QPL.markerPoint(t, "datasource_start");
  }
  if (e.itemCount > 0 || e.message != null && e.message.length > 0) {
    const t = function (e) {
      const t = e.cartItemCollection.map(e => ({
        id: e.id,
        priceAmount1000: e.priceAmount1000,
        currency: e.currency,
        name: e.name,
        quantity: e.quantity,
        imageHash: e.imageHash
      }));
      return {
        id: e.id.toString(),
        message: e.message,
        total: e.total,
        currency: e.currency,
        itemCount: e.itemCount,
        products: t
      };
    }(e);
    n = (0, s.getCartTable)().createOrReplace(t);
  } else {
    n = (0, s.getCartTable)().remove(e.id.toString());
  }
  n.then(() => t && u.QPL.markerPoint(t, "datasource_end")).catch(e => {
    if (e.errorCode === 451) {
      throw new a.E451();
    }
  });
  return n;
};
var a = require("../app/984330.js");
var r = require("../app/72696.js");
var o = require("../app/650809.js");
var l = require("./353753.js");
var i = require("../app/831426.js");
var u = require("../app/555622.js");
var s = require("../app/898508.js");