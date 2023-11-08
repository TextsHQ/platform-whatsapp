var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n, a) {
  const l = e.map(d.vcardFromContactModel);
  const s = l.length === 1 ? l[0] : (0, y.mergeVcards)(l);
  const m = `${s.displayName.toString()}.vcf`;
  const E = (0, c.createFile)([s.vcard], m, {
    type: b
  });
  const v = E.size / 1024;
  if (v > g.VCARD_AS_DOCUMENT_SIZE_KB) {
    return void function () {
      M.apply(this, arguments);
    }(E, e.length, t, n, a);
  }
  !function (e, t, n, a, l) {
    const s = a && a.msgContextInfo(t.id);
    const c = (0, _.getMaybeMeUser)();
    const d = (0, r.default)((0, r.default)({
      ack: u.ACK.CLOCK,
      from: c,
      id: new p.default({
        from: c,
        to: t.id,
        id: p.default.newId_DEPRECATED(),
        participant: t.isGroup ? c : undefined,
        selfDir: "out"
      }),
      local: true,
      isNewMsg: true,
      self: "out",
      t: (0, i.unixTime)(),
      to: t.id
    }, s), {}, {
      ctwaContext: l
    });
    const m = e.length === 1 ? (0, r.default)((0, r.default)({
      type: "vcard",
      vcardFormattedName: e[0].displayName.toString(),
      body: e[0].vcard
    }, d), (0, f.getEphemeralFields)(t)) : (0, r.default)((0, r.default)({
      type: "multi_vcard",
      vcardList: e
    }, d), (0, f.getEphemeralFields)(t));
    (0, o.default)(function* () {
      try {
        yield (0, h.addAndSendMsgToChat)(t, m)[1];
      } catch (e) {
        __LOG__(2)`Error sending contact: ${e}`;
        throw e;
      }
    })();
  }(l, t, 0, n, a);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = a(require("../app/670983.js"));
var i = require("../app/632157.js");
var u = require("../app/402994.js");
var s = a(require("../app/788998.js"));
var c = require("../app/698210.js");
var d = require("./649917.js");
var f = require("../app/700154.js");
var p = a(require("../app/565754.js"));
var m = require("../app/373070.js");
var h = require("../app/918602.js");
var g = require("../app/962260.js");
var E = require("../app/625786.js");
var v = require("../app/390737.js");
var _ = require("../app/459857.js");
var y = require("../app/105284.js");
var C = a(require("../vendor/667294.js"));
const b = "text/vcard";
function M() {
  return (M = (0, o.default)(function* (e, t, n, a, r) {
    const i = {
      file: e,
      type: m.MSG_TYPE.DOCUMENT,
      filename: e.name,
      mimetype: b,
      isVcardOverMmsDocument: true,
      documentPageCount: t
    };
    const u = new s.default({
      chatParticipantCount: n.getParticipantCount()
    });
    yield u.processAttachments([i], undefined, n);
    const {
      errorMsgs: c
    } = u.uiProcessMsgs(n);
    if (c) {
      return void v.ToastManager.open(C.default.createElement(E.Toast, {
        msg: c
      }));
    }
    const d = (0, l.default)(u.getValidMedias()[0], "collection.getValidMedias()[0]");
    (0, o.default)(function* () {
      try {
        yield d.sendToChat(n, {
          quotedMsg: a,
          ctwaContext: r
        });
      } catch (e) {
        __LOG__(2)`Error sending contact: ${e}`;
        throw e;
      }
    })();
  })).apply(this, arguments);
}