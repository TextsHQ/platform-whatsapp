var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    hoverEvent: n,
    selectable: a,
    onMessageSelect: p,
    theme: m,
    selectedMessages: h
  } = e;
  const [g, E] = (0, d.useState)(() => !(!h || !h.isSelected(t)));
  const v = (0, d.useRef)(null);
  (0, f.useListener)(h, t.id.toString(), e => {
    if (h && g !== e) {
      E(e);
    }
  });
  const _ = t.mediaData;
  const y = _.type === o.default.TYPE.IMAGE && _.renderableUrl ? e => {
    e.nativeEvent.dataTransfer.setData("text/uri-list", t.mediaData.renderableUrl);
  } : null;
  return d.default.createElement(i.MediaThumb, {
    onClick: e => {
      if (a && p) {
        return void p(t, !g);
      }
      if (_.mediaStage === u.MEDIA_DATA_STAGE.ERROR_MISSING) {
        return void s.ModalManager.open(d.default.createElement(l.default, {
          msg: t
        }));
      }
      let n;
      if (e) {
        e.stopPropagation();
      }
      const i = t.id;
      if (_.isGif || _.type === o.default.TYPE.IMAGE) {
        const e = v.current;
        n = t => i.equals(t) && e ? e : null;
      }
      r.Cmd.mediaViewerModal({
        msg: (0, c.unproxy)(t),
        getZoomNode: n
      });
    },
    hoverEvent: n,
    selectable: a,
    selected: g,
    onMessageSelect: p,
    onDragStart: y,
    msg: t,
    theme: m,
    imgRef: e => {
      v.current = e;
    },
    aspectRatio: e.aspectRatio,
    hideableSecondRow: e.hideableSecondRow
  });
};
var r = require("../app/780549.js");
var o = a(require("../app/116253.js"));
var l = a(require("./59036.js"));
var i = require("./125922.js");
var u = require("../app/172259.js");
var s = require("../app/114850.js");
var c = require("../app/163139.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var f = require("../app/808446.js");
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}