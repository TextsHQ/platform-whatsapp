var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compressPollOptions = function (e) {
  if (e == null) {
    return undefined;
  } else {
    return e.slice().sort((e, t) => e.localId - t.localId).map((e, t) => {
      let {
        localId: n,
        name: r
      } = e;
      (0, a.default)(n === t, "Unexpected local ID");
      return {
        name: r
      };
    });
  }
};
exports.expandPollOptions = function (e) {
  if (e == null) {
    return undefined;
  } else {
    return e.map((e, t) => {
      let {
        name: n
      } = e;
      return {
        name: (0, i.default)(n, "name"),
        localId: t
      };
    });
  }
};
var i = r(require("./670983.js"));
var a = r(require("../vendor/441143.js"));