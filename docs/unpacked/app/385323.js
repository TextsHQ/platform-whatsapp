Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTextBackgroundPath = function (e, t, n) {
  const a = n.arcSize;
  const o = [];
  const s = [];
  const l = Math.max(...e);
  const u = n.lineHeight + n.lineVerticalPadding * 2;
  e.forEach((i, a) => {
    const c = i + n.lineHorizontalPadding * 2;
    let d = 0;
    switch (t) {
      case r.TextAlignment.LEFT:
        d = 0;
        break;
      case r.TextAlignment.CENTER:
        d = (l - i) / 2;
        break;
      case r.TextAlignment.RIGHT:
        d = l - i;
    }
    const p = a * u;
    o.push({
      y: p,
      x: d
    });
    s.push({
      y: p,
      x: d + c
    });
    if (a === e.length - 1) {
      o.push({
        y: p + u,
        x: d
      });
      s.push({
        y: p + u,
        x: d + c
      });
    }
  });
  let c = [];
  for (let {
    left: e,
    points: t
  } of [{
    left: true,
    points: o
  }, {
    left: false,
    points: s
  }]) {
    let n = t;
    let r = true;
    for (; r;) {
      t = n;
      n = [];
      r = false;
      for (let i = 0; i < t.length; i++) {
        const o = t[i];
        if (i === 0) {
          n.push(o);
        } else {
          if (n.length >= 2 && n[n.length - 1].x === n[n.length - 2].x) {
            n.pop();
            r = true;
          }
          const t = n[n.length - 1];
          if (o.x !== t.x && Math.abs(o.x - t.x) < a * 2) {
            r = true;
            if (e && t.x < o.x || !e && t.x > o.x) {
              o.x = t.x;
            } else {
              t.x = o.x;
            }
          }
          n.push(o);
        }
      }
    }
    const i = [];
    for (let e = 0; e < n.length; e++) {
      const t = n[e];
      if (e === 0 || e === n.length - 1) {
        i.push(t);
        continue;
      }
      const r = n[e - 1];
      if (t.x !== r.x) {
        const e = {
          x: r.x,
          y: t.y
        };
        const n = i.length - 1;
        if (i.length >= 2 && i[n].x === e.x && i[n].x === i[n - 1].x) {
          i.pop();
        }
        i.push(e);
      }
      i.push(t);
    }
    if (!e) {
      i.reverse();
    }
    c = c.concat(i);
  }
  return function (e, t) {
    function n(t) {
      if (t === 0) {
        return e[e.length - 1];
      } else {
        return e[t - 1];
      }
    }
    function r(t) {
      if (t === e.length - 1) {
        return e[0];
      } else {
        return e[t + 1];
      }
    }
    const a = [];
    for (let o = 0; o < e.length; o++) {
      const {
        start: s,
        end: l,
        clockwise: u
      } = i(e[o], n(o), r(o), t);
      const c = o === e.length - 1 ? 0 : o + 1;
      const {
        start: d
      } = i(e[c], n(c), r(c), t);
      if (o === 0) {
        a.push(`M ${s.x},${s.y}`);
      }
      a.push(`A ${t},${t} 0 0 ${u ? 1 : 0} ${l.x},${l.y}`);
      a.push(`L ${d.x},${d.y}`);
    }
    a.push("Z");
    return a.join("\n");
  }(c, a);
};
var r = require("./490836.js");
function i(e, t, n, r) {
  const i = t.y === e.y;
  const a = {
    y: i ? e.y : t.y > e.y ? e.y + r : e.y - r,
    x: i ? t.x > e.x ? e.x + r : e.x - r : e.x
  };
  const o = e.y === n.y;
  return {
    start: a,
    end: {
      y: o ? e.y : n.y > e.y ? e.y + r : e.y - r,
      x: o ? n.x > e.x ? e.x + r : e.x - r : e.x
    },
    clockwise: i && (t.y < n.y && t.x < n.x || t.x > n.x && t.y > n.y) || !i && (t.y < n.y && t.x > n.x || t.x < n.x && t.y > n.y)
  };
}