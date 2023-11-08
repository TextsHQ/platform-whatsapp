Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  if ((0, a.getIsSentByMe)(t)) {
    return r.fbt._("You used pinned messages in this chat. Upgrade to the latest version of WhatsApp on this device to use pinned messages here too.", null, {
      hk: "wvVUr"
    });
  }
  return r.fbt._("Pinned messages were used in this chat. Upgrade to the latest version of WhatsApp to see and use pinned messages too.", null, {
    hk: "1Krp4J"
  });
};
var a = require("../app/787742.js");
var r = require("../vendor/548360.js");