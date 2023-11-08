var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    displayAuthor: n,
    msg: a,
    quotedMsg: i
  } = e;
  const f = a.list;
  const p = (0, N.default)();
  if (!f) {
    return null;
  }
  const _ = {
    selectable: true,
    dirMismatch: (0, c.getRtl)(a) !== d.default.isRTL(),
    direction: (0, c.getDir)(a),
    inferLinesDirection: true
  };
  const M = (0, s.Conversation)({
    links: (0, y.getHeaderLinks)(a.unsafe()),
    phoneNumbers: (0, b.getHeaderPhoneNumbersFromMsg)(a.unsafe()),
    selectable: true,
    trusted: (0, C.isTrusted)(a.unsafe()),
    fromMe: a.id.fromMe
  });
  const S = (0, s.Conversation)({
    mentions: a.mentionMap(),
    groupMentions: a.groupMentionMap(),
    links: (0, y.getLinksFromMsg)(a.unsafe()),
    phoneNumbers: (0, b.getPhoneNumbersFromMsg)(a.unsafe()),
    selectable: true,
    trusted: (0, C.isTrusted)(a.unsafe()),
    fromMe: a.id.fromMe,
    fromChatWid: a.id.remote
  });
  const T = (0, s.Conversation)({
    links: (0, y.getFooterLinks)(a.unsafe()),
    phoneNumbers: (0, b.getFooterPhoneNumbersFromMsg)(a.unsafe()),
    selectable: true,
    trusted: (0, C.isTrusted)(a.unsafe()),
    fromMe: a.id.fromMe
  });
  const w = f.listType === A.Message$ListMessage$ListType.PRODUCT_LIST ? R.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)({
      [h.default.productListPreviewForwarded]: a.isForwarded,
      [h.default.productListPreview]: true
    })
  }, R.default.createElement(o.default, {
    msg: a,
    onClick: e => {
      if (e) {
        e.stopPropagation();
      }
      x(a, p);
    }
  })) : null;
  const P = f.listType !== A.Message$ListMessage$ListType.PRODUCT_LIST ? R.default.createElement(u.EmojiText, (0, r.default)({}, _, {
    className: h.default.title,
    text: f.title,
    formatters: M,
    ellipsify: true
  })) : null;
  const O = R.default.createElement(u.EmojiText, (0, r.default)({}, _, {
    text: f.description,
    formatters: S
  }));
  const k = R.default.createElement(u.EmojiText, (0, r.default)({}, _, {
    className: h.default.footer,
    text: a.footer,
    formatters: T
  }));
  const D = R.default.createElement("div", {
    className: h.default.meta
  }, R.default.createElement(g.Meta, {
    msg: a
  }));
  const I = R.default.createElement(m.BubbleActions, {
    items: [{
      label: (t = L(f)) !== null && t !== undefined ? t : "",
      Icon: j(f),
      onClick: e => {
        if (e) {
          e.stopPropagation();
        }
        x(a, p);
      }
    }]
  });
  let B = null;
  if (i) {
    B = R.default.createElement("div", {
      className: h.default.quotedElement
    }, i);
  }
  return R.default.createElement("div", {
    className: h.default.bubble
  }, R.default.createElement(v.default, {
    msg: a,
    displayAuthor: n,
    hideMeta: true
  }, B, w, P, R.default.createElement(E.default, {
    msg: a.unsafe(),
    "data-id": a.id
  }, O, a.footer ? k : null, D), I));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("./135009.js"));
var l = require("../app/396574.js");
var i = require("../app/900316.js");
var u = require("../app/305521.js");
var s = require("../app/675886.js");
var c = require("../app/163755.js");
var d = a(require("../app/932325.js"));
var f = a(require("./61430.js"));
var p = require("./492866.js");
var m = require("./20493.js");
var h = a(require("./817141.js"));
var g = require("./789955.js");
var E = a(require("./19805.js"));
var v = a(require("./398685.js"));
var _ = require("../app/114850.js");
var y = require("../app/44118.js");
var C = require("../app/435711.js");
var b = require("./527530.js");
var M = require("../app/932523.js");
var S = require("../app/242677.js");
var T = require("./639793.js");
var w = require("../app/466077.js");
var A = require("../app/533494.js");
var P = require("../app/316348.js");
var O = require("../app/555622.js");
var k = require("../app/618112.js");
var D = require("../app/455915.js");
var I = require("../vendor/548360.js");
var R = a(require("../vendor/667294.js"));
var N = a(require("../app/321201.js"));
function x(e, t) {
  const {
    list: {
      listType: n
    }
  } = e;
  if (n != null) {
    switch (n) {
      case A.Message$ListMessage$ListType.SINGLE_SELECT:
        _.ModalManager.open(R.default.createElement(f.default, {
          msg: e
        }));
        break;
      case A.Message$ListMessage$ListType.PRODUCT_LIST:
        !function (e, t) {
          const n = e.requiresDirectConnection;
          const a = e.isForwarded ? e.businessOwnerJid : e.from.toString({
            legacy: true
          });
          if (e.list.productListInfo == null || a == null) {
            return;
          }
          const r = !!w.ProductMessageListCollection.get(e.id);
          O.QPL.markerStart(P.QuickLogMarkerId.WHATSAPP_PLM_DETAILS_VIEW, {
            annotations: {
              bool: {
                IsCached: r
              }
            }
          });
          const o = w.ProductMessageListCollection.getOrAdd(e.id, e.list.productListInfo, n, a, e.list.title);
          if (o != null) {
            i.DrawerManager.openDrawerRight(R.default.createElement(T.ProductDetailsFlowLoadable, {
              chat: (0, c.getChat)(e.unsafe()),
              catalogOwnerJid: a,
              productListId: o.id
            }), {
              transition: "slide-left",
              uim: t,
              newDrawerContext: (0, M.buildProductCatalogContext)(new S.ProductCatalogSession(), k.BIZ_PLATFORM.ENT, D.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PRODUCT_LIST_MESSAGE)
            });
          } else {
            O.QPL.markerDrop(P.QuickLogMarkerId.WHATSAPP_PLM_DETAILS_VIEW);
          }
        }(e, t);
    }
  }
}
function L(e) {
  const {
    listType: t
  } = e;
  if (t === A.Message$ListMessage$ListType.PRODUCT_LIST) {
    return I.fbt._("View items", null, {
      hk: "44ji9D"
    });
  } else {
    return e.buttonText;
  }
}
function j(e) {
  const {
    listType: t
  } = e;
  if (t !== A.Message$ListMessage$ListType.PRODUCT_LIST) {
    return p.ListMsgIconIcon;
  }
}