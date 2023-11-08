Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mmsLogError = function (e, t) {
  let n = !(arguments.length > 3 && arguments[3] !== undefined) || arguments[3];
  if (t instanceof i.MediaNotFoundError && n) {
    __LOG__(2)`${e}: expected error`;
  } else if (typeof t == "object" && (t == null ? undefined : t.name) === r.ABORT_ERROR) {
    __LOG__(2)`${e}: canceled`;
  } else {
    __LOG__(3)`${e}: ${t}`;
  }
};
var r = require("./898817.js");
var i = require("./263958.js");