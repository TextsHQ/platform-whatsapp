Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagePropertyType = undefined;
exports.beginningOfChat = function (e) {
  return `${e.toString()}_/`;
};
exports.craftInternalId = function (e, t) {
  const n = i(t);
  return `${e}_${n}_m`;
};
exports.craftMessageRangeIndex = function (e, t, n, a) {
  let o;
  o = n ? r.SystemMessage : t ? r.IncomingChatMessage : r.Outgoing;
  return `${e}_${o}_${a != null ? i(a) : ""}`;
};
exports.endOfChat = function (e) {
  return `${e.toString()}_g`;
};
exports.getInChatMsgId = function (e) {
  return a(e.split("_")[1]);
};
exports.getVcardWids = function (e) {
  let t = [];
  if (e.type === "vcard") {
    t = [e.body];
  } else {
    if (e.type !== "multi_vcard") {
      return;
    }
    t = e.vcardList.map(e => e.vcard);
  }
  const {
    parseVcard: r,
    vcardWids: i
  } = require("./517660.js");
  return t.filter(Boolean).reduce((e, t) => {
    const n = i(r(t));
    return e.concat(n.map(e => e.toString()));
  }, []);
};
exports.undoOrderPreservingHex = a;
const r = require("../vendor/76672.js")({
  IncomingChatMessage: "1",
  Outgoing: "2",
  SystemMessage: "3"
});
function i(e) {
  const t = e.toString(16);
  return (t.length - 1).toString(16) + t;
}
function a(e) {
  return parseInt(e.substring(1), 16);
}
exports.MessagePropertyType = r;