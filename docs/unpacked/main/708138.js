var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebugParticipantsListMenu = function (e) {
  let {
    participants: t
  } = e;
  return s.default.createElement(i.DropdownItem, {
    addSpacing: true,
    testid: "mi-show-participants",
    action: () => u.ModalManager.open(s.default.createElement(p, {
      participants: t
    }))
  }, s.default.createElement(l.DevOnlyBadge, {
    label: "Show participants"
  }));
};
var r = require("../app/12643.js");
var o = require("../app/103440.js");
var l = require("./807078.js");
var i = require("../app/675085.js");
var u = require("../app/114850.js");
var s = a(require("../vendor/667294.js"));
var c = a(require("../app/156720.js"));
const d = {
  height: "lffynu9d",
  overflowX: "ormcsqwh",
  overflowY: "rpvcun8f"
};
const f = {
  display: "l7jjieqr",
  width: "hp5m5kpu"
};
function p(e) {
  let {
    participants: t
  } = e;
  const n = t.map(e => e.id);
  const a = n.filter(e => !e.isLid());
  const l = n.filter(e => e.isLid());
  return s.default.createElement(o.ConfirmPopup, {
    title: "Debug Participants List",
    okText: "Close",
    onOK: () => u.ModalManager.close()
  }, s.default.createElement("div", {
    className: (0, c.default)(d)
  }, s.default.createElement("h2", null, "Phone JIDs (", a.length, ")"), a.map((e, t) => s.default.createElement("div", {
    key: t
  }, e.toString())), s.default.createElement("br", null), s.default.createElement("h2", null, "LID JIDs (", l.length, ")"), l.map((e, t) => s.default.createElement("div", {
    key: t
  }, function (e) {
    var t;
    var n;
    const a = (t = (n = (0, r.getPhoneNumber)(e)) === null || n === undefined ? undefined : n.toString()) !== null && t !== undefined ? t : "N/A";
    return s.default.createElement(s.default.Fragment, null, s.default.createElement("span", {
      className: (0, c.default)(f)
    }, e.toString()), s.default.createElement("span", null, "phone: ", a));
  }(e)))));
}