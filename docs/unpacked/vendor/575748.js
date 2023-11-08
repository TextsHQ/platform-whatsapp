require("./506463.js").setupOnce();
var r = require("./48041.js");
var i = require("./62258.js").overrides;
var a = require("./201117.js");
var o = require("./777038.js");
var s = require("./286369.js");
var u = require("./378050.js");
var l = require("./909808.js");
var c = l.getGenderVariations;
var f = l.getNumberVariations;
var d = require("./833651.js");
var h = require("./441143.js");
var p = require("./440306.js");
var m = Object.prototype.hasOwnProperty;
var v = false;
var g = o.ARG;
var y = 0;
var b = 1;
var w = 0;
var _ = 2;
var x = {};
var S = function () {};
S._ = function (e, t, n) {
  if (((n == null ? undefined : n.hk) || (n == null ? undefined : n.ehk)) && v) {
    return {
      text: e,
      fbt: true,
      hashKey: n.hk
    };
  }
  var a;
  var u;
  var l = r.getTranslatedInput({
    table: e,
    args: t,
    options: n
  });
  var f = l.args;
  var d = l.table;
  var y = {};
  if (d.__vcg != null) {
    f = f || [];
    var b = r.getViewerContext().GENDER;
    var w = c(b);
    f.unshift(s.getGenderResult(w, null, b));
  }
  if (f) {
    if (typeof d != "string") {
      d = o.access(d, f, 0);
    }
    y = function (e) {
      var t = {};
      e.forEach(function (e) {
        var n = e[g.SUBSTITUTION];
        if (n) {
          for (var r in n) {
            if (m.call(n, r)) {
              if (t[r] != null) {
                h(false);
              }
              t[r] = n[r];
            }
          }
        }
      });
      return t;
    }(f);
    if (d === null) {
      h(false);
    }
  }
  if (Array.isArray(d)) {
    a = d[0];
    var _ = "1_" + (u = d[1]);
    if (i[_] != null && i[_] !== "") {
      a = i[_];
      r.onTranslationOverride(u);
    }
    r.logImpression(u);
  } else {
    if (typeof d != "string") {
      throw new Error("Table access did not result in string: " + (d === undefined ? "undefined" : JSON.stringify(d)) + ", Type: " + typeof d);
    }
    a = d;
  }
  var S = x[a];
  var E = function (e) {
    for (var t in e) {
      return true;
    }
    return false;
  }(y);
  if (S && !E) {
    return S;
  }
  var k = p(a, y);
  var O = this._wrapContent(k, a, u, n == null ? undefined : n.eo);
  if (!E) {
    x[a] = O;
  }
  return O;
};
S._enum = function (e, t) {
  return s.getEnumResult(e);
};
S._implicitParam = function (e, t, n) {
  return this._param(e, t, n);
};
S._name = function (e, t, n) {
  var r = c(n);
  var i = {
    [e]: t
  };
  return s.getGenderResult(r, i, n);
};
S._param = function (e, t, n) {
  var r = function (e, t, n) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }({}, e, t);
  if (!n) {
    return s.getSubstitution(r);
  }
  if (n[0] === y) {
    var i = n.length > 1 ? n[1] : t;
    if (typeof i != "number") {
      h(false);
    }
    var a = f(i);
    if (typeof t == "number") {
      r[e] = d.formatNumberWithThousandDelimiters(t);
    }
    return s.getNumberResult(a, r, i);
  }
  if (n[0] === b) {
    var o = n[1];
    if (o == null) {
      h(false);
    }
    return s.getGenderResult(c(o), r, o);
  }
  h(false);
};
S._plural = function (e, t, n) {
  var r = f(e);
  var i = {};
  if (t) {
    i[t] = typeof n == "number" ? d.formatNumberWithThousandDelimiters(n) : n || d.formatNumberWithThousandDelimiters(e);
  }
  return s.getNumberResult(r, i, e);
};
S._pronoun = function (e, t, n) {
  if (t === u.NOT_A_PERSON && n && n.human) {
    h(false);
  }
  var r = function (e, t) {
    switch (t) {
      case u.NOT_A_PERSON:
        if (e === w || e === _) {
          return u.NOT_A_PERSON;
        } else {
          return u.UNKNOWN_PLURAL;
        }
      case u.FEMALE_SINGULAR:
      case u.FEMALE_SINGULAR_GUESS:
        return u.FEMALE_SINGULAR;
      case u.MALE_SINGULAR:
      case u.MALE_SINGULAR_GUESS:
        return u.MALE_SINGULAR;
      case u.MIXED_UNKNOWN:
      case u.FEMALE_PLURAL:
      case u.MALE_PLURAL:
      case u.NEUTER_PLURAL:
      case u.UNKNOWN_PLURAL:
        return u.UNKNOWN_PLURAL;
      case u.NEUTER_SINGULAR:
      case u.UNKNOWN_SINGULAR:
        if (e === _) {
          return u.NOT_A_PERSON;
        } else {
          return u.UNKNOWN_PLURAL;
        }
    }
    return u.NOT_A_PERSON;
  }(e, t);
  return s.getPronounResult(r);
};
S._subject = function (e) {
  return s.getGenderResult(c(e), null, e);
};
S._wrapContent = function (e, t, n, i) {
  var a = typeof e == "string" ? [e] : e;
  var o = r.getErrorListener({
    translation: t,
    hash: n
  });
  return r.getFbtResult({
    contents: a,
    errorListener: o,
    extraOptions: i,
    patternHash: n,
    patternString: t
  });
};
S.disableJsonExportMode = function () {
  v = false;
};
S.enableJsonExportMode = function () {
  v = true;
};
S.isFbtInstance = function (e) {
  return e instanceof a;
};
module.exports = S;