var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    className: n,
    xstyle: a
  } = e;
  const [b, M, S, T, w, A, P, O, k, D, I] = (0, y.useMsgValues)(e.msg.id, [c.getId, c.getBroadcast, c.getIsSentByMe, c.getLabels, c.getStar, c.getType, c.getIsKept, c.getIsEdited, c.getIsBizBot1pResponse, c.getT, c.getIsCAPISupport]);
  const R = (0, f.useWAWebLocalizedViewCount)(e.msg.id);
  const N = (0, _.default)(b);
  const x = (0, v.useElectronCompatibleStyles)().metaTextStyles;
  const L = [];
  const j = A === d.MSG_TYPE.REVOKED;
  if ((T == null ? undefined : T.length) && (0, r.canDisplayLabel)()) {
    L.push(g.default.createElement("span", {
      key: "labels",
      className: (0, E.default)(C.spacer, C.labelsIcon)
    }));
  }
  const B = (0, u.getChat)(e.msg);
  if (R != null && (0, p.isNewsletterViewCountEnabled)(B == null || (t = B.newsletterMetadata) === null || t === undefined ? undefined : t.membershipType)) {
    L.push(g.default.createElement("span", {
      key: "viewCount",
      className: (0, E.default)([C.spacer, h.uiMargin.end12])
    }, R, g.default.createElement(s.MetaBullet, null)));
  }
  if (w && !j) {
    L.push(g.default.createElement("span", {
      key: "star",
      className: (0, E.default)(C.spacer, C.starIcon)
    }));
  }
  if (P && !j) {
    L.push(g.default.createElement("span", {
      key: "kic",
      className: (0, E.default)(C.spacer, C.kicIcon)
    }));
  }
  if (N && (0, m.isPinnedMessagesM1ReceiverEnabled)() && !j) {
    L.push(g.default.createElement("span", {
      key: "pin",
      className: (0, E.default)(C.spacer, C.pinIcon)
    }));
  }
  if (M) {
    L.push(g.default.createElement("span", {
      key: "broadcast",
      className: (0, E.default)(C.spacer, C.broadcastIcon)
    }));
  }
  if (O && !j) {
    L.push(g.default.createElement("span", {
      key: "edited",
      className: (0, E.default)(C.spacer, C.editedLabel)
    }, (0, s.getEditedLabel)()));
  }
  if ((0, o.isBizBot1pEnabled)() && k && !j) {
    L.push(g.default.createElement("span", {
      key: "bit-bot-label",
      className: (0, E.default)(C.spacer, C.editedLabel)
    }, (0, s.getBizBotLabel)()));
    L.push(g.default.createElement("span", {
      key: "biz-bot-icon",
      className: (0, E.default)(C.spacer, C.bizBotIcon)
    }));
  }
  if (S && !j) {
    L.push(g.default.createElement("span", {
      key: "checkmark",
      className: (0, E.default)(C.spacer, C.checkmarkIcon)
    }));
  }
  L.push(g.default.createElement("span", {
    key: "timestamp",
    className: (0, E.default)(C.spacer)
  }, D != null ? i.Clock.timestampStr(D) : null));
  return g.default.createElement("span", {
    className: (0, l.classnamesConvertMeToStylexPlease)(n, (0, E.default)(a))
  }, e.children, g.default.createElement("span", {
    className: (0, E.default)(C.spacerContainer, x),
    "aria-hidden": true
  }, L));
};
require("../app/174662.js");
var r = require("../app/72696.js");
var o = require("../app/354458.js");
var l = require("../app/396574.js");
var i = require("../app/63014.js");
var u = require("../app/163755.js");
var s = require("./789955.js");
var c = require("../app/787742.js");
var d = require("../app/373070.js");
var f = require("./905797.js");
var p = require("../app/73225.js");
var m = require("../app/591800.js");
var h = require("../app/676345.js");
var g = a(require("../vendor/667294.js"));
var E = a(require("../app/156720.js"));
var v = require("../app/140455.js");
var _ = a(require("./135179.js"));
var y = require("./871210.js");
const C = {
  spacerContainer: {
    fontSize: "lak21jic",
    display: "i86elurf",
    verticalAlign: "neme6l2y",
    visibility: "kojwoqec",
    height: "bbl9m3t3",
    paddingTop: "i5tg98hk",
    paddingEnd: "jfqm35v0",
    paddingBottom: "przvwfww",
    paddingStart: "bdbt56hn"
  },
  spacer: {
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5"
  },
  broadcastIcon: {
    width: "dh5rsm73"
  },
  labelsIcon: {
    width: "m0s4cjtr"
  },
  starIcon: {
    width: "dh5rsm73"
  },
  checkmarkIcon: {
    width: "qg8w82as"
  },
  kicIcon: {
    width: "dh5rsm73"
  },
  pinIcon: {
    width: "dh5rsm73"
  },
  bizBotIcon: {
    width: "bu7nb5fs"
  },
  sagaMessageMarker: {
    width: "jswlwoyz"
  },
  editedLabel: {
    fontWeight: "hnx8ox4h",
    marginEnd: "mw4yctpw",
    marginStart: "gj5xqxfh"
  }
};