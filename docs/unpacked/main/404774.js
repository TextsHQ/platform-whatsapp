var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  (0, g.useModelValues)(e.mediaData, ["renderableUrl"]);
  const t = (0, g.useModelValues)(e.product, ["name", "catalogWid"]);
  const n = h.default.createElement(m.XViewerIcon, null);
  const a = l.ContactCollection.get(t.catalogWid);
  let E;
  if (a) {
    const e = h.default.createElement(d.Name, {
      contact: a,
      selectable: true,
      useVerifiedName: true
    });
    const n = h.default.createElement(i.DetailImage, {
      id: a.id,
      size: 40
    });
    const l = h.default.createElement("div", {
      className: f.default.productName
    }, h.default.createElement(r.BusinessDescriptionIcon, {
      className: f.default.productNameIcon,
      displayInline: true
    }), h.default.createElement(u.EmojiText, {
      text: t.name,
      titlify: true,
      ellipsify: true
    }));
    E = h.default.createElement(o.default, {
      idle: true,
      image: n,
      primary: e,
      secondary: l,
      theme: "media"
    });
  } else {
    E = h.default.createElement(p.TextSpan, {
      theme: "large",
      className: f.default.infoName
    }, h.default.createElement(u.EmojiText, {
      text: t.name,
      titlify: true,
      ellipsify: true
    }));
  }
  return h.default.createElement("div", {
    className: f.default.mediaPanelHeader
  }, h.default.createElement("div", {
    className: f.default.info
  }, E), h.default.createElement("div", {
    className: f.default.mediaPanelTools
  }, h.default.createElement(c.MenuBar, {
    key: "media-panel-header",
    theme: "strong"
  }, h.default.createElement(c.MenuBarItem, {
    testid: "btn-close",
    icon: n,
    title: (0, s.default)("Close"),
    onClick: e.onClose
  }))));
};
var r = require("../app/672244.js");
var o = a(require("../main-chunk/170206.js"));
var l = require("../app/177938.js");
var i = require("../app/23641.js");
var u = require("../app/305521.js");
var s = a(require("../app/395767.js"));
var c = require("./526795.js");
var d = require("../app/21645.js");
var f = a(require("./203116.js"));
var p = require("../app/180519.js");
var m = require("./776770.js");
var h = a(require("../vendor/667294.js"));
var g = require("../app/655241.js");