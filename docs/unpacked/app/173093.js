var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessageToMediaWorker = function (e) {
  let t;
  return new Promise((n, r) => {
    __LOG__(2)`MediaAnalyzer:sendMessageToMediaWorker`;
    t = o || s();
    o = undefined;
    t.onmessage = e => {
      try {
        if (e.data && e.data.type === "log") {
          __LOG__(2)`(via Milan) ${e.data.msg}`;
        } else {
          n(e.data);
        }
      } catch (e) {
        r(e);
      }
    };
    t.onerror = e => {
      r((0, a.default)(`Milan.onerror = ${(e == null ? undefined : e.message) ? e.message : e}`));
    };
    t.postMessage(e);
  }).finally(() => {
    if (t) {
      t.terminate();
      o = s();
    }
  });
};
var i = r(require("./196642.js"));
var a = r(require("./556869.js"));
let o;
function s() {
  return new i.default();
}