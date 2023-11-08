var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSuggestion = function () {
  return l.apply(this, arguments);
};
exports.updateTrackingCoolOffData = function () {
  return u.apply(this, arguments);
};
exports.updateTrackingNuxData = function () {
  return i.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/843147.js");
function l() {
  return (l = (0, r.default)(function* (e) {
    yield (0, o.getCTWASuggestionTable)().remove(e);
  })).apply(this, arguments);
}
function i() {
  return (i = (0, r.default)(function* (e, t) {
    yield (0, o.getCTWASuggestionTable)().merge(e, {
      nuxData: t
    });
  })).apply(this, arguments);
}
function u() {
  return (u = (0, r.default)(function* (e, t) {
    yield (0, o.getCTWASuggestionTable)().merge(e, {
      coolOffData: t
    });
  })).apply(this, arguments);
}