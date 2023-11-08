Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSenderAggregatedViewPublishListItem = i;
exports.mergeSenderAggregatedViewPublishMixin = function (e, t) {
  const n = function (e) {
    const {
      itemArgs: t,
      receiptId: n
    } = e;
    return (0, r.smax)("receipt", {
      id: (0, l.STANZA_ID)(n)
    }, (0, r.smax)("list", null, (0, a.REPEATED_CHILD)(i, t, 0, 255)));
  }(t);
  return (0, o.mergeStanzas)(e, n);
};
var a = require("../app/974339.js");
var r = require("../app/758616.js");
var o = require("../app/770006.js");
var l = require("../app/716358.js");
function i(e) {
  const {
    itemServerId: t
  } = e;
  return (0, r.smax)("item", {
    server_id: (0, l.INT)(t)
  });
}