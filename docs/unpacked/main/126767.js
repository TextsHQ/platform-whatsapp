var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/632157.js");
var i = require("../app/402994.js");
var u = a(require("../app/565754.js"));
var s = require("../app/533494.js");
var c = require("../app/918602.js");
var d = require("../app/459857.js");
function f() {
  return (f = (0, o.default)(function* (e, t, n) {
    const a = (0, d.getMaybeMeUser)();
    const o = e.msgContextInfo(n.id);
    const f = (0, r.default)((0, r.default)({
      type: "buttons_response",
      ack: i.ACK.CLOCK,
      from: a,
      id: new u.default({
        from: a,
        to: n.id,
        id: yield u.default.newId(),
        participant: undefined,
        selfDir: "out"
      }),
      local: true,
      isNewMsg: true,
      self: "out",
      t: (0, l.unixTime)(),
      to: n.id
    }, o), {}, {
      buttonsResponse: {
        selectedButtonId: t.id,
        selectedDisplayText: t.displayText,
        type: s.Message$ButtonsResponseMessage$Type.DISPLAY_TEXT
      },
      body: t.displayText || ""
    });
    return (0, c.addAndSendMsgToChat)(n, f)[1];
  })).apply(this, arguments);
}