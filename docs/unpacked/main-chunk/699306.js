var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$createListNumberNode = s;
exports.$isListNumberNode = u;
exports.$transformToListNumberNode = function (e) {
  if (u(e)) {
    return e;
  }
  const t = s(e.getTextContent());
  e.replace(t);
  return t;
};
exports.ListNumberNode = undefined;
var r = require("./14544.js");
var a = require("../app/396574.js");
var l = o(require("../app/556869.js"));
o(require("../app/156720.js"));
class i extends r.TextNode {
  static create(e) {
    return new i(e);
  }
  static getType() {
    return "numbered-symbol";
  }
  static clone(e) {
    return new i(e.__text, e.__key);
  }
  static importJSON() {
    throw (0, l.default)("Deserialization of ListNumberNode is unsupported");
  }
  createDOM(e) {
    const t = super.createDOM(e);
    t.className = (0, a.classnamesConvertMeToStylexPlease)(t.className, "g33ro0j9 ag95hn57");
    return t;
  }
  exportJSON() {
    throw (0, l.default)("Serialization of ListNumberNode is unsupported");
  }
}
function s(e) {
  return new i(e);
}
function u(e) {
  return e instanceof i;
}
exports.ListNumberNode = i;