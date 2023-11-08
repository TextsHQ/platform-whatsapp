Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NackReason = undefined;
exports.createNackFromStanza = function (e, t) {
  var n;
  var s;
  var l;
  const u = e == null ? undefined : e.tag;
  const c = e == null || (n = e.attrs) === null || n === undefined ? undefined : n.id;
  const d = e == null || (s = e.attrs) === null || s === undefined || (l = s.type) === null || l === undefined ? undefined : l.toString();
  const p = o.getName(t);
  try {
    var f;
    __LOG__(2)`createNackFromStanza: class: '${u}' type: '${d}' id: '${c}' reason: '${p}'`;
    if (c != null && (e == null || (f = e.attrs) === null || f === undefined ? undefined : f.from) != null) {
      return function (e, t) {
        const {
          attrs: n
        } = e;
        if (t === o.UnrecognizedStanza) {
          return (0, r.wap)("ack", {
            class: e.tag,
            id: n.id,
            to: n.from,
            type: n.type || r.DROP_ATTR,
            participant: (0, i.isSendMessageDropNackEnabled)() && n.participant || r.DROP_ATTR,
            error: (0, r.INT)(t)
          });
        }
        switch (e.tag) {
          case "notification":
            return (0, r.wap)("ack", {
              class: "notification",
              id: n.id,
              to: n.from,
              type: n.type || r.DROP_ATTR,
              participant: n.participant || r.DROP_ATTR,
              error: (0, r.INT)(t)
            });
          case "message":
            return (0, r.wap)("ack", {
              class: "message",
              id: n.id,
              to: n.from,
              type: n.type || r.DROP_ATTR,
              participant: (0, i.isSendMessageDropNackEnabled)() && n.participant || r.DROP_ATTR,
              error: (0, r.INT)(t)
            });
          case "receipt":
            return (0, r.wap)("ack", {
              class: "receipt",
              id: n.id,
              to: n.from,
              type: n.type || r.DROP_ATTR,
              participant: (0, i.isSendMessageDropNackEnabled)() && n.participant || r.DROP_ATTR,
              error: (0, r.INT)(t)
            });
          default:
            __LOG__(3, undefined, undefined, true)`sendNack called with unsupported stanza tag: ${e.tag}`;
            SEND_LOGS("unsupported-nack");
            (0, a.postUnknownStanzaMetric)(e);
            return "NO_ACK";
        }
      }(e, t);
    }
    __LOG__(4, undefined, new Error())`createNackFromStanza: failed: 'id' or 'form' is null for class: '${u}' type: '${d}' reason: '${p}'`;
    (0, a.postUnknownStanzaMetric)(e);
  } catch (e) {
    var _;
    __LOG__(4, undefined, new Error())`createNackFromStanza: failed for class: '${u}' type: '${d}' id: '${c}' reason: '${p}'`;
    __LOG__(4, undefined, new Error(), true)`createNackFromStanza: failed with unhandled reason: ${(_ = e.message) !== null && _ !== undefined ? _ : e}`;
    SEND_LOGS("send-nack-exception");
  }
  return "NO_ACK";
};
var r = require("./716358.js");
var i = require("./790215.js");
var a = require("./311660.js");
const o = require("../vendor/76672.js")({
  ParsingError: 487,
  UnrecognizedStanza: 488,
  UnrecognizedStanzaClass: 489,
  UnrecognizedStanzaType: 490,
  InvalidProtobuf: 491,
  MissingMessageSecret: 495,
  SignalErrorOldCounter: 496,
  MessageDeletedOnPeer: 499,
  UnhandledError: 500,
  UnsupportedAdminRevoke: 550,
  UnsupportedLIDGroup: 551,
  DBOperationFailed: 552
});
exports.NackReason = o;