var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n
  } = e;
  const {
    contactMessage: r
  } = t;
  if (r == null) {
    return;
  }
  const {
    contextInfo: o,
    displayName: s,
    vcard: l
  } = r;
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: a.MSG_TYPE.VCARD,
      body: l,
      vcardFormattedName: s
    }),
    contextInfo: o
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./373070.js");