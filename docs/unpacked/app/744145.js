Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrder = function (e, t) {
  if ((0, a.commerceFeaturesDisabledBySanctions)()) {
    return Promise.reject(new r.E451());
  }
  (0, o.qplPointOrderCreate)("datasource_start");
  return (0, l.attemptWithOrderDirectConnectionRetry)(e, n => (0, i.createOrderMD)(e, t, n)).then(e => {
    (0, o.qplPointOrderCreate)("datasource_end");
    return e;
  });
};
exports.queryOrder = function (e, t, n, i, u) {
  if ((0, a.commerceFeaturesDisabledBySanctions)()) {
    return Promise.reject(new r.E451());
  }
  (0, o.qplPointOrderView)("datasource_start");
  return (0, l.attemptWithDirectConnectionRetry)(e, e => (0, s.queryOrder)(t, n, i, u, e)).then(e => {
    (0, o.qplPointOrderView)("datasource_end");
    return e;
  });
};
var r = require("./984330.js");
var i = require("./40110.js");
var a = require("./72696.js");
var o = require("./650809.js");
var s = require("./897769.js");
var l = require("./831426.js");