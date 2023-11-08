var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindPremiumMessageListeners = function () {
  if (!(0, o.isRambutanEnabled)()) {
    return;
  }
  s.MsgCollection.listenTo(s.MsgCollection, "add", (0, a.default)(d, 250, {
    leading: true,
    trailing: true
  }));
  l.PremiumMessageCollection.listenTo(l.PremiumMessageCollection, "add", e => e.hydrateMessages());
};
exports.restorePremiumMessages = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/23279.js"));
var o = require("./97858.js");
var s = require("./61113.js");
var l = require("./247531.js");
var u = require("./371629.js");
function c() {
  return (c = (0, i.default)(function* () {
    if (!(0, o.isRambutanEnabled)()) {
      return Promise.resolve();
    }
    const e = yield (0, u.getPremiumMessageTable)().all();
    l.PremiumMessageCollection.initializeFromCache(e);
  })).apply(this, arguments);
}
function d() {
  l.PremiumMessageCollection.getModelsArray().forEach(e => {
    e.hydrateMessages();
  });
}