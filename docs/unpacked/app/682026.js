var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "name_list";
  if (e.length === 0) {
    return "";
  }
  const r = e[0];
  if (e.length === 1) {
    if (n === "group_list") {
      if (t) {
        return a.default.t(82, {
          A: r
        });
      } else {
        return l.default.createElement(o.default, {
          id: 82,
          params: {
            A: r
          }
        });
      }
    } else {
      return r;
    }
  }
  const i = e[e.length - 1];
  if (e.length === 2) {
    return u(r, i, t, n);
  }
  if (n === "group_list") {
    const n = e.slice(0, e.length - 2);
    const r = e[e.length - 2];
    return c(n, r, i, t);
  }
  const s = e[1];
  const p = e.slice(2, e.length - 1);
  return d(r, s, p, i, t);
};
var i = r(require("../vendor/531351.js"));
var a = r(require("./932325.js"));
var o = r(require("./825158.js"));
var s = require("../vendor/548360.js");
var l = r(require("../vendor/667294.js"));
function u(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  let r = arguments.length > 3 ? arguments[3] : undefined;
  if (r === "group_list") {
    if (n) {
      return a.default.t(85, {
        A: e,
        B: t
      });
    } else {
      return l.default.createElement(o.default, {
        id: 85,
        params: {
          A: e,
          B: t
        }
      });
    }
  } else {
    return s.fbt._("{A} and {B}", [s.fbt._param("A", e), s.fbt._param("B", t)], {
      hk: "4t7xXx"
    });
  }
}
function c(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
  const s = (0, i.default)(e).reduce((e, t, n) => [r ? a.default.t(84, {
    A: t,
    B: e
  }) : l.default.createElement(o.default, {
    id: 84,
    key: `listItem_${n}`,
    params: {
      A: t,
      B: e
    }
  })], []);
  if (r) {
    return a.default.t(83, {
      A: s,
      B: t,
      C: n
    });
  } else {
    return l.default.createElement(o.default, {
      id: 83,
      params: {
        A: s,
        B: t,
        C: n
      }
    });
  }
}
function d(e, t, n, r) {
  let i = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
  const u = [s.fbt._("{A}, {B}", [s.fbt._param("A", e), s.fbt._param("B", t)], {
    hk: "1P5pjB"
  })];
  const c = n.reduce((e, t) => [s.fbt._("{A}, {B}", [s.fbt._param("A", t), s.fbt._param("B", e)], {
    hk: "4pD6x0"
  })], u);
  if (i) {
    return a.default.t(119, {
      A: c,
      B: r
    });
  } else {
    return l.default.createElement(o.default, {
      id: 119,
      params: {
        A: c,
        B: r
      }
    });
  }
}