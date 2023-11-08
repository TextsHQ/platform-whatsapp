var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeProfilePicThumb = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./12643.js");
var o = require("./446474.js");
function s() {
  return (s = (0, i.default)(function* (e, t) {
    const n = [o.ProfilePicThumbCollection.imageChanged(e, t)];
    if (e.isLid()) {
      const r = (0, a.getPhoneNumber)(e);
      if (r != null) {
        n.push(o.ProfilePicThumbCollection.imageChanged(r, t));
      }
    }
    yield Promise.all(n);
  })).apply(this, arguments);
}