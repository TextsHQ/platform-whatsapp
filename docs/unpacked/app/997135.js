var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverPosition = exports.PopoverAlignment = undefined;
exports.getDefaultTransformOrigin = function (e) {
  let {
    position: t,
    alignment: n
  } = e;
  let r = "left";
  let i = "top";
  if (!(t !== a.Top && t !== a.Bottom)) {
    i = t === a.Top ? "bottom" : "top";
    if (n === o.Start) {
      r = "left";
    } else if (n === o.End) {
      r = "right";
    } else if (n === o.Center) {
      r = "center";
    }
  }
  if (!(t !== a.Start && t !== a.End)) {
    r = t === a.Start ? "right" : "left";
    if (n === o.Start) {
      i = "top";
    } else if (n === o.End) {
      i = "bottom";
    } else if (n === o.Center) {
      i = "center";
    }
  }
  return `${r} ${i}`;
};
exports.getFixedElementPosition = function (e, t, n, r) {
  let f = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  const _ = e.getBoundingClientRect();
  const g = t.getBoundingClientRect();
  const m = {
    coords: {
      top: 0,
      left: 0
    },
    alignment: r,
    position: n
  };
  let h = n;
  if (i.default.isRTL()) {
    if (n === a.Start) {
      h = a.End;
    } else if (n === a.End) {
      h = a.Start;
    }
  }
  if (h === a.Top) {
    m.coords.top = s(_, g, f);
  } else if (h === a.End) {
    m.coords.left = l(_, f);
  } else if (h === a.Bottom) {
    m.coords.top = u(_, f);
  } else if (h === a.Start) {
    m.coords.left = c(_, g, f);
  }
  if (r === o.Center) {
    if (h === a.Top || h === a.Bottom) {
      m.coords.left = d(_, g);
    } else {
      m.coords.top = p(_, g);
    }
  } else if (r === o.Start) {
    if (h === a.Top || h === a.Bottom) {
      m.coords.left = _.left;
    } else {
      m.coords.top = _.top;
    }
  } else if (r === o.End) {
    if (h === a.Top || h === a.Bottom) {
      m.coords.left = _.right - g.width;
    } else {
      m.coords.top = _.bottom - g.height;
    }
  }
  if (m.coords.left < 0) {
    if (n === a.Top || n === a.Bottom) {
      m.alignment = o.Start;
      m.coords.left = _.left;
    } else {
      m.position = a.End;
      m.coords.left = l(_, f);
    }
  } else if (m.coords.left + g.width > window.innerWidth) {
    if (n === a.Top || n === a.Bottom) {
      m.alignment = o.End;
      m.coords.left = _.right;
    } else {
      m.position = a.Start;
      m.coords.left = c(_, g, f);
    }
  }
  if (m.coords.top < 0) {
    if (n === a.Start || n === a.End) {
      m.alignment = o.Start;
      m.coords.top = _.top;
    } else {
      m.position = a.Bottom;
      m.coords.top = u(_, f);
    }
  } else if (m.coords.top + g.height > window.innerHeight) {
    if (n === a.Start || n === a.End) {
      m.alignment = o.End;
      m.coords.top = _.bottom - g.height;
    } else {
      m.position = a.Top;
      m.coords.top = s(_, g, f);
    }
  }
  return m;
};
var i = r(require("./932325.js"));
const a = require("../vendor/76672.js").Mirrored(["Top", "End", "Bottom", "Start"]);
exports.PopoverPosition = a;
const o = require("../vendor/76672.js").Mirrored(["Center", "Start", "End"]);
function s(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return e.top - t.height - n;
}
function l(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return e.right + t;
}
function u(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return e.bottom + t;
}
function c(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return e.left - t.width - n;
}
function d(e, t) {
  return e.left + e.width / 2 - t.width / 2;
}
function p(e, t) {
  return e.top + e.height / 2 - t.height / 2;
}
exports.PopoverAlignment = o;