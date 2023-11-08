var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHAT_JID = function (e) {
  if (!(e instanceof o.default && (e.isUser() || e.isGroup() || e.isBroadcast() || e.isNewsletter()))) {
    throw (0, l.default)(`CHAT_JID: invalid jid type: ${e instanceof o.default ? e.toString() : "Not an instance of WID"}`);
  }
  return a.WapJid.create(e.user, e.getJidServer());
};
exports.DEVICE_JID = function (e) {
  if (!(e instanceof o.default && e.isUser())) {
    throw (0, l.default)(`DEVICE_JID: invalid jid type: ${e instanceof o.default ? e.toString() : "Not an instance of WID"}`);
  }
  if (e.isPSA()) {
    __LOG__(4, undefined, new Error(), true)`DEVICE_JID: invalid PSA jid`;
    SEND_LOGS("invalid-psa-user-jid");
    throw (0, l.default)("USER_JID: invalid PSA jid");
  }
  return a.WapJid.createJidU(e.user, u(e), e.device);
};
exports.GROUP_CALL_JID = function (e) {
  if (!(e instanceof o.default && e.isGroupCall())) {
    throw (0, l.default)(`GROUP_CALL_JID: invalid jid type: ${e instanceof o.default ? e.toString() : "Not an instance of WID"}`);
  }
  return a.WapJid.create(e.user, s.Domains.CALL);
};
exports.GROUP_JID = function (e) {
  if (!(e instanceof o.default && e.isGroup())) {
    throw (0, l.default)(`GROUP_JID: invalid jid type: ${e instanceof o.default ? e.toString() : "Not an instance of WID"}`);
  }
  return a.WapJid.create(e.user, s.Domains.G_US);
};
exports.JID = function (e) {
  if (!(e instanceof o.default)) {
    throw (0, l.default)(`JID: invalid jid type: ${e instanceof o.default ? e.toString() : "Not an instance of WID"}`);
  }
  if (e.device != null && e.device !== 0) {
    return a.WapJid.createJidU(e.user, u(e), e.device);
  }
  return a.WapJid.create(e.user, e.getJidServer());
};
exports.USER_JID = function (e) {
  if (!(e instanceof o.default && e.isUser())) {
    throw (0, l.default)(`USER_JID: invalid jid type: ${e instanceof o.default ? e.toString() : "Not an instance of WID"}`);
  }
  if (e.isPSA()) {
    __LOG__(4, undefined, new Error(), true)`USER_JID: invalid PSA jid`;
    SEND_LOGS("invalid-psa-user-jid");
    throw (0, l.default)("USER_JID: invalid PSA jid");
  }
  return a.WapJid.create(e.user, e.getJidServer());
};
exports.wapNodeToVoipXml = exports.voipXmlToWapNode = undefined;
var i = require("./716358.js");
var a = require("./718682.js");
var o = r(require("./124928.js"));
var s = require("./323389.js");
var l = r(require("./556869.js"));
function u(e) {
  if (e.server === "lid") {
    return a.DomainType.LID;
  } else {
    return a.DomainType.WHATSAPP;
  }
}
exports.voipXmlToWapNode = e => {
  if (!e || !Array.isArray(e) || e.length !== 3) {
    throw (0, l.default)("Invalid VOIP xml node");
  }
  return function e(t) {
    if (!t) {
      return null;
    }
    if (Array.isArray(t)) {
      const n = t[0];
      const r = t[1];
      let o;
      if (r) {
        Object.keys(r).map(e => {
          if (!o) {
            o = {};
          }
          let t = r[e];
          if (!t) {
            throw (0, l.default)("Attribute value is null");
          }
          if (typeof t == "object") {
            if (t.type !== a.WAP_JID_SUBTYPE.JID && !a.WAP_JID_SUBTYPE.JID_AD && !a.WAP_JID_SUBTYPE.JID_U) {
              throw (0, l.default)("Invalid attribute value type");
            }
            t = new a.WapJid(t);
          }
          o[e] = t;
        });
      }
      const s = t[2];
      let u = null;
      if (Array.isArray(s) && s.length > 0) {
        u = typeof s[0] == "number" ? new Uint8Array(s) : s.map(e).filter(e => e);
      }
      const c = u;
      return new i.WapNode(n, o, c);
    }
    return t;
  }(e);
};
exports.wapNodeToVoipXml = e => function e(t) {
  const n = [];
  n.push(t.tag);
  n.push(t.attrs || {});
  if (Array.isArray(t.content) && t.content.filter(e => !Array.isArray(e)) === 0) {
    n.push(t.content);
  } else if (Array.isArray(t.content)) {
    n.push(t.content.map(t => e(t)));
  } else if (t.content != null) {
    if (t.content instanceof Uint8Array) {
      n.push(Array.from(t.content));
    } else {
      n.push(t.content);
    }
  } else {
    n.push(null);
  }
  return n;
}(e);