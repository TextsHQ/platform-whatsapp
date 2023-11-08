Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasReactionsInCollection = function (e) {
  if ((0, r.isFlattenedReactionsEnabled)()) {
    return e.map(e => Boolean(a.FlattenedReactionsCollection.get(e)));
  }
  return e.map(e => Boolean(o.ReactionsCollection.getSenderByMsgKey(e)));
};
var a = require("../app/590677.js");
var r = require("../app/702206.js");
var o = require("../app/762897.js");