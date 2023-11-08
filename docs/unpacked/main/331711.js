var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return p.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/632157.js");
var i = require("../app/402994.js");
var u = require("../app/163755.js");
var s = a(require("../app/565754.js"));
var c = require("../app/533494.js");
var d = require("../app/918602.js");
var f = require("../app/459857.js");
function p() {
  return (p = (0, o.default)(function* (e, t) {
    const n = (0, u.getChat)(e.unsafe());
    const a = e.msgContextInfo(n.id);
    const o = (0, f.getMaybeMeUser)();
    const p = (0, r.default)((0, r.default)({
      type: "list_response",
      ack: i.ACK.CLOCK,
      from: o,
      id: new s.default({
        from: o,
        to: n.id,
        id: yield s.default.newId(),
        participant: undefined,
        selfDir: "out"
      }),
      local: true,
      isNewMsg: true,
      self: "out",
      t: (0, l.unixTime)(),
      to: n.id
    }, a), {}, {
      listResponse: {
        listType: c.Message$ListResponseMessage$ListType.SINGLE_SELECT,
        title: t.title,
        description: t.description,
        singleSelectReply: {
          selectedRowId: t.rowId
        }
      },
      body: (t.title || "") + (t.description ? `\n${t.description}` : "")
    });
    return (0, d.addAndSendMsgToChat)(n, p)[1];
  })).apply(this, arguments);
}