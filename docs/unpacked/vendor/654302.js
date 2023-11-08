var t = Object.prototype.hasOwnProperty;
var n = typeof WeakMap == "function" ? new WeakMap() : new Map();
function r(e) {
  var t = n.get(e);
  if (t !== undefined) {
    return t;
  }
  var r = new Map();
  Object.getOwnPropertyNames(e).forEach(function (t) {
    r.set(e[t], t);
  });
  n.set(e, r);
  return r;
}
var i = Object.freeze(Object.defineProperties(Object.create(null), {
  isValid: {
    value: function (e) {
      return r(this).has(e);
    }
  },
  cast: {
    value: function (e) {
      if (this.isValid(e)) {
        return e;
      } else {
        return undefined;
      }
    }
  },
  members: {
    value: function () {
      return r(this).keys();
    }
  },
  getName: {
    value: function (e) {
      return r(this).get(e);
    }
  }
}));
function a(e) {
  var n = Object.create(i);
  for (var r in e) {
    if (t.call(e, r)) {
      Object.defineProperty(n, r, {
        value: e[r]
      });
    }
  }
  return Object.freeze(n);
}
var o = Object.freeze(Object.defineProperties(Object.create(null), {
  isValid: {
    value: function (e) {
      return typeof e == "string" && t.call(this, e);
    }
  },
  cast: {
    value: i.cast
  },
  members: {
    value: function () {
      return Object.getOwnPropertyNames(this);
    }
  },
  getName: {
    value: function (e) {
      return e;
    }
  }
}));
a.Mirrored = function (e) {
  for (var t = Object.create(o), n = 0, r = e.length; n < r; ++n) {
    Object.defineProperty(t, e[n], {
      value: e[n]
    });
  }
  return Object.freeze(t);
};
Object.freeze(a.Mirrored);
module.exports = Object.freeze(a);