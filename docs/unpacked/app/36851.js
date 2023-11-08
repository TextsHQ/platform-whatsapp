var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  (0, d.default)(e.subtype === "device", "Shouldn't call this function if msg is not a device notification msg");
  const n = (0, l.systemMessageActionTextStylingEnabled)();
  let r;
  let p = e.body ? i.ContactCollection.get(e.body) : null;
  const f = e.devicesAdded === 1 && e.devicesRemoved === 0;
  const _ = e.devicesAdded === 0 && e.devicesRemoved === 1;
  const g = !f && !_;
  if (p != null && (0, a.getIsMe)(p)) {
    const i = (0, s.getChat)(e.unsafe());
    if (i.isUser) {
      const a = (0, o.getFormattedName)(i.contact);
      if (t) {
        if (f) {
          r = e.isThisDeviceAdded ? c.fbt._("Your security code with {contactName} changed because there was a login on this device.", [c.fbt._param("contactName", a)], {
            hk: "3kWe83"
          }) : c.fbt._("Your security code with {contactName} changed because there was a login on a new device of yours.", [c.fbt._param("contactName", a)], {
            hk: "1Uy6Bh"
          });
        } else if (_) {
          r = c.fbt._("Your security code with {contactName} changed because there was a logout from one of your devices.", [c.fbt._param("contactName", a)], {
            hk: "4GxaO5"
          });
        } else if (g) {
          r = c.fbt._("Your security code with {contactName} changed because there was a login or logout from one or more of your devices.", [c.fbt._param("contactName", a)], {
            hk: "QWaMc"
          });
        }
      } else {
        r = n ? c.fbt._("Your security code with {contactName} changed", [c.fbt._param("contactName", a)], {
          hk: "3L6p6w"
        }) : c.fbt._("Your security code with {contactName} changed. Click to learn more", [c.fbt._param("contactName", a)], {
          hk: "1o9Lm1"
        });
      }
    } else if (i.isGroup) {
      if (t) {
        if (f) {
          r = e.isThisDeviceAdded ? c.fbt._("Your security code with all participants changed because there was a login on this device. To verify a contact's security code, open their Contact Info page and click \"Encryption\".", null, {
            hk: "1f7ZHl"
          }) : c.fbt._("Your security code with all participants changed because there was a login on a new device of yours. To verify a contact's security code, open their Contact Info page and click \"Encryption\"", null, {
            hk: "23SIhV"
          });
        } else if (_) {
          r = c.fbt._("Your security code with all participants changed because there was a logout from one of your devices. To verify a contact's security code, open their Contact Info page and click \"Encryption\".", null, {
            hk: "1nWFei"
          });
        } else if (g) {
          r = c.fbt._("Your security code with all participants changed because there was a login or logout from one or more of your devices. To verify a contact's security code, open their Contact Info page and click \"Encryption\".", null, {
            hk: "3BjNsP"
          });
        }
      } else {
        r = n ? c.fbt._("Your security code with all participants changed", null, {
          hk: "CcgyS"
        }) : c.fbt._("Your security code with all participants changed. Click to learn more", null, {
          hk: "2TU1ss"
        });
      }
    } else if (i.isBroadcast) {
      if (t) {
        if (f) {
          r = e.isThisDeviceAdded ? c.fbt._("Your security code with all recipients changed because there was a login on this device. To verify a contact's security code, open their Contact Info page and click \"Encryption\".", null, {
            hk: "2NYcSl"
          }) : c.fbt._("Your security code with all recipients changed because there was a login on a new device of yours. To verify a contact's security code, open their Contact Info page and click \"Encryption\".", null, {
            hk: "3kx0ZZ"
          });
        } else if (_) {
          r = c.fbt._("Your security code with all recipients changed because there was a logout from one of your devices. To verify a contact's security code, open their Contact Info page and click \"Encryption\".", null, {
            hk: "sSoLo"
          });
        } else if (g) {
          r = c.fbt._("Your security code with all recipients changed because there was a login or logout from one or more of your devices. To verify a contact's security code, open their Contact Info page and click \"Encryption\".", null, {
            hk: "34hVX2"
          });
        }
      } else {
        r = n ? c.fbt._("Your security code with all recipients changed", null, {
          hk: "47xclR"
        }) : c.fbt._("Your security code with all recipients changed. Click to learn more", null, {
          hk: "3O1NOU"
        });
      }
    }
  } else {
    const a = e.body;
    p = a == null ? null : i.ContactCollection.get(a);
    const s = p ? (0, o.getFormattedName)(p) : (0, u.widToFormattedUser)(a);
    if (t) {
      if (f) {
        r = c.fbt._("Your security code with {contactName} changed because they registered WhatsApp on their phone again.", [c.fbt._param("contactName", s)], {
          hk: "K3ktj"
        });
      } else if (_) {
        r = c.fbt._("Your security code with {contactName} changed because there was a logout from one of their devices.", [c.fbt._param("contactName", s)], {
          hk: "3eTydF"
        });
      } else if (g) {
        r = c.fbt._("Your security code with {contactName} changed because there was a login or logout from one or more of their devices.", [c.fbt._param("contactName", s)], {
          hk: "3CMNdZ"
        });
      }
    } else {
      r = n ? c.fbt._("Your security code with {contactName} changed", [c.fbt._param("contactName", s)], {
        hk: "3L6p6w"
      }) : c.fbt._("Your security code with {contactName} changed. Click to learn more", [c.fbt._param("contactName", s)], {
        hk: "1o9Lm1"
      });
    }
  }
  (0, d.default)(r != null, "text shouldn't be null in the end");
  return r;
};
var i = require("./177938.js");
var a = require("./660666.js");
var o = require("./714574.js");
var s = require("./163755.js");
var l = require("./108590.js");
var u = require("./931019.js");
var c = require("../vendor/548360.js");
var d = r(require("../vendor/441143.js"));