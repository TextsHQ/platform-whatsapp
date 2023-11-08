var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./731648.js"));
var o = require("./848636.js");
var l = new class {
  constructor() {
    document.addEventListener("keydown", e => {
      const t = (0, o.getAction)(e);
      if (t) {
        (0, r.default)(t);
      }
    });
  }
  trigger() {}
  menuBatchRenderWith() {}
}();
exports.default = l;