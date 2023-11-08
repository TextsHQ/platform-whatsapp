var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptAndSendGroupKeyDistributionMsg = function (e, t) {
  __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendGroupKeyDistributionMsg: sending ${e}`;
  const n = e.remote;
  return S.sendMsgQueueMap.enqueue(n.toString(), () => function () {
    return C.apply(this, arguments);
  }(e, t));
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./678002.js");
var l = require("./558763.js");
var u = require("./827467.js");
var c = require("./303754.js");
var d = require("./973776.js");
var p = require("./707065.js");
var f = require("./355813.js");
var _ = require("./747350.js");
var g = require("./226430.js");
var m = require("./917504.js");
var h = require("./848624.js");
var y = require("./918475.js");
var E = require("./608182.js");
var S = require("./739172.js");
var v = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./138706.js"));
var T = require("./76256.js");
var M = require("./459857.js");
var A = r(require("./556869.js"));
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function C() {
  return (C = (0, i.default)(function* (e, t) {
    const {
      id: n
    } = e;
    const r = e.remote;
    const i = yield (0, y.getParticipantTable)().get(r.toString());
    const s = yield (0, g.getGroupData)(r.toString(), i, false);
    t.setGroupData(s);
    const {
      skDistribList: _,
      skList: S,
      rotateKey: v
    } = yield (0, u.getGroupSenderKeyListFromParticipantRecord)(r, i);
    const b = S.concat(_);
    if (_.length === 0) {
      return void __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendGroupKeyDistributionMsg: skip sending ${e}: sender key distribution list is empty`;
    }
    yield (0, l.createOrMergeReceiptRecords)(b.map(t => ({
      msgKey: e,
      receiverId: t
    })));
    yield (0, m.ensureE2ESessions)(_);
    const C = yield (0, h.phashV2)([...b, (0, M.assertGetMe)()]);
    const [O, I] = yield P(r, _, v);
    const R = (0, o.wap)("message", {
      id: (0, o.CUSTOM_STRING)(n),
      to: (0, f.CHAT_JID)(r),
      phash: (0, o.CUSTOM_STRING)(C),
      type: "text",
      device_fanout: (0, o.CUSTOM_STRING)("false")
    }, (0, o.wap)("enc", {
      v: (0, o.CUSTOM_STRING)(d.CIPHERTEXT_VERSION.toString()),
      type: (0, o.CUSTOM_STRING)(c.CiphertextType.Skmsg),
      "decrypt-fail": (0, o.CUSTOM_STRING)("hide")
    }), O, I);
    yield (0, T.getSignalProtocolStore)().flushBufferToDiskIfNotMemOnlyMode();
    const N = yield (0, a.deprecatedSendStanzaAndReturnAck)(R, (0, p.toCoreAckTemplate)({
      id: n,
      class: "message",
      from: r,
      participant: null
    }));
    const D = E.sendMsgAckSyncParser.parse(N);
    if (D.error) {
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`encryptAndSendSenderKeyMsg: Invalid ack from server`;
      return Promise.reject((0, A.default)("[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server"));
    } else {
      yield (0, u.markHasSenderKey)(r, _);
      return D.success;
    }
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, i.default)(function* (e, t, n) {
    if (n) {
      const t = (0, M.assertGetMe)();
      yield v.Session.deleteGroupSenderKeyInfo(e, t);
    }
    const r = yield v.Session.getGroupSenderKeyInfo(e, (0, M.assertGetMe)());
    const i = yield (0, _.getKeyDistributionMsg)(null, e, t, r, true);
    let a = null;
    let l = false;
    if (i && i.length > 0) {
      a = (0, o.wap)("participants", null, i.map(e => {
        let {
          type: t,
          ciphertext: n,
          participant: r
        } = e;
        if (t === c.CiphertextType.Pkmsg) {
          l = true;
        }
        return (0, o.wap)("to", {
          jid: (0, f.DEVICE_JID)(r)
        }, (0, o.wap)("enc", {
          v: (0, o.CUSTOM_STRING)(d.CIPHERTEXT_VERSION.toString()),
          "decrypt-fail": (0, o.CUSTOM_STRING)("hide"),
          type: (0, o.CUSTOM_STRING)(t)
        }, n));
      }));
    }
    let u = null;
    if (l) {
      const e = yield (0, s.getADVEncodedIdentity)();
      u = (0, o.wap)("device-identity", null, e);
    }
    return [a, u];
  })).apply(this, arguments);
}