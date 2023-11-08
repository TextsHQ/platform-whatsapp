Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  const n = a.Clock.durationStr(t.duration);
  return n || r.fbt._("Voice message", null, {
    hk: "2LTvOS"
  });
};
var a = require("../app/63014.js");
var r = require("../vendor/548360.js");