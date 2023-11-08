var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t] = e.source.errors || [];
  switch (t == null ? undefined : t.code) {
    case 2498052:
    case 2498049:
    case 2498050:
    case 2498051:
    case 2498053:
    case 2498056:
      throw new i.ServerStatusCodeError(400, e.message);
    case 2498048:
      throw new i.E451();
    case 2498054:
      throw new i.ServerStatusCodeError(421);
  }
};
var i = require("./984330.js");
r(require("./16563.js"));