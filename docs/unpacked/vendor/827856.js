/*! @license DOMPurify 2.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.1/LICENSE */
module.exports = function () {
  "use strict";

  function e(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) {
        n[t] = e[t];
      }
      return n;
    }
    return Array.from(e);
  }
  var t = Object.hasOwnProperty;
  var n = Object.setPrototypeOf;
  var r = Object.isFrozen;
  var i = Object.getPrototypeOf;
  var a = Object.getOwnPropertyDescriptor;
  var o = Object.freeze;
  var s = Object.seal;
  var u = Object.create;
  var l = typeof Reflect != "undefined" && Reflect;
  var c = l.apply;
  var f = l.construct;
  if (!c) {
    c = function (e, t, n) {
      return e.apply(t, n);
    };
  }
  if (!o) {
    o = function (e) {
      return e;
    };
  }
  if (!s) {
    s = function (e) {
      return e;
    };
  }
  if (!f) {
    f = function (t, n) {
      return new (Function.prototype.bind.apply(t, [null].concat(e(n))))();
    };
  }
  var d = x(Array.prototype.forEach);
  var h = x(Array.prototype.pop);
  var p = x(Array.prototype.push);
  var m = x(String.prototype.toLowerCase);
  var v = x(String.prototype.match);
  var g = x(String.prototype.replace);
  var y = x(String.prototype.indexOf);
  var b = x(String.prototype.trim);
  var w = x(RegExp.prototype.test);
  var _ = S(TypeError);
  function x(e) {
    return function (t) {
      for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
        r[i - 1] = arguments[i];
      }
      return c(e, t, r);
    };
  }
  function S(e) {
    return function () {
      for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }
      return f(e, n);
    };
  }
  function E(e, t) {
    if (n) {
      n(e, null);
    }
    for (var i = t.length; i--;) {
      var a = t[i];
      if (typeof a == "string") {
        var o = m(a);
        if (o !== a) {
          if (!r(t)) {
            t[i] = o;
          }
          a = o;
        }
      }
      e[a] = true;
    }
    return e;
  }
  function k(e) {
    var n = u(null);
    var r = undefined;
    for (r in e) {
      if (c(t, e, [r])) {
        n[r] = e[r];
      }
    }
    return n;
  }
  function O(e, t) {
    for (; e !== null;) {
      var n = a(e, t);
      if (n) {
        if (n.get) {
          return x(n.get);
        }
        if (typeof n.value == "function") {
          return x(n.value);
        }
      }
      e = i(e);
    }
    function r(e) {
      console.warn("fallback value for", e);
      return null;
    }
    return r;
  }
  var N = o(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
  var T = o(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
  var M = o(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
  var R = o(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
  var A = o(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
  var P = o(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
  var C = o(["#text"]);
  var D = o(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
  var U = o(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
  var I = o(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
  var L = o(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
  var j = s(/\{\{[\s\S]*|[\s\S]*\}\}/gm);
  var F = s(/<%[\s\S]*|[\s\S]*%>/gm);
  var z = s(/^data-[\-\w.\u00B7-\uFFFF]/);
  var B = s(/^aria-[\-\w]+$/);
  var V = s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
  var Y = s(/^(?:\w+script|data):/i);
  var H = s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
  var $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  };
  function W(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) {
        n[t] = e[t];
      }
      return n;
    }
    return Array.from(e);
  }
  var G = function () {
    if (typeof window == "undefined") {
      return null;
    } else {
      return window;
    }
  };
  var q = function (e, t) {
    if ((e === undefined ? "undefined" : $(e)) !== "object" || typeof e.createPolicy != "function") {
      return null;
    }
    var n = null;
    var r = "data-tt-policy-suffix";
    if (t.currentScript && t.currentScript.hasAttribute(r)) {
      n = t.currentScript.getAttribute(r);
    }
    var i = "dompurify" + (n ? "#" + n : "");
    try {
      return e.createPolicy(i, {
        createHTML: function (e) {
          return e;
        }
      });
    } catch (e) {
      console.warn("TrustedTypes policy " + i + " could not be created.");
      return null;
    }
  };
  function K() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : G();
    var t = function (e) {
      return K(e);
    };
    t.version = "2.3.1";
    t.removed = [];
    if (!e || !e.document || e.document.nodeType !== 9) {
      t.isSupported = false;
      return t;
    }
    var n = e.document;
    var r = e.document;
    var i = e.DocumentFragment;
    var a = e.HTMLTemplateElement;
    var s = e.Node;
    var u = e.Element;
    var l = e.NodeFilter;
    var c = e.NamedNodeMap;
    var f = c === undefined ? e.NamedNodeMap || e.MozNamedAttrMap : c;
    var x = e.Text;
    var S = e.Comment;
    var X = e.DOMParser;
    var Z = e.trustedTypes;
    var Q = u.prototype;
    var J = O(Q, "cloneNode");
    var ee = O(Q, "nextSibling");
    var te = O(Q, "childNodes");
    var ne = O(Q, "parentNode");
    if (typeof a == "function") {
      var re = r.createElement("template");
      if (re.content && re.content.ownerDocument) {
        r = re.content.ownerDocument;
      }
    }
    var ie = q(Z, n);
    var ae = ie && Le ? ie.createHTML("") : "";
    var oe = r;
    var se = oe.implementation;
    var ue = oe.createNodeIterator;
    var le = oe.createDocumentFragment;
    var ce = oe.getElementsByTagName;
    var fe = n.importNode;
    var de = {};
    try {
      de = k(r).documentMode ? r.documentMode : {};
    } catch (e) {}
    var he = {};
    t.isSupported = typeof ne == "function" && se && se.createHTMLDocument !== undefined && de !== 9;
    var pe = j;
    var me = F;
    var ve = z;
    var ge = B;
    var ye = Y;
    var be = H;
    var we = V;
    var _e = null;
    var xe = E({}, [].concat(W(N), W(T), W(M), W(A), W(C)));
    var Se = null;
    var Ee = E({}, [].concat(W(D), W(U), W(I), W(L)));
    var ke = null;
    var Oe = null;
    var Ne = true;
    var Te = true;
    var Me = false;
    var Re = false;
    var Ae = false;
    var Pe = false;
    var Ce = false;
    var De = false;
    var Ue = false;
    var Ie = true;
    var Le = false;
    var je = true;
    var Fe = true;
    var ze = false;
    var Be = {};
    var Ve = null;
    var Ye = E({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    var He = null;
    var $e = E({}, ["audio", "video", "img", "source", "image", "track"]);
    var We = null;
    var Ge = E({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
    var qe = "http://www.w3.org/1998/Math/MathML";
    var Ke = "http://www.w3.org/2000/svg";
    var Xe = "http://www.w3.org/1999/xhtml";
    var Ze = Xe;
    var Qe = false;
    var Je = null;
    var et = r.createElement("form");
    var tt = function (e) {
      if (!(Je && Je === e)) {
        if (!(e && (e === undefined ? "undefined" : $(e)) === "object")) {
          e = {};
        }
        e = k(e);
        _e = "ALLOWED_TAGS" in e ? E({}, e.ALLOWED_TAGS) : xe;
        Se = "ALLOWED_ATTR" in e ? E({}, e.ALLOWED_ATTR) : Ee;
        We = "ADD_URI_SAFE_ATTR" in e ? E(k(Ge), e.ADD_URI_SAFE_ATTR) : Ge;
        He = "ADD_DATA_URI_TAGS" in e ? E(k($e), e.ADD_DATA_URI_TAGS) : $e;
        Ve = "FORBID_CONTENTS" in e ? E({}, e.FORBID_CONTENTS) : Ye;
        ke = "FORBID_TAGS" in e ? E({}, e.FORBID_TAGS) : {};
        Oe = "FORBID_ATTR" in e ? E({}, e.FORBID_ATTR) : {};
        Be = "USE_PROFILES" in e && e.USE_PROFILES;
        Ne = e.ALLOW_ARIA_ATTR !== false;
        Te = e.ALLOW_DATA_ATTR !== false;
        Me = e.ALLOW_UNKNOWN_PROTOCOLS || false;
        Re = e.SAFE_FOR_TEMPLATES || false;
        Ae = e.WHOLE_DOCUMENT || false;
        De = e.RETURN_DOM || false;
        Ue = e.RETURN_DOM_FRAGMENT || false;
        Ie = e.RETURN_DOM_IMPORT !== false;
        Le = e.RETURN_TRUSTED_TYPE || false;
        Ce = e.FORCE_BODY || false;
        je = e.SANITIZE_DOM !== false;
        Fe = e.KEEP_CONTENT !== false;
        ze = e.IN_PLACE || false;
        we = e.ALLOWED_URI_REGEXP || we;
        Ze = e.NAMESPACE || Xe;
        if (Re) {
          Te = false;
        }
        if (Ue) {
          De = true;
        }
        if (Be) {
          _e = E({}, [].concat(W(C)));
          Se = [];
          if (Be.html === true) {
            E(_e, N);
            E(Se, D);
          }
          if (Be.svg === true) {
            E(_e, T);
            E(Se, U);
            E(Se, L);
          }
          if (Be.svgFilters === true) {
            E(_e, M);
            E(Se, U);
            E(Se, L);
          }
          if (Be.mathMl === true) {
            E(_e, A);
            E(Se, I);
            E(Se, L);
          }
        }
        if (e.ADD_TAGS) {
          if (_e === xe) {
            _e = k(_e);
          }
          E(_e, e.ADD_TAGS);
        }
        if (e.ADD_ATTR) {
          if (Se === Ee) {
            Se = k(Se);
          }
          E(Se, e.ADD_ATTR);
        }
        if (e.ADD_URI_SAFE_ATTR) {
          E(We, e.ADD_URI_SAFE_ATTR);
        }
        if (e.FORBID_CONTENTS) {
          if (Ve === Ye) {
            Ve = k(Ve);
          }
          E(Ve, e.FORBID_CONTENTS);
        }
        if (Fe) {
          _e["#text"] = true;
        }
        if (Ae) {
          E(_e, ["html", "head", "body"]);
        }
        if (_e.table) {
          E(_e, ["tbody"]);
          delete ke.tbody;
        }
        if (o) {
          o(e);
        }
        Je = e;
      }
    };
    var nt = E({}, ["mi", "mo", "mn", "ms", "mtext"]);
    var rt = E({}, ["foreignobject", "desc", "title", "annotation-xml"]);
    var it = E({}, T);
    E(it, M);
    E(it, R);
    var at = E({}, A);
    E(at, P);
    var ot = function (e) {
      var t = ne(e);
      if (!(t && t.tagName)) {
        t = {
          namespaceURI: Xe,
          tagName: "template"
        };
      }
      var n = m(e.tagName);
      var r = m(t.tagName);
      if (e.namespaceURI === Ke) {
        if (t.namespaceURI === Xe) {
          return n === "svg";
        } else if (t.namespaceURI === qe) {
          return n === "svg" && (r === "annotation-xml" || nt[r]);
        } else {
          return Boolean(it[n]);
        }
      }
      if (e.namespaceURI === qe) {
        if (t.namespaceURI === Xe) {
          return n === "math";
        } else if (t.namespaceURI === Ke) {
          return n === "math" && rt[r];
        } else {
          return Boolean(at[n]);
        }
      }
      if (e.namespaceURI === Xe) {
        if (t.namespaceURI === Ke && !rt[r]) {
          return false;
        }
        if (t.namespaceURI === qe && !nt[r]) {
          return false;
        }
        var i = E({}, ["title", "style", "font", "a", "script"]);
        return !at[n] && (i[n] || !it[n]);
      }
      return false;
    };
    var st = function (e) {
      p(t.removed, {
        element: e
      });
      try {
        e.parentNode.removeChild(e);
      } catch (t) {
        try {
          e.outerHTML = ae;
        } catch (t) {
          e.remove();
        }
      }
    };
    var ut = function (e, n) {
      try {
        p(t.removed, {
          attribute: n.getAttributeNode(e),
          from: n
        });
      } catch (e) {
        p(t.removed, {
          attribute: null,
          from: n
        });
      }
      n.removeAttribute(e);
      if (e === "is" && !Se[e]) {
        if (De || Ue) {
          try {
            st(n);
          } catch (e) {}
        } else {
          try {
            n.setAttribute(e, "");
          } catch (e) {}
        }
      }
    };
    var lt = function (e) {
      var t = undefined;
      var n = undefined;
      if (Ce) {
        e = "<remove></remove>" + e;
      } else {
        var i = v(e, /^[\r\n\t ]+/);
        n = i && i[0];
      }
      var a = ie ? ie.createHTML(e) : e;
      if (Ze === Xe) {
        try {
          t = new X().parseFromString(a, "text/html");
        } catch (e) {}
      }
      if (!t || !t.documentElement) {
        t = se.createDocument(Ze, "template", null);
        try {
          t.documentElement.innerHTML = Qe ? "" : a;
        } catch (e) {}
      }
      var o = t.body || t.documentElement;
      if (e && n) {
        o.insertBefore(r.createTextNode(n), o.childNodes[0] || null);
      }
      if (Ze === Xe) {
        return ce.call(t, Ae ? "html" : "body")[0];
      } else if (Ae) {
        return t.documentElement;
      } else {
        return o;
      }
    };
    var ct = function (e) {
      return ue.call(e.ownerDocument || e, e, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT, null, false);
    };
    var ft = function (e) {
      return !(e instanceof x || e instanceof S || typeof e.nodeName == "string" && typeof e.textContent == "string" && typeof e.removeChild == "function" && e.attributes instanceof f && typeof e.removeAttribute == "function" && typeof e.setAttribute == "function" && typeof e.namespaceURI == "string" && typeof e.insertBefore == "function");
    };
    var dt = function (e) {
      if ((s === undefined ? "undefined" : $(s)) === "object") {
        return e instanceof s;
      } else {
        return e && (e === undefined ? "undefined" : $(e)) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
      }
    };
    var ht = function (e, n, r) {
      if (he[e]) {
        d(he[e], function (e) {
          e.call(t, n, r, Je);
        });
      }
    };
    var pt = function (e) {
      var n = undefined;
      ht("beforeSanitizeElements", e, null);
      if (ft(e)) {
        st(e);
        return true;
      }
      if (v(e.nodeName, /[\u0080-\uFFFF]/)) {
        st(e);
        return true;
      }
      var r = m(e.nodeName);
      ht("uponSanitizeElement", e, {
        tagName: r,
        allowedTags: _e
      });
      if (!dt(e.firstElementChild) && (!dt(e.content) || !dt(e.content.firstElementChild)) && w(/<[/\w]/g, e.innerHTML) && w(/<[/\w]/g, e.textContent)) {
        st(e);
        return true;
      }
      if (r === "select" && w(/<template/i, e.innerHTML)) {
        st(e);
        return true;
      }
      if (!_e[r] || ke[r]) {
        if (Fe && !Ve[r]) {
          var i = ne(e) || e.parentNode;
          var a = te(e) || e.childNodes;
          if (a && i) {
            for (var o = a.length - 1; o >= 0; --o) {
              i.insertBefore(J(a[o], true), ee(e));
            }
          }
        }
        st(e);
        return true;
      }
      if (e instanceof u && !ot(e)) {
        st(e);
        return true;
      } else if (r !== "noscript" && r !== "noembed" || !w(/<\/no(script|embed)/i, e.innerHTML)) {
        if (Re && e.nodeType === 3) {
          n = e.textContent;
          n = g(n, pe, " ");
          n = g(n, me, " ");
          if (e.textContent !== n) {
            p(t.removed, {
              element: e.cloneNode()
            });
            e.textContent = n;
          }
        }
        ht("afterSanitizeElements", e, null);
        return false;
      } else {
        st(e);
        return true;
      }
    };
    var mt = function (e, t, n) {
      if (je && (t === "id" || t === "name") && (n in r || n in et)) {
        return false;
      }
      if (Te && !Oe[t] && w(ve, t)) ;else if (Ne && w(ge, t)) ;else {
        if (!Se[t] || Oe[t]) {
          return false;
        }
        if (We[t]) ;else if (w(we, g(n, be, ""))) ;else if (t !== "src" && t !== "xlink:href" && t !== "href" || e === "script" || y(n, "data:") !== 0 || !He[e]) {
          if (Me && !w(ye, g(n, be, ""))) ;else if (n) {
            return false;
          }
        }
      }
      return true;
    };
    var vt = function (e) {
      var n = undefined;
      var r = undefined;
      var i = undefined;
      var a = undefined;
      ht("beforeSanitizeAttributes", e, null);
      var o = e.attributes;
      if (o) {
        var s = {
          attrName: "",
          attrValue: "",
          keepAttr: true,
          allowedAttributes: Se
        };
        for (a = o.length; a--;) {
          var u = n = o[a];
          var l = u.name;
          var c = u.namespaceURI;
          r = b(n.value);
          i = m(l);
          s.attrName = i;
          s.attrValue = r;
          s.keepAttr = true;
          s.forceKeepAttr = undefined;
          ht("uponSanitizeAttribute", e, s);
          r = s.attrValue;
          if (!s.forceKeepAttr && (ut(l, e), s.keepAttr)) {
            if (w(/\/>/i, r)) {
              ut(l, e);
            } else {
              if (Re) {
                r = g(r, pe, " ");
                r = g(r, me, " ");
              }
              var f = e.nodeName.toLowerCase();
              if (mt(f, i, r)) {
                try {
                  if (c) {
                    e.setAttributeNS(c, l, r);
                  } else {
                    e.setAttribute(l, r);
                  }
                  h(t.removed);
                } catch (e) {}
              }
            }
          }
        }
        ht("afterSanitizeAttributes", e, null);
      }
    };
    var gt = function e(t) {
      var n = undefined;
      var r = ct(t);
      for (ht("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) {
        ht("uponSanitizeShadowNode", n, null);
        if (!pt(n)) {
          if (n.content instanceof i) {
            e(n.content);
          }
          vt(n);
        }
      }
      ht("afterSanitizeShadowDOM", t, null);
    };
    t.sanitize = function (r, a) {
      var o = undefined;
      var u = undefined;
      var l = undefined;
      var c = undefined;
      var f = undefined;
      if (Qe = !r) {
        r = "<!-->";
      }
      if (typeof r != "string" && !dt(r)) {
        if (typeof r.toString != "function") {
          throw _("toString is not a function");
        }
        if (typeof (r = r.toString()) != "string") {
          throw _("dirty is not a string, aborting");
        }
      }
      if (!t.isSupported) {
        if ($(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
          if (typeof r == "string") {
            return e.toStaticHTML(r);
          }
          if (dt(r)) {
            return e.toStaticHTML(r.outerHTML);
          }
        }
        return r;
      }
      if (!Pe) {
        tt(a);
      }
      t.removed = [];
      if (typeof r == "string") {
        ze = false;
      }
      if (ze) ;else if (r instanceof s) {
        if ((u = (o = lt("<!---->")).ownerDocument.importNode(r, true)).nodeType === 1 && u.nodeName === "BODY" || u.nodeName === "HTML") {
          o = u;
        } else {
          o.appendChild(u);
        }
      } else {
        if (!De && !Re && !Ae && r.indexOf("<") === -1) {
          if (ie && Le) {
            return ie.createHTML(r);
          } else {
            return r;
          }
        }
        if (!(o = lt(r))) {
          if (De) {
            return null;
          } else {
            return ae;
          }
        }
      }
      if (o && Ce) {
        st(o.firstChild);
      }
      for (var d = ct(ze ? r : o); l = d.nextNode();) {
        if (!(l.nodeType === 3 && l === c || pt(l))) {
          if (l.content instanceof i) {
            gt(l.content);
          }
          vt(l);
          c = l;
        }
      }
      c = null;
      if (ze) {
        return r;
      }
      if (De) {
        if (Ue) {
          for (f = le.call(o.ownerDocument); o.firstChild;) {
            f.appendChild(o.firstChild);
          }
        } else {
          f = o;
        }
        if (Ie) {
          f = fe.call(n, f, true);
        }
        return f;
      }
      var h = Ae ? o.outerHTML : o.innerHTML;
      if (Re) {
        h = g(h, pe, " ");
        h = g(h, me, " ");
      }
      if (ie && Le) {
        return ie.createHTML(h);
      } else {
        return h;
      }
    };
    t.setConfig = function (e) {
      tt(e);
      Pe = true;
    };
    t.clearConfig = function () {
      Je = null;
      Pe = false;
    };
    t.isValidAttribute = function (e, t, n) {
      if (!Je) {
        tt({});
      }
      var r = m(e);
      var i = m(t);
      return mt(r, i, n);
    };
    t.addHook = function (e, t) {
      if (typeof t == "function") {
        he[e] = he[e] || [];
        p(he[e], t);
      }
    };
    t.removeHook = function (e) {
      if (he[e]) {
        h(he[e]);
      }
    };
    t.removeHooks = function (e) {
      if (he[e]) {
        he[e] = [];
      }
    };
    t.removeAllHooks = function () {
      he = {};
    };
    return t;
  }
  return K();
}();