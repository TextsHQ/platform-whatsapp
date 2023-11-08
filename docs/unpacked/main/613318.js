var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUI = function () {
  return h.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/984330.js");
var i = require("../app/147980.js");
var u = require("../app/428261.js");
var s = require("../app/641473.js");
var c = require("../app/989.js");
var d = require("../app/257845.js");
var f = require("../app/61113.js");
var p = require("../app/657694.js");
var m = a(require("../app/124928.js"));
function h() {
  return (h = (0, o.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : d.MessageOverwriteOption.NO_OVERWRITE;
    let a = !(arguments.length > 3 && arguments[3] !== undefined) || arguments[3];
    const o = {
      add: "after",
      update: n !== d.MessageOverwriteOption.NO_OVERWRITE,
      isHistory: false
    };
    const h = yield (0, s.handleForActiveMessageRange)(e, t);
    if (h.has(c.ActiveRangeHandlerAction.DropMessage)) {
      return;
    }
    let g = h.has(c.ActiveRangeHandlerAction.SkipUI);
    const E = f.MsgCollection.get(t.id);
    if (E) {
      if (!(0, i.isPlaceholderMsg)(E.type) && !(0, i.isFutureproofMsg)(E.type) || (0, i.isPlaceholderMsg)(t.type) || (0, i.isFutureproofMsg)(t.type)) {
        g = true;
      } else {
        o.update = true;
      }
    }
    try {
      if (m.default.isStatusV3(e)) {
        p.StatusV3Collection.handleUpdate(t, null, false);
      }
      if (!g) {
        yield f.MsgCollection.processMultipleMessages(e, [(0, r.default)((0, r.default)({}, t), {}, {
          recvFresh: true,
          isNewMsg: true
        })], o, "updateMessageUIAction", null, a);
      }
    } catch (n) {
      if (n instanceof l.LogoutDrop) {
        return;
      }
      if (n instanceof u.PreviousMsgNotUpdatableError) {
        return void __LOG__(3)`Msg: ${String(t.id)} chat: ${String(e)} Error: PreviousMsgNotUpdatableError`;
      }
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`Msg: ${String(t.id)} chat: ${String(e)} Error: ${n.name}, message: ${n.message}, stack: ${n.stack}`;
    }
  })).apply(this, arguments);
}