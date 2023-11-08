var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendJoinLinkedGroupRPC = function () {
  return p.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./117869.js");
var i = require("./705069.js");
var u = require("./738583.js");
var s = require("./661790.js");
var c = require("./650981.js");
var d = require("../app/590062.js");
var f = require("../app/216342.js");
function p() {
  return (p = (0, r.default)(function* (e, t) {
    const n = (0, c.makeJoinLinkedGroupRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, i.parseJoinLinkedGroupResponseGroupJoinRequestSuccess)(a, n);
    if (r.success) {
      return {
        name: "JoinLinkedGroupResponseGroupJoinRequestSuccess",
        value: r.value
      };
    }
    const p = (0, s.parseJoinLinkedGroupResponseSuccess)(a, n);
    if (p.success) {
      return {
        name: "JoinLinkedGroupResponseSuccess",
        value: p.value
      };
    }
    const m = (0, l.parseJoinLinkedGroupResponseClientError)(a, n);
    if (m.success) {
      return {
        name: "JoinLinkedGroupResponseClientError",
        value: m.value
      };
    }
    const h = (0, u.parseJoinLinkedGroupResponseServerError)(a, n);
    if (h.success) {
      return {
        name: "JoinLinkedGroupResponseServerError",
        value: h.value
      };
    }
    throw new d.SmaxParsingFailure((0, f.errorMessageRpcParsing)("JoinLinkedGroup", {
      GroupJoinRequestSuccess: r,
      Success: p,
      ClientError: m,
      ServerError: h
    }));
  })).apply(this, arguments);
}