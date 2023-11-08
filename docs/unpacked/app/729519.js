var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/402525.js"));
var a = r(require("../vendor/435161.js"));
var o = r(require("../vendor/873955.js"));
var s = r(require("./468796.js"));
exports.default = class {
  constructor(e) {
    this.rules = {};
    this.styleSheet = this.createStyleSheet(e);
  }
  createStyleSheet(e) {
    const t = e || (0, o.default)("dynamic-style-");
    let n = document.createElement("style");
    n.id = t;
    n.type = "text/css";
    if (document.head) {
      document.head.appendChild(n);
    }
    n = n.sheet;
    return n;
  }
  addRule(e, t) {
    const n = this.styleSheet.cssRules.length;
    const r = (0, a.default)(t, (e, t) => `${t}: ${e};`).join(" ");
    this.styleSheet.insertRule(`${e} { ${r} }`, n);
    this.rules[e] = this.styleSheet.cssRules[n];
    return this.rules[e];
  }
  updateRule(e, t) {
    const n = this.rules[e];
    (0, i.default)(t, (e, t) => {
      n.style[(0, s.default)(t)] = e;
    });
    return n;
  }
  setRule(e, t) {
    if (this.rules[e]) {
      return this.updateRule(e, t);
    } else {
      return this.addRule(e, t);
    }
  }
};