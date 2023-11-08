function t(e, t, n) {
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
}
var n = function () {
  function e(e, n) {
    t(this, "_contents", undefined);
    t(this, "_stringValue", undefined);
    t(this, "_isSerializing", undefined);
    t(this, "__errorListener", undefined);
    t(this, "anchor", undefined);
    t(this, "big", undefined);
    t(this, "blink", undefined);
    t(this, "bold", undefined);
    t(this, "charAt", undefined);
    t(this, "charCodeAt", undefined);
    t(this, "codePointAt", undefined);
    t(this, "contains", undefined);
    t(this, "endsWith", undefined);
    t(this, "fixed", undefined);
    t(this, "fontcolor", undefined);
    t(this, "fontsize", undefined);
    t(this, "includes", undefined);
    t(this, "indexOf", undefined);
    t(this, "italics", undefined);
    t(this, "lastIndexOf", undefined);
    t(this, "link", undefined);
    t(this, "localeCompare", undefined);
    t(this, "match", undefined);
    t(this, "normalize", undefined);
    t(this, "repeat", undefined);
    t(this, "replace", undefined);
    t(this, "search", undefined);
    t(this, "slice", undefined);
    t(this, "small", undefined);
    t(this, "split", undefined);
    t(this, "startsWith", undefined);
    t(this, "strike", undefined);
    t(this, "sub", undefined);
    t(this, "substr", undefined);
    t(this, "substring", undefined);
    t(this, "sup", undefined);
    t(this, "toLocaleLowerCase", undefined);
    t(this, "toLocaleUpperCase", undefined);
    t(this, "toLowerCase", undefined);
    t(this, "toUpperCase", undefined);
    t(this, "trim", undefined);
    t(this, "trimLeft", undefined);
    t(this, "trimRight", undefined);
    this._contents = e;
    this.__errorListener = n;
    this._isSerializing = false;
    this._stringValue = null;
  }
  var n = e.prototype;
  n.flattenToArray = function () {
    return e.flattenToArray(this._contents);
  };
  n.getContents = function () {
    return this._contents;
  };
  n.toString = function () {
    if (Object.isFrozen(this)) {
      return this._toString();
    }
    if (this._isSerializing) {
      return "<<Reentering fbt.toString() is forbidden>>";
    }
    this._isSerializing = true;
    try {
      return this._toString();
    } finally {
      this._isSerializing = false;
    }
  };
  n._toString = function () {
    if (this._stringValue != null) {
      return this._stringValue;
    }
    for (var t = "", n = this.flattenToArray(), r = 0; r < n.length; ++r) {
      var i;
      var a;
      var o = n[r];
      if (typeof o == "string" || o instanceof e) {
        t += o.toString();
      } else if (!((i = this.__errorListener) === null || i === undefined || (a = i.onStringSerializationError) === null || a === undefined)) {
        a.call(i, o);
      }
    }
    if (!Object.isFrozen(this)) {
      this._stringValue = t;
    }
    return t;
  };
  n.toJSON = function () {
    return this.toString();
  };
  e.flattenToArray = function (t) {
    for (var n = [], r = 0; r < t.length; ++r) {
      var i = t[r];
      if (Array.isArray(i)) {
        n.push.apply(n, e.flattenToArray(i));
      } else if (i instanceof e) {
        n.push.apply(n, i.flattenToArray());
      } else {
        n.push(i);
      }
    }
    return n;
  };
  return e;
}();
["anchor", "big", "blink", "bold", "charAt", "charCodeAt", "codePointAt", "contains", "endsWith", "fixed", "fontcolor", "fontsize", "includes", "indexOf", "italics", "lastIndexOf", "link", "localeCompare", "match", "normalize", "repeat", "replace", "search", "slice", "small", "split", "startsWith", "strike", "sub", "substr", "substring", "sup", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimLeft", "trimRight"].forEach(function (e) {
  n.prototype[e] = function () {
    var t;
    var n;
    if (!((t = this.__errorListener) === null || t === undefined || (n = t.onStringMethodUsed) === null || n === undefined)) {
      n.call(t, e);
    }
    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) {
      i[a] = arguments[a];
    }
    return String.prototype[e].apply(this, i);
  };
});
module.exports = n;