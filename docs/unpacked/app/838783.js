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
    listResponseMessage: r
  } = t;
  if (r == null) {
    return;
  }
  if (r.listType === s.Message$ListResponseMessage$ListType.SINGLE_SELECT) {
    const e = (0, i.default)((0, i.default)({}, r), {}, {
      contextInfo: undefined
    });
    let t = r.title || "";
    if (r.description != null && r.description !== "") {
      t += "\n" + r.description;
    }
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: o.MSG_TYPE.LIST_RESPONSE,
        listResponse: e,
        body: (0, a.convertToTextWithoutSpecialEmojis)(t)
      }),
      contextInfo: r.contextInfo
    };
  }
};
var i = r(require("../vendor/81109.js"));
var a = require("./974637.js");
var o = require("./373070.js");
var s = require("./533494.js");