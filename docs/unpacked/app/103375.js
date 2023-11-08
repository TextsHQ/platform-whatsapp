var r = require("../vendor/595318.js");
exports.Z = function () {
  if (d(c)) {
    return true;
  }
  (0, i.promiseProps)({
    cryptoSha256: (0, o.supportsHmacSha256)(),
    cryptoAesCbc: (0, o.supportsAesCbc)()
  }).then(d);
  return false;
};
var i = require("./423660.js");
var a = require("./508247.js");
var o = require("./712284.js");
var s = r(require("./174285.js"));
var l = r(require("./462032.js"));
const u = `${a.DYN_ORIGIN}browsers.html`;
const c = {
  getRandomValues: !!self.crypto.getRandomValues,
  subtleCrypto: !(!self.crypto || !self.crypto.subtle && !self.crypto.webkitSubtle),
  localstorage: !!s.default,
  sessionstorage: !!l.default,
  url: !!self.URL,
  websocket: !!self.WebSocket,
  worker: !!self.Worker
};
function d(e) {
  const t = [];
  for (const n in e) {
    if (!e[n]) {
      t.push(n);
    }
  }
  if (t.length > 0) {
    const e = `${u}?missing=${t.join(",")}`;
    if (window.location.replace) {
      window.location.replace(e);
    } else {
      window.location.href = e;
    }
    return true;
  }
  return false;
}