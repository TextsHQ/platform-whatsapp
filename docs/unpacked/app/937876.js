var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    subtype: t,
    body: n,
    recipients: r
  } = e;
  if (t === "create") {
    const e = parseInt(n, 10);
    return a.default.t(199, {
      _plural: e,
      count: e
    });
  }
  if (t === "add") {
    const e = r.length;
    return a.default.t(190, {
      _plural: e,
      name: (0, i.getFormattedNames)(r, true)
    });
  }
  if (t === "remove") {
    const e = r.length;
    return a.default.t(191, {
      _plural: e,
      name: (0, i.getFormattedNames)(r, true)
    });
  }
  return "";
};
var i = require("./436355.js");
var a = r(require("./932325.js"));