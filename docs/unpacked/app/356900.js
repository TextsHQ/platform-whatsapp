function r(e, t, n) {
  let {
    format: r
  } = e;
  const i = [];
  const a = function (e) {
    let t = e;
    const n = [];
    do {
      if (t.mutator) {
        n.push(t.mutator);
      }
    } while (t.parent && (t = t.parent));
    return n;
  }(n);
  for (let e = 0; e < t.length; ++e) {
    if (r || t[e][0].compatibility) {
      if (!a.includes(t[e][0])) {
        i.push(t[e]);
      }
    }
  }
  return i;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, i) {
  const a = {
    children: []
  };
  let o = 0;
  let s = a;
  let l = 0;
  for (let a = 0; a < t.length; ++a) {
    const u = t[a];
    const [c, d] = u;
    for (; s.parent && c > (l = s.match[2]);) {
      if (o <= l) {
        s.children.push({
          type: "text",
          value: e.substring(o, l + 1)
        });
      }
      o = s.match[3] + 1;
      if (s.mutator.fragment) {
        const {
          children: e
        } = s.parent;
        e.pop();
        e.push.apply(e, s.children);
      }
      if (l !== s.match[3]) {
        s.parent.children.push({
          type: "delimiter",
          value: e.substring(l + 1, o)
        });
      }
      s = s.parent;
    }
    if (o < c) {
      s.children.push({
        type: "text",
        value: e.substring(o, c)
      });
    }
    const [p, f] = i[u[4]];
    const {
      mutates: _
    } = p;
    o = d;
    if (c !== d) {
      s.children.push({
        type: "delimiter",
        value: e.substring(c, d)
      });
    }
    const g = {
      children: [],
      match: u,
      mutator: p,
      opts: f,
      parent: s
    };
    if (_) {
      const t = e.substring(u[1], u[2] + 1);
      const a = p.mutate(t, u[5]);
      const s = r(p, i, g);
      const l = (0, require("./161494.js")._parse)(a, s);
      g.children = l.children;
      o = u[2] + 1;
    }
    s.children.push(g);
    s = g;
  }
  do {
    if (!s.match) {
      continue;
    }
    const [,, t, n] = s.match;
    if (o <= t) {
      s.children.push({
        type: "text",
        value: e.substring(o, t + 1)
      });
    }
    o = n + 1;
    if (s.mutator.fragment) {
      const {
        children: e
      } = s.parent;
      e.pop();
      e.push.apply(e, s.children);
    }
    if (t !== n) {
      s.parent.children.push({
        type: "delimiter",
        value: e.substring(t + 1, o)
      });
    }
  } while (s.parent && (s = s.parent) && s.parent);
  if (o !== e.length) {
    s.children.push({
      type: "text",
      value: e.substring(o)
    });
  }
  return a;
};