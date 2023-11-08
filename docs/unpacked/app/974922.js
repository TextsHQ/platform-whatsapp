var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProxyStates = exports.ProxyStateFactory = exports.DuplicatedProxyProperty = undefined;
var i = r(require("../vendor/506479.js"));
var a = require("./477689.js");
const o = ["props", "session", "collections", "derived"];
class s extends (0, a.customError)("DuplicatedProxyProperty") {}
exports.DuplicatedProxyProperty = s;
const l = {};
exports.ProxyStates = l;
exports.ProxyStateFactory = (e, t, n) => {
  const {
    props: r,
    session: a,
    collections: u,
    derived: c
  } = t;
  const d = (0, i.default)(t, o);
  const p = function (e) {
    this.$ProxyState$state = e;
  };
  const f = {};
  [r, a, u, c].forEach(t => {
    if (t) {
      Object.keys(t).forEach(t => {
        f[t] = {
          get() {
            __LOG__(3)`Cannot read proxy property "${e}.${t}" created in <${this.$ProxyState$ComponentName}/>. Make sure it is in your list of concerns.`;
            return this.$ProxyState$state[t];
          },
          set(n) {
            __LOG__(4, undefined, new Error(), true)`Cannot write proxy property "${e}.${t}" created in <${this.$ProxyState$ComponentName}/>. Make sure it is in your list of concerns.`;
            SEND_LOGS("Invalid ProxyState Write");
            this.$ProxyState$state[t] = n;
          }
        };
      });
    }
  });
  f.proxyName = {
    value: e
  };
  f.mirrorMask = {
    value: n
  };
  ["set", "get", ...Object.keys(d)].forEach(e => {
    f[e] = {
      value() {
        const t = this.$ProxyState$state;
        return t[e].apply(t, arguments);
      }
    };
  });
  (p.prototype = Object.create(null, f)).constructor = p;
  if (e in l) {
    throw new s(`Duplicated proxy property "${e}".`);
  }
  l[e] = p;
};