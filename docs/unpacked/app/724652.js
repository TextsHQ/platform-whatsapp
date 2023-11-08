var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCTWASuggestion = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./359987.js");
var s = require("./72696.js");
var l = require("./843147.js");
function u() {
  return (u = (0, i.default)(function* (e) {
    if (e.type === "banner") {
      yield c(e);
    } else {
      e.type;
      yield p(e);
    }
  })).apply(this, arguments);
}
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e) {
    if ((0, s.adsActionBannersEnabled)()) {
      if ((0, a.isInFuture)(e.expiresAt)) {
        try {
          yield (0, l.getCTWASuggestionTable)().create(e);
        } catch (e) {
          return void __LOG__(3)`handleCTWASuggestion: suggestion de-duped`;
        }
        (0, o.frontendFireAndForget)("newCTWASuggestion", {
          suggestion: e
        });
      } else {
        __LOG__(3)`handleCTWASuggestion: expired`;
      }
    }
  })).apply(this, arguments);
}
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    yield (0, l.getCTWASuggestionTable)().remove(e.id);
    (0, o.frontendFireAndForget)("revokeCTWASuggestion", {
      suggestion: e
    });
  })).apply(this, arguments);
}