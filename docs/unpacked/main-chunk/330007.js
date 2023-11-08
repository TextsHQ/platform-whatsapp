var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$createListBulletNode = u;
exports.$isListBulletNode = d;
exports.$transformToListBulletNode = function (e) {
  if (d(e)) {
    return e;
  }
  const t = u(e.getTextContent());
  e.replace(t);
  return t;
};
exports.ListBulletNode = undefined;
var r = require("./14544.js");
var a = require("../app/396574.js");
var l = require("../app/175448.js");
var i = o(require("../app/556869.js"));
o(require("../app/156720.js"));
class s extends r.TextNode {
  static create(e) {
    return new s(e);
  }
  static getType() {
    return "list-bullet";
  }
  static clone(e) {
    return new s(e.__text, e.__key);
  }
  static importJSON() {
    throw (0, i.default)("Deserialization of ListBulletNode is unsupported");
  }
  createDOM(e) {
    const t = super.createDOM(e);
    t.className = (0, a.classnamesConvertMeToStylexPlease)(t.className, "o9gm23b4 g2xi8p6r lak21jic ag95hn57");
    t.textContent = "•";
    t.dataset[l.PLAIN_TEXT_DATA_ATTR] = "*";
    return t;
  }
  updateDOM(e, t) {
    t.textContent = "•";
    return false;
  }
  exportJSON() {
    throw (0, i.default)("Serialization of ListBulletNode is unsupported");
  }
}
function u(e) {
  return new s(e).setMode("token");
}
function d(e) {
  return e instanceof s;
}
exports.ListBulletNode = s;