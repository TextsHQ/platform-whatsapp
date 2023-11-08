Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n, i, a, o, s, l) {
  const u = function (e, t, n, r, i) {
    const a = {};
    const o = {};
    let s;
    let l;
    let u;
    let c = n.length;
    let d = i;
    if (c === 0) {
      return {
        msgs: t,
        collection: d
      };
    }
    for (s = 0; s < c; s++) {
      l = n[s];
      o[l.id] = l;
    }
    c = t.length;
    s = 0;
    for (; s < c; s++) {
      l = t[s];
      if (l) {
        a[l.id] = l;
      }
    }
    const p = [];
    c = e.length;
    s = 0;
    for (; s < c; s++) {
      l = e[s];
      if (l && (u = a[l.id], u && p.push(u), u = o[l.id], u)) {
        if (u.recvFresh) {
          p.push(u);
          r.removeMsg(u);
          u.unset("recvFresh");
        } else {
          const e = r.getAllCMCs().find(function (e) {
            return e.get(u.id);
          });
          if (!(i && e === i)) {
            if (e) {
              e.forEach(function (e) {
                p.push(e);
                delete o[e.id];
              });
              if (e === r.msgs) {
                r.replaceMsgsCollection(i);
                d = r.msgs;
              } else {
                r.notifyMsgCollectionMerge(i, e, i);
                r.removeMsgsCollection(e);
              }
            } else {
              __LOG__(3)`models:Msg:reorder trying to merge CMC of orphaned message ${l.id}`;
              p.push(o[l.id]);
            }
          }
        }
      }
    }
    return {
      msgs: p,
      collection: d
    };
  }(e, t, n, i, o);
  r.addRecordsToChat(u.msgs, i, a, u.collection, s, l);
};
var r = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = i(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (s && (s.get || s.set)) {
        Object.defineProperty(r, o, s);
      } else {
        r[o] = e[o];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./430231.js"));
function i(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (i = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}