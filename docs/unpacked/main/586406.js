var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  function t() {
    const t = o.BusinessProfileCollection.get((0, d.getMaybeMeUser)());
    (0, l.goToCommerceManager)(t);
    if (e.onCommerceManagerClick) {
      e.onCommerceManagerClick();
    }
  }
  function n() {
    c.ModalManager.close();
    if (e.onCancelClick) {
      e.onCancelClick();
    }
  }
  if ((0, r.bannedShopsEnabled)()) {
    const e = o.BusinessProfileCollection.get((0, d.getMaybeMeUser)());
    if ((0, l.isShopBanned)(e)) {
      return p.default.createElement(u.default, {
        type: s.ModalTheme.ColumnButtons,
        title: f.fbt._("Shop disabled", null, {
          hk: "3ByeHz"
        }),
        onCancel: n,
        actions: p.default.createElement(i.default, {
          type: "primary",
          onClick: t
        }, f.fbt._("Commerce Manager", null, {
          hk: "2ZKedl"
        }))
      }, f.fbt._("This shop has been disabled for not complying with our policies. Learn more in Commerce Manager.", null, {
        hk: "3brNh"
      }));
    }
  }
  return p.default.createElement(u.default, {
    type: s.ModalTheme.ColumnButtons,
    title: f.fbt._("Manage shop on Commerce Manager", null, {
      hk: "1S8OsB"
    }),
    onCancel: n,
    actions: p.default.createElement(p.default.Fragment, null, p.default.createElement(i.default, {
      type: "primary",
      onClick: function () {
        const t = o.BusinessProfileCollection.get((0, d.getMaybeMeUser)());
        (0, l.goToShop)(t);
        if (e.onViewShopClick) {
          e.onViewShopClick();
        }
      }
    }, f.fbt._("View Shop", null, {
      hk: "KjKGP"
    })), p.default.createElement(i.default, {
      type: "primary",
      onClick: t
    }, f.fbt._("Commerce Manager", null, {
      hk: "2ZKedl"
    })))
  }, f.fbt._("Go to Commerce Manager to update your shop.", null, {
    hk: "9WKnc"
  }));
};
var r = require("../app/72696.js");
var o = require("../app/778945.js");
var l = require("../app/542358.js");
var i = a(require("../app/692629.js"));
var u = a(require("./844194.js"));
var s = require("../app/118612.js");
var c = require("../app/114850.js");
var d = require("../app/459857.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));