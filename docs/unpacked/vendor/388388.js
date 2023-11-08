/*!
* tabbable 5.1.5
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var r = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", "[contenteditable]:not([contenteditable=\"false\"])", "details>summary:first-of-type", "details"];
var i = r.join(",");
var a = typeof Element == "undefined" ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var o = function (e, t, n) {
  var r = Array.prototype.slice.apply(e.querySelectorAll(i));
  if (t && a.call(e, i)) {
    r.unshift(e);
  }
  return r = r.filter(n);
};
var s = function (e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  if (isNaN(t)) {
    if (function (e) {
      return e.contentEditable === "true";
    }(e)) {
      return 0;
    } else if (e.nodeName !== "AUDIO" && e.nodeName !== "VIDEO" && e.nodeName !== "DETAILS" || e.getAttribute("tabindex") !== null) {
      return e.tabIndex;
    } else {
      return 0;
    }
  } else {
    return t;
  }
};
var u = function (e, t) {
  if (e.tabIndex === t.tabIndex) {
    return e.documentOrder - t.documentOrder;
  } else {
    return e.tabIndex - t.tabIndex;
  }
};
var l = function (e) {
  return e.tagName === "INPUT";
};
var c = function (e) {
  return function (e) {
    return l(e) && e.type === "radio";
  }(e) && !function (e) {
    if (!e.name) {
      return true;
    }
    var t;
    var n = e.form || e.ownerDocument;
    var r = function (e) {
      return n.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
    };
    if (typeof window != "undefined" && window.CSS !== undefined && typeof window.CSS.escape == "function") {
      t = r(window.CSS.escape(e.name));
    } else {
      try {
        t = r(e.name);
      } catch (e) {
        console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message);
        return false;
      }
    }
    var i = function (e, t) {
      for (var n = 0; n < e.length; n++) {
        if (e[n].checked && e[n].form === t) {
          return e[n];
        }
      }
    }(t, e.form);
    return !i || i === e;
  }(e);
};
var f = function (e) {
  return !(e.disabled || function (e) {
    return l(e) && e.type === "hidden";
  }(e) || function (e) {
    if (getComputedStyle(e).visibility === "hidden") {
      return true;
    }
    var t = a.call(e, "details>summary:first-of-type") ? e.parentElement : e;
    if (a.call(t, "details:not([open]) *")) {
      return true;
    }
    for (; e;) {
      if (getComputedStyle(e).display === "none") {
        return true;
      }
      e = e.parentElement;
    }
    return false;
  }(e) || function (e) {
    return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function (e) {
      return e.tagName === "SUMMARY";
    });
  }(e));
};
var d = function (e) {
  return !(!f(e) || c(e) || s(e) < 0);
};
export var tabbable = function (e, t) {
  var n = [];
  var r = [];
  o(e, (t = t || {}).includeContainer, d).forEach(function (e, t) {
    var i = s(e);
    if (i === 0) {
      n.push(e);
    } else {
      r.push({
        documentOrder: t,
        tabIndex: i,
        node: e
      });
    }
  });
  return r.sort(u).map(function (e) {
    return e.node;
  }).concat(n);
};
export var focusable = function (e, t) {
  return o(e, (t = t || {}).includeContainer, f);
};
export var isTabbable = function (e) {
  if (!e) {
    throw new Error("No node provided");
  }
  return a.call(e, i) !== false && d(e);
};
var v = r.concat("iframe").join(",");
export var isFocusable = function (e) {
  if (!e) {
    throw new Error("No node provided");
  }
  return a.call(e, v) !== false && f(e);
};