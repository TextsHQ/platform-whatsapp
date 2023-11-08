var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./450232.js"));
var a = r(require("./556869.js"));
let o;
if (typeof self != "undefined") {
  o = self;
} else {
  if (require.g === undefined) {
    throw (0, a.default)("Couldn't get global object");
  }
  o = require.g;
}
var s = "AbortController" in o ? o.AbortController : class {
  constructor() {
    this.signal = new i.default();
  }
  abort() {
    const e = new Event("abort");
    this.signal.dispatchEvent(e);
  }
};
exports.default = s;