var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLexicalCommandListener = function (e, t, n) {
  let o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : r.COMMAND_PRIORITY_HIGH;
  const l = (0, i.default)((e, t) => {
    const o = n(e, t);
    if (o && e instanceof KeyboardEvent) {
      e.preventDefault();
      e.stopPropagation();
    }
    return o;
  });
  (0, a.useEffect)(() => {
    if (e) {
      return e.registerCommand(t, l, o);
    }
  }, [e, t, l, o]);
};
exports.useLexicalKeydownEvent = function (e, t, n, o) {
  (0, l.useListener)(e && e.getRootElement(), "keydown", o => {
    if (!(!e || t != null && o.key !== t)) {
      n(o, e);
    }
  }, {
    capture: o
  });
};
var r = require("./14544.js");
var a = require("../vendor/667294.js");
var l = require("../app/808446.js");
var i = o(require("../app/17533.js"));