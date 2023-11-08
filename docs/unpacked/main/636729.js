Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetStateHookMissingModelPropertyError = undefined;
exports.useSetModelValue = function (e, t) {
  const n = (0, a.unproxy)(e);
  const i = n.proxyName;
  if (l[i] == null) {
    l[i] = new Set([...n.__props, ...n.__session]);
  }
  if (!l[i].has(t)) {
    throw new o(e.proxyName, t);
  }
  return (0, r.useCallback)(e => {
    if (typeof e == "function") {
      const a = n.get(t);
      n.set(t, e(a));
    } else {
      n.set(t, e);
    }
  }, [t, n]);
};
var a = require("../app/163139.js");
var r = require("../vendor/667294.js");
class o extends Error {
  constructor(e, t) {
    super(`The model "${e}" has no property/sessions "${t}" defined`);
    this.name = "SetStateHookMissingModelPropertyError";
  }
}
exports.SetStateHookMissingModelPropertyError = o;
const l = {};