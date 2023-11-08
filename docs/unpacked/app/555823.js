var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = {
  initialize: true
};
exports.initialize = function () {
  return l.apply(this, arguments);
};
var a = r(require("../vendor/348926.js"));
var o = require("./535157.js");
Object.keys(o).forEach(function (e) {
  if (e !== "default" && e !== "__esModule") {
    if (!(Object.prototype.hasOwnProperty.call(i, e) || e in exports && exports[e] === o[e])) {
      Object.defineProperty(exports, e, {
        enumerable: true,
        get: function () {
          return o[e];
        }
      });
    }
  }
});
var s = require("./409847.js");
function l() {
  return (l = (0, a.default)(function* (e) {
    yield (0, o.initializeWithoutGKs)(e);
    yield s.userPrefsIdb.init();
  })).apply(this, arguments);
}