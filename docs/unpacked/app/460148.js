var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryServerProps = function () {
  if (c) {
    return c;
  }
  c = (0, s.default)().then(e => {
    if (e.success) {
      return e.result;
    }
    throw new o.ServerStatusCodeError(e.errorCode, e.errorText);
  }).then(function () {
    var e = (0, i.default)(function* (e) {
      const t = e.values;
      const n = e.attributes;
      if (n.protocol === 2) {
        var r;
        var i;
        var a;
        const e = yield (0, u.getServerPropsAttributes)();
        (0, u.setServerPropsAttributes)({
          version: n.version,
          hash: (r = (i = n.hash) !== null && i !== undefined ? i : e == null ? undefined : e.hash) !== null && r !== undefined ? r : "",
          refresh: (a = n.refresh) !== null && a !== undefined ? a : 86400,
          lastSyncTimeSeconds: Math.floor(Date.now() / 1000)
        });
      } else {
        (0, u.setServerPropsAttributes)({
          version: n.version,
          hash: "",
          refresh: 86400,
          lastSyncTimeSeconds: Math.floor(Date.now() / 1000)
        });
      }
      if (n.protocol === 2) {
        if (n.hash == null) {
          const e = yield (0, u.getServerProps)();
          if (e == null) {
            (0, u.setServerPropsAttributes)({
              version: n.version,
              hash: "",
              refresh: 86400,
              lastSyncTimeSeconds: 0
            });
            __LOG__(4, undefined, new Error(), true)`Server props failure: empty server props table`;
            SEND_LOGS("read-from-empty-server-props-table");
          } else {
            l.ServerProps.updateProps(e);
          }
        } else {
          (0, u.setServerProps)(t);
          l.ServerProps.updateProps(t);
        }
      } else {
        l.ServerProps.updateProps(t);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }()).catch((0, a.filteredCatch)(o.ServerStatusCodeError, () => {})).finally(() => {
    c = null;
  });
  return c;
};
var i = r(require("../vendor/348926.js"));
var a = require("./122583.js");
var o = require("./984330.js");
var s = r(require("./820973.js"));
var l = require("./937001.js");
var u = require("./757453.js");
let c;