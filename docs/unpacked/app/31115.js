Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreCTWASuggestions = function (e) {
  if (!(0, i.adsActionBannersEnabledOnStartup)()) {
    return Promise.resolve();
  }
  const t = (0, a.getCTWASuggestionTable)();
  return t.all().then(n => {
    const i = [];
    const a = [];
    n.forEach(e => {
      if ((0, r.isInFuture)(e.expiresAt)) {
        i.push(e);
      } else {
        a.push(e.id);
      }
    });
    e("loadedCTWASuggestions", {
      suggestions: i
    });
    if (a.length > 0) {
      return t.bulkRemove(a).catch(() => {
        __LOG__(4, undefined, new Error())`restoreCTWASuggestions: could not remove expired suggestions`;
      });
    }
  });
};
var r = require("./632157.js");
var i = require("./72696.js");
var a = require("./843147.js");