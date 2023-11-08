var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCachePolicy = function (e, t) {
  switch (t.policy) {
    case "LOAD":
      return new i.default(e, t);
    case "NONE":
      return new a.default(e, t);
  }
  return new a.default(e, {
    id: "none",
    policy: "NONE"
  });
};
var i = r(require("./928749.js"));
var a = r(require("./917311.js"));