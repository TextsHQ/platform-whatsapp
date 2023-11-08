var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachMenuPopupItemCatalog = function (e) {
  let {
    chat: t
  } = e;
  const n = (0, m.default)(() => new d.ProductCatalogSession());
  return p.default.createElement(o.AttachMenuPopupItem, {
    testid: "mi-attach-product-catalog",
    action: e => {
      e.preventDefault();
      const a = n.current.toString();
      if (!(a == null)) {
        (0, c.logCatalogAttachmentButtonClick)(a);
        (0, f.qplStartCatalogView)("Attachment");
        u.ModalManager.open(p.default.createElement(i.AttachProductModalLoadable, {
          chat: t,
          sessionId: a,
          onSend: () => {
            r.AttachmentMenuLogger.logAttachmentSend(t, r.AttachmentMenuTarget.CATALOG);
          },
          onCancel: () => {
            r.AttachmentMenuLogger.logAttachmentCancel(t, r.AttachmentMenuTarget.CATALOG);
          }
        }));
        (0, s.prepareChatForMessageSending)(t);
        r.AttachmentMenuLogger.logAttachMenuClick(t, r.AttachmentMenuTarget.CATALOG);
      }
      return true;
    },
    icon: p.default.createElement("svg", {
      width: "20",
      height: "16",
      viewBox: "0 0 20 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, p.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.00007 2H17.0001C17.5501 2 18.0001 1.55 18.0001 1C18.0001 0.45 17.5501 0 17.0001 0H3.00007C2.45007 0 2.00007 0.45 2.00007 1C2.00007 1.55 2.45007 2 3.00007 2ZM18.1601 3.8C18.0701 3.34 17.6601 3 17.1801 3H2.82007C2.34007 3 1.93007 3.34 1.84007 3.8L0.840074 8.8C0.720074 9.42 1.19007 10 1.82007 10H2.00007V15C2.00007 15.55 2.45007 16 3.00007 16H11.0001C11.5501 16 12.0001 15.55 12.0001 15V10H16.0001V15C16.0001 15.55 16.4501 16 17.0001 16C17.5501 16 18.0001 15.55 18.0001 15V10H18.1801C18.8101 10 19.2801 9.42 19.1601 8.8L18.1601 3.8ZM4.00007 14H10.0001V10H4.00007V14Z",
      fill: "var(--attachment-type-catalog-color)"
    })),
    text: (0, l.CatalogText)()
  });
};
var r = require("./855637.js");
var o = require("./498236.js");
var l = require("./533388.js");
var i = require("./532702.js");
var u = require("../app/114850.js");
var s = require("./179268.js");
var c = require("../app/77548.js");
var d = require("../app/242677.js");
var f = require("./887222.js");
var p = a(require("../vendor/667294.js"));
var m = a(require("../app/637660.js"));