Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./685639.js");
let i = [];
let a = false;
const o = new r.ShiftTimer(function () {
  i = [];
  a = false;
});
document.addEventListener("keydown", () => {
  o.forceRunNow();
}, {
  capture: true,
  passive: true
});
var s = {
  focus: function (e, t) {
    if (e && (!i.length || e !== i[i.length - 1])) {
      a = a || window.event != null;
      (function (e) {
        if (i.length === 5) {
          i.shift();
        }
        i.push(e);
      })(e);
      if (function () {
        if (i.length < 5) {
          return false;
        }
        const e = new Set();
        for (let t = 0; t < i.length; t++) {
          if (e.has(i[t])) {
            return true;
          }
          e.add(i[t]);
        }
        return false;
      }() && !a) {
        __LOG__(4, undefined, new Error(), true)`Focus loop encountered.`;
        return void SEND_LOGS("focus-loop");
      }
      o.onOrBefore(75);
      e.focus(t);
    }
  }
};
exports.default = s;