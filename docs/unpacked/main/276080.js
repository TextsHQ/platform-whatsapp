var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachMenuPopupItemOrders = function (e) {
  let {
    chat: t
  } = e;
  let n = () => {
    new m.OrderDetailsActionsSmbWamEvent({
      orderDetailsCreationAction: _.ORDER_DETAILS_CREATION_ACTION.CLICK_ORDER_FROM_ICON_MENU,
      actionCategory: String(p.default.ORDER_DETAILS_CREATION),
      orderDetailEntryPoint: String(i.default.MERCHANT_INITIATED),
      hasCatalog: (0, s.hasCatalog)(u.BusinessProfileCollection.get((0, v.getMeUser)()))
    }).commit();
    E.default.maybeShowOrderDataSharingDialog(t, () => {
      c.DrawerManager.openDrawerRight(C.default.createElement(f.default, {
        entryPoint: i.default.MERCHANT_INITIATED,
        chat: t,
        onSend: () => {
          r.AttachmentMenuLogger.logAttachmentSend(t, r.AttachmentMenuTarget.ORDER);
        },
        onCancel: () => {
          r.AttachmentMenuLogger.logAttachmentCancel(t, r.AttachmentMenuTarget.ORDER);
        }
      }), {
        transition: "slide-left"
      });
      r.AttachmentMenuLogger.logAttachMenuClick(t, r.AttachmentMenuTarget.ORDER);
    }, y.SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.NEW_ORDER);
    return true;
  };
  const a = !(0, g.isOrderExpansionEnabled)() && (0, g.isSellerCountrySameAsBuyer)(t) || (0, g.isContactCountrySupported)(t);
  if (!a) {
    n = () => {
      d.ModalManager.open(C.default.createElement(h.default, {
        chat: t
      }));
      return false;
    };
  }
  return C.default.createElement(o.AttachMenuPopupItem, {
    testid: "mi-attach-order",
    action: n,
    icon: C.default.createElement("svg", {
      opacity: a ? 1 : 0.3,
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, C.default.createElement("path", {
      d: "M20 3.29721C19.8845 3.29721 19.7689 3.34169 19.6889 3.43055L18.9867 4.13282C18.8089 4.31055 18.5333 4.31055 18.3555 4.13282L17.6533 3.43055C17.4755 3.25282 17.2 3.25282 17.0222 3.43055L16.32 4.13282C16.1422 4.31055 15.8667 4.31055 15.6889 4.13282L14.9867 3.43055C14.8089 3.25282 14.5333 3.25282 14.3555 3.43055L13.6533 4.13282C13.4755 4.31055 13.2 4.31055 13.0222 4.13282L12.32 3.43055C12.1422 3.25282 11.8667 3.25282 11.6889 3.43055L10.9867 4.13282C10.8089 4.31055 10.5333 4.31055 10.3555 4.13282L9.64447 3.42168C9.46667 3.24388 9.19114 3.24388 9.01333 3.42168L8.31114 4.13282C8.13333 4.31055 7.85781 4.31055 7.68 4.13282L6.97781 3.42168C6.8 3.24388 6.52447 3.24388 6.34667 3.42168L5.64447 4.13282C5.46667 4.31055 5.19114 4.31055 5.01333 4.13282L4.31114 3.42168C4.23114 3.34168 4.11553 3.29721 4 3.29721V20.7106C4.11553 20.7106 4.23114 20.6662 4.31114 20.5772L5.01333 19.875C5.19114 19.6972 5.46667 19.6972 5.64447 19.875L6.34667 20.5772C6.52447 20.755 6.8 20.755 6.97781 20.5772L7.68 19.875C7.85781 19.6972 8.13333 19.6972 8.31114 19.875L9.01333 20.5772C9.19114 20.755 9.46667 20.755 9.64447 20.5772L10.3467 19.875C10.5245 19.6972 10.8 19.6972 10.9778 19.875L11.68 20.5772C11.8578 20.755 12.1333 20.755 12.3111 20.5772L13.0133 19.875C13.1911 19.6972 13.4667 19.6972 13.6445 19.875L14.3467 20.5772C14.5245 20.755 14.8 20.755 14.9778 20.5772L15.68 19.875C15.8578 19.6972 16.1333 19.6972 16.3111 19.875L17.0133 20.5772C17.1911 20.755 17.4667 20.755 17.6445 20.5772L18.3467 19.875C18.5245 19.6972 18.8 19.6972 18.9778 19.875L19.68 20.5772C19.7689 20.6662 19.8845 20.7106 19.9911 20.7106V3.29721H20ZM16.4445 16.4439H7.55553C7.06667 16.4439 6.66667 16.0439 6.66667 15.555C6.66667 15.0662 7.06667 14.6662 7.55553 14.6662H16.4445C16.9333 14.6662 17.3333 15.0662 17.3333 15.555C17.3333 16.0439 16.9333 16.4439 16.4445 16.4439ZM16.4445 12.8884H7.55553C7.06667 12.8884 6.66667 12.4884 6.66667 11.9995C6.66667 11.5106 7.06667 11.1106 7.55553 11.1106H16.4445C16.9333 11.1106 17.3333 11.5106 17.3333 11.9995C17.3333 12.4884 16.9333 12.8884 16.4445 12.8884ZM16.4445 9.33283H7.55553C7.06667 9.33283 6.66667 8.93283 6.66667 8.44388C6.66667 7.95502 7.06667 7.55502 7.55553 7.55502H16.4445C16.9333 7.55502 17.3333 7.95502 17.3333 8.44388C17.3333 8.93283 16.9333 9.33283 16.4445 9.33283Z",
      fill: "var(--attachment-type-orders-color)"
    })),
    text: (0, l.OrderText)()
  });
};
var r = require("./855637.js");
var o = require("./498236.js");
var l = require("./533388.js");
var i = a(require("./120162.js"));
var u = require("../app/778945.js");
var s = require("../app/542358.js");
var c = require("../app/900316.js");
var d = require("../app/114850.js");
var f = a(require("./630582.js"));
var p = a(require("./94530.js"));
var m = require("./873994.js");
var h = a(require("./207992.js"));
var g = require("./272493.js");
var E = a(require("./444537.js"));
var v = require("../app/459857.js");
var _ = require("./76195.js");
var y = require("./767301.js");
var C = a(require("../vendor/667294.js"));