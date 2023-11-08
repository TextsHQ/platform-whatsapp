var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChatEphemeralExemptionDataFromChat = function () {
  return l.apply(this, arguments);
};
exports.persistsEphemeralDisplayedExemptions = function (e, t, n) {
  const r = e.toString();
  a.default.add(r, {
    id: r,
    ephemeralDuration: t,
    ephemeralDisplayedExemptions: n
  });
  (0, o.updateChatTable)(e, {
    ephemeralDisplayedExemptions: n
  }).catch(() => {});
};
exports.updateEphemeralDurationCache = function (e, t) {
  var n;
  const r = e.toString();
  const i = a.default.get(r);
  const o = {
    id: r,
    ephemeralDuration: t,
    ephemeralDisplayedExemptions: (n = i == null ? undefined : i.ephemeralDisplayedExemptions) !== null && n !== undefined ? n : null
  };
  a.default.add(r, o);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./38386.js"));
var o = require("./840089.js");
var s = require("./61229.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = e.toString();
    if (a.default.has(t)) {
      return a.default.get(t);
    }
    const n = yield (0, s.getChatTable)().get(e.toString(), false);
    const r = n == null ? null : {
      id: t,
      ephemeralDuration: n == null ? undefined : n.ephemeralDuration,
      ephemeralDisplayedExemptions: n == null ? undefined : n.ephemeralDisplayedExemptions
    };
    a.default.add(t, r);
    return r;
  })).apply(this, arguments);
}