var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOpenMessageWithLinkAction = function (e) {
  if ((0, i.isMessageWithLinkNfmEnabled)()) {
    if (e.nativeFlowName !== a.default.MESSAGE_WITH_LINK || e.type !== l.MSG_TYPE.INTERACTIVE || e.interactiveType !== o.default.NATIVE_FLOW || e.interactivePayload == null) {
      return null;
    }
    const t = e.interactivePayload;
    if ((t == null ? undefined : t.buttons) && t.buttons.length > 0) {
      const {
        name: e,
        buttonParamsJson: n
      } = t.buttons[0];
      if (e === "open_webview" && n != null) {
        const e = JSON.parse(n);
        const {
          title: t,
          link: r
        } = e;
        return {
          label: t,
          onClick: () => s.default.open(r.url)
        };
      }
    }
  }
  return null;
};
var i = require("./72696.js");
var a = r(require("./753110.js"));
var o = r(require("./182394.js"));
var s = r(require("./524173.js"));
var l = require("./373070.js");