var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$createMentionNode = function (e, t, n) {
  return new c({
    text: i.AT_SYMBOL + e,
    name: e,
    wid: t,
    type: n
  });
};
exports.$isMentionNode = function (e) {
  return e instanceof c;
};
exports.MentionTypeEnum = exports.MentionNode = undefined;
var r = require("./14544.js");
var a = require("../app/396574.js");
var l = require("../app/175448.js");
var i = require("../app/472685.js");
var s = require("../app/669050.js");
var u = o(require("../app/556869.js"));
o(require("../app/156720.js"));
const d = require("../vendor/76672.js").Mirrored(["GROUP", "CONTACT"]);
exports.MentionTypeEnum = d;
class c extends r.TextNode {
  static clone(e) {
    return new c({
      text: e.__text,
      name: e.name,
      wid: e.wid,
      type: e.type,
      key: e.__key
    });
  }
  static getType() {
    return "mention";
  }
  static importJSON() {
    throw (0, u.default)("Deserialization of MentionNode is unsupported");
  }
  constructor(e) {
    let {
      text: t,
      name: n,
      wid: o,
      type: r,
      key: a
    } = e;
    super(t, a);
    this.name = n;
    this.wid = o;
    this.type = r;
  }
  createDOM(e) {
    const t = super.createDOM(e);
    t.className = (0, a.classnamesConvertMeToStylexPlease)(t.className, "o0rubyzf");
    t.dataset[l.APP_TEXT_TEMPLATE_DATA_ATTR] = `${i.ZWS}${this.wid}${i.ZWS}`;
    return t;
  }
  getNodeMetadata() {
    const e = (0, s.createWid)(this.wid);
    let t = i.AT_SYMBOL + e.user;
    if (this.type === d.GROUP) {
      t = i.AT_SYMBOL + e.toString();
    }
    return {
      text: t,
      parsableText: `${i.ZWS}${this.wid}${i.ZWS}`,
      type: this.type,
      name: this.name,
      wid: e
    };
  }
  exportJSON() {
    throw (0, u.default)("Serialization of MentionNode is unsupported");
  }
}
exports.MentionNode = c;