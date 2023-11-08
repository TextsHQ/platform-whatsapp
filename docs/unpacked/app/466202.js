var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XmppParsingFailure = exports.ParsableWapNode = undefined;
var i = require("./904704.js");
var a = r(require("./415227.js"));
var o = require("./418987.js");
var s = require("./229079.js");
var l = require("./918019.js");
var u = require("./685419.js");
var c = require("./632157.js");
var d = require("./716358.js");
var p = require("./718682.js");
class f extends Error {
  constructor(e, t) {
    super(`XmppParsingFailure: ${e}: ${t}`);
    this.name = "XmppParsingFailure";
    this.parser = e;
    this.reason = t;
  }
  toString() {
    return `XmppParsingFailure: ${this.parser}: ${this.reason}`;
  }
}
exports.XmppParsingFailure = f;
class _ extends l.ParsableXmlNode {
  constructor(e, t) {
    super(e, t);
  }
  assertFromServer() {
    const e = this.attrString("from");
    if (e !== o.WA_SERVER_JID_SUFFIX) {
      this.throw(`to have "from"="s.whatsapp.net", but instead has "${e}"`);
    }
  }
  attrUserJid(e) {
    const t = this.attrString(e);
    const n = (0, o.interpretAndValidateJid)(t);
    if (n.userJid == null) {
      return this.throw(`to have "${e}"={UserJid}, but instead has "${t}"`);
    } else {
      return n.userJid;
    }
  }
  attrPhoneUserJid(e) {
    const t = this.attrString(e);
    const n = (0, o.interpretAndValidateJid)(t);
    if (n.jidType === "phoneUser") {
      return n.userJid;
    } else {
      return this.throw(`to have "${e}"={PhoneUserJid}, but instead has "${t}"`);
    }
  }
  attrLidUserJid(e) {
    const t = this.attrString(e);
    const n = (0, o.interpretAndValidateJid)(t);
    if (n.jidType === "lidUser") {
      return n.userJid;
    } else {
      return this.throw(`to have "${e}"={LidUserJid}, but instead has "${t}"`);
    }
  }
  maybeAttrUserJid(e) {
    if (this.hasAttr(e)) {
      return this.attrUserJid(e);
    } else {
      return null;
    }
  }
  maybeAttrPhoneUserJid(e) {
    if (this.hasAttr(e)) {
      return this.attrPhoneUserJid(e);
    } else {
      return null;
    }
  }
  maybeAttrLidUserJid(e) {
    if (this.hasAttr(e)) {
      return this.attrLidUserJid(e);
    } else {
      return null;
    }
  }
  attrGroupJid(e) {
    const t = this.attrString(e);
    const n = (0, o.interpretAndValidateJid)(t);
    if (n.groupJid == null) {
      return this.throw(`to have "${e}"={GroupJid}, but instead has "${t}"`);
    } else {
      return n.groupJid;
    }
  }
  maybeAttrGroupJid(e) {
    if (this.hasAttr(e)) {
      return this.attrGroupJid(e);
    } else {
      return null;
    }
  }
  attrChatJid(e) {
    const t = this.attrString(e);
    const n = (0, o.interpretAndValidateJid)(t);
    if (n.userJid != null) {
      return n.userJid;
    } else if (n.groupJid != null) {
      return n.groupJid;
    } else {
      return this.throw(`to have "${e}"={ChatJid}, but instead has "${t}"`);
    }
  }
  attrPhoneChatJid(e) {
    const t = this.attrString(e);
    const n = (0, o.interpretAndValidateJid)(t);
    if (n.jidType === "phoneUser") {
      return n.userJid;
    } else if (n.jidType === "group") {
      return n.groupJid;
    } else {
      return this.throw(`to have "${e}"={ChatJid}, but instead has "${t}"`);
    }
  }
  attrDeviceJid(e) {
    const t = this.attrString(e);
    const n = (0, o.interpretAndValidateJid)(t);
    if (n.deviceJid != null) {
      return n.deviceJid;
    } else if (n.userJid != null) {
      return (0, o.defaultDeviceJidForUser)(n.userJid);
    } else {
      return this.throw(`to have "${e}"={DeviceJid}, but instead has "${t}"`);
    }
  }
  attrPhoneDeviceJid(e) {
    const t = this.attrString(e);
    const n = (0, o.interpretAndValidateJid)(t);
    if (n.jidType === "phoneDevice") {
      return n.deviceJid;
    } else if (n.jidType === "phoneUser") {
      return (0, o.defaultPhoneDeviceJidForUser)(n.userJid);
    } else {
      return this.throw(`to have "${e}"={PhoneDeviceJid}, but instead has "${t}"`);
    }
  }
  attrLidDeviceJid(e) {
    const t = this.attrString(e);
    const n = (0, o.interpretAndValidateJid)(t);
    if (n.jidType === "lidDevice") {
      return n.deviceJid;
    } else if (n.jidType === "lidUser") {
      return (0, o.defaultLidDeviceJidForLidUserJid)(n.userJid);
    } else {
      return this.throw(`to have "${e}"={LidDeviceJid}, but instead has "${t}"`);
    }
  }
  attrDeviceId(e) {
    const t = this.attrInt(e);
    return (0, o.interpretAsDeviceId)(t);
  }
  attrFromJidChat() {
    const e = this.attrJidWithType();
    switch (e.jidType) {
      case "msgrUser":
        {
          const t = e.userJid;
          const n = (0, o.defaultDeviceJidForUser)(t);
          return {
            type: "device",
            chat: t,
            deviceJid: n,
            author: n
          };
        }
      case "interopUser":
        {
          const t = e.userJid;
          const n = (0, o.defaultDeviceJidForUser)(t);
          return {
            type: "device",
            chat: t,
            deviceJid: n,
            author: n
          };
        }
      case "phoneUser":
        {
          const t = e.userJid;
          const n = (0, o.defaultDeviceJidForUser)(t);
          return {
            type: "device",
            chat: t,
            deviceJid: n,
            author: n
          };
        }
      case "lidUser":
        {
          const t = e.userJid;
          const n = (0, o.defaultLidDeviceJidForLidUserJid)(t);
          return {
            type: "device",
            chat: t,
            deviceJid: n,
            author: n
          };
        }
      case "phoneDevice":
        {
          const t = e.deviceJid;
          return {
            type: "device",
            chat: (0, o.extractUserJid)(t),
            deviceJid: t,
            author: t
          };
        }
      case "msgrDevice":
        {
          const t = e.deviceJid;
          return {
            type: "device",
            chat: (0, o.extractUserJid)(t),
            deviceJid: t,
            author: t
          };
        }
      case "interopDevice":
        {
          const t = e.deviceJid;
          return {
            type: "device",
            chat: (0, o.extractUserJid)(t),
            deviceJid: t,
            author: t
          };
        }
      case "lidDevice":
        {
          const t = e.deviceJid;
          return {
            type: "device",
            chat: (0, o.extractUserJid)(t),
            deviceJid: t,
            author: t
          };
        }
      case "group":
        {
          const t = this.hasAttr("participant") ? this.attrDeviceJid("participant") : null;
          if (t == null) {
            return this.throw("expected to have participant JID for group");
          } else {
            return {
              type: "group",
              chat: e.groupJid,
              groupJid: e.groupJid,
              author: t
            };
          }
        }
      case "broadcast":
        {
          const t = this.hasAttr("participant") ? this.attrDeviceJid("participant") : null;
          if (t == null) {
            return this.throw("expected to have participant JID for group");
          } else {
            return {
              type: "broadcast",
              broadcastJid: e.broadcastJid,
              chat: (0, o.extractUserJid)(t),
              author: t
            };
          }
        }
      case "hosted":
        {
          const t = e.hostedDeviceJid;
          return {
            type: "device",
            chat: (0, o.extractUserJid)(t),
            deviceJid: t,
            author: t
          };
        }
      case "call":
        __LOG__(4, undefined, new Error())`ParsableWapNode: attrFromJid() is called with ${e.callJid}`;
        throw (0, a.default)("ParsableWapNode: attrFromJid() does not support CallJid");
      default:
        e.jidType;
        return this.throw(`attrFromJidChat should not be used with jid of type ${e.jidType}`);
    }
  }
  attrFromJidPhoneChat() {
    const e = this.attrJidWithType();
    switch (e.jidType) {
      case "phoneUser":
        {
          const t = e.userJid;
          const n = (0, o.defaultPhoneDeviceJidForUser)(t);
          return {
            type: "device",
            chat: t,
            deviceJid: n,
            author: n
          };
        }
      case "phoneDevice":
        {
          const t = e.deviceJid;
          return {
            type: "device",
            chat: (0, o.extractPhoneUserJid)(t),
            deviceJid: t,
            author: t
          };
        }
      case "group":
        {
          const t = this.hasAttr("participant") ? this.attrPhoneDeviceJid("participant") : null;
          if (t == null) {
            return this.throw("expected to have participant JID for group");
          } else {
            return {
              type: "group",
              chat: e.groupJid,
              groupJid: e.groupJid,
              author: t
            };
          }
        }
      case "broadcast":
        {
          const t = this.hasAttr("participant") ? this.attrPhoneDeviceJid("participant") : null;
          if (t == null) {
            return this.throw("expected to have participant JID for group");
          } else {
            return {
              type: "broadcast",
              broadcastJid: e.broadcastJid,
              chat: (0, o.extractPhoneUserJid)(t),
              author: t
            };
          }
        }
      case "call":
        __LOG__(4, undefined, new Error())`ParsableWapNode: attrFromJid() is called with ${e.callJid}`;
        throw (0, a.default)("ParsableWapNode: attrFromJid() does not support CallJid");
      default:
        e.jidType;
        return this.throw(`attrFromJidChat should not be used with jid of type ${e.jidType}`);
    }
  }
  attrFromPhoneJid() {
    if (this.attrJidWithType().jidType === "status") {
      const e = this.hasAttr("participant") ? this.attrPhoneDeviceJid("participant") : null;
      if (e == null) {
        return this.throw("to have participant for status msg");
      } else {
        return {
          type: "status",
          author: e
        };
      }
    }
    return this.attrFromJidPhoneChat();
  }
  attrFromJid() {
    const e = this.attrJidWithType();
    if (e.jidType === "status") {
      const e = this.hasAttr("participant") ? this.attrPhoneDeviceJid("participant") : null;
      if (e == null) {
        return this.throw("to have participant for status msg");
      } else {
        return {
          type: "status",
          author: e
        };
      }
    }
    if (e.jidType === "newsletter") {
      return {
        type: "newsletter",
        newsletterJid: e.newsletterJid
      };
    } else if (e.jidType === "hosted") {
      return {
        type: "hosted",
        hostedDeviceJid: e.hostedDeviceJid
      };
    } else {
      return this.attrFromJidChat();
    }
  }
  attrJidWithType() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "from";
    const t = this.attrString(e);
    const n = (0, o.interpretAndValidateJid)(t);
    if (n.jidType === "unknown") {
      return this.throw(`to have "${e}"={Jid}, but instead has "${t}"`);
    } else {
      return n;
    }
  }
  attrWapJid() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "from";
    const t = this.attrString(e);
    const n = (0, o.interpretAndValidateJid)(t);
    if (n.jidType === "unknown") {
      return p.WapJid.create(null, t);
    } else {
      return (0, d.JID)((0, o.extractFromJid)(n));
    }
  }
  attrLongInt(e) {
    const t = this.attrString(e);
    return (0, s.decimalStringToLongInt)(t);
  }
  attrTime(e) {
    return (0, c.castToUnixTime)(this.attrInt(e));
  }
  attrFutureTime(e) {
    const t = this.attrInt(e);
    return (0, c.futureUnixTime)(t);
  }
  contentString() {
    if (this.hasChildren()) {
      return this.throw("to have string content, but has children instead");
    }
    if (this.hasContent()) {
      const e = new i.Binary(this.contentBytes());
      return e.readString(e.size());
    }
    return this.throw("to have content");
  }
  decodeAsString(e) {
    return (0, d.decodeAsString)(e);
  }
  contentSerializedPubKey() {
    if (this.hasContent()) {
      return (0, u.serializeIdentity)(this.contentBytes());
    } else {
      return this.throw("to have content");
    }
  }
  createParseError(e) {
    return new f(this.name(), `expected <${this.tag()}> ${e}`);
  }
  throw(e) {
    throw this.createParseError(e);
  }
}
exports.ParsableWapNode = _;