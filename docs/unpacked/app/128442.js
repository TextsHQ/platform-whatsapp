Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydratePremiumMessage = function (e, t) {
  const n = i.ContactCollection.get(e.id.remote);
  if (n == null) {
    return;
  }
  switch (t.type) {
    case r.SyncActionValue$MarketingMessageAction$MarketingMessagePrototypeType.PERSONALIZED:
      {
        const r = function (e, t) {
          return function (e, t) {
            const n = (0, a.getPremiumMessageName)(t);
            if (n === "") {
              return e.message.replaceAll(/ ?<<customer_name>>/g, "");
            }
            return e.message.replace(/<<customer_name>>/g, n);
          }(e, t);
        }(t, n);
        if (e.mediaData == null) {
          e.set("body", r);
        } else {
          e.set("caption", r);
        }
        break;
      }
    default:
      e.type = o.MSG_TYPE.UNKNOWN;
  }
};
var r = require("./527796.js");
var i = require("./177938.js");
var a = require("./660666.js");
var o = require("./373070.js");