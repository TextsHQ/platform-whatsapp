var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHAT_OPAQUE_DATA_KEYS = undefined;
exports.deserializeChat = function (e) {
  const t = (0, i.default)({}, e);
  (function (e) {
    const t = (0, o.decodeProtobuf)(a.ChatRowOpaqueDataSpec, e.chatRowOpaqueData);
    l.forEach(n => {
      if ((t == null ? undefined : t[n]) != null) {
        e[n] = t == null ? undefined : t[n];
      }
    });
  })(t);
  return t;
};
exports.serializeChat = function (e) {
  const t = (0, i.default)({}, e);
  (function (e) {
    const t = {};
    l.forEach(n => {
      t[n] = e[n];
      delete e[n];
    });
    const n = (0, s.encodeProtobuf)(a.ChatRowOpaqueDataSpec, t);
    e.chatRowOpaqueData = n.readBuffer();
  })(t);
  return t;
};
var i = r(require("../vendor/81109.js"));
var a = require("./867311.js");
var o = require("./394629.js");
var s = require("./385914.js");
const l = ["draftMessage"];
exports.CHAT_OPAQUE_DATA_KEYS = l;