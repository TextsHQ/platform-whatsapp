Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOnProviders = undefined;
exports.getAddOnProviderForFutureproofMsg = function (e) {
  return u.find(t => t.matchesFutureproof(e));
};
exports.getAddOnProviderForMsg = function (e) {
  return u.find(t => t.matches(e));
};
exports.getProviderForAddOnType = function (e) {
  var t;
  if ((t = u.find(t => t.type === e)) !== null && t !== undefined) {
    return t;
  } else {
    return null;
  }
};
var r = require("./324845.js");
var i = require("./278300.js");
var a = require("./407837.js");
var o = require("./146117.js");
var s = require("./456598.js");
var l = require("./164898.js");
const u = [o.pollVotesAddOnProvider, r.keepInChatAddOnProvider, s.reactionsAddOnProvider, l.reactionsEncAddOnProvider, i.messageEditAddOnProvider, a.pinInChatAddOnProvider];
exports.addOnProviders = u;