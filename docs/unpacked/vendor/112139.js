exports.__esModule = true;
exports.getActiveModality = function () {
  return l;
};
exports.getModality = function () {
  return c;
};
exports.addModalityListener = function (e) {
  d.add(e);
  return function () {
    d.delete(e);
  };
};
exports.testOnly_resetActiveModality = function () {
  f = false;
  l = h;
  c = h;
};
var r = require("./162958.js");
var i = o(require("./903806.js"));
var a = o(require("./36172.js"));
function o(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
var s;
var u;
var l = "keyboard";
var c = "keyboard";
var f = false;
var d = new Set();
var h = "keyboard";
var p = "mouse";
var m = "touch";
var v = "contextmenu";
var g = "mousedown";
var y = "mousemove";
var b = "mouseover";
var w = "mouseup";
var _ = "pointerdown";
var x = "pointermove";
var S = "pointerover";
var E = "scroll";
var k = "selectionchange";
var O = "touchcancel";
var N = "touchmove";
var T = "touchstart";
var M = {
  capture: true,
  passive: true
};
function R() {
  if (!(s == null && u == null)) {
    if (s != null) {
      c = s;
      s = null;
    }
    if (u != null) {
      l = u;
      u = null;
    }
    P();
  }
}
function A(e) {
  var t = e.type;
  if ((0, a.default)()) {
    if (t === _) {
      return void (l !== e.pointerType && (c = e.pointerType, l = e.pointerType, P()));
    }
    if (t === x || t === S) {
      return void (c !== e.pointerType && (c = e.pointerType, P()));
    }
  } else {
    if (!f) {
      if (t === g && l !== p) {
        c = p;
        l = p;
        P();
      }
      if (!(t !== y && t !== b)) {
        if (c !== p) {
          c = p;
          P();
        }
      }
    }
    if (t === T) {
      f = true;
      if (e.touches && e.touches.length > 1) {
        f = false;
      }
      return void (l !== m && (c = m, l = m, P()));
    }
    if (!(t !== v && t !== w && t !== k && t !== E && t !== O && t !== N)) {
      f = false;
    }
  }
}
function P() {
  var e = {
    activeModality: l,
    modality: c
  };
  d.forEach(function (t) {
    t(e);
  });
}
if ((0, i.default)()) {
  (0, r.addEvent)(window, "blur", function () {
    s = c;
    u = l;
    l = h;
    c = h;
    P();
    f = false;
  });
  (0, r.addEvent)(window, "focus", function () {
    R();
  });
  (0, r.addEvent)(document, "keydown", function (e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey)) {
      if (c !== h) {
        c = h;
        l = h;
        P();
      }
    }
  }, M);
  (0, r.addEvent)(document, "visibilitychange", function () {
    if (document.visibilityState !== "hidden") {
      R();
    }
  }, M);
  [_, x, S, v, g, y, b, w, E, k, O, N, T].forEach(function (e) {
    (0, r.addEvent)(document, e, A, M);
  });
}