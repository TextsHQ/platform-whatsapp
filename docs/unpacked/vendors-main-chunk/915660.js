var r = function (e) {
  var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  var n = 0;
  var r = {};
  var i = {
    manual: e.Prism && e.Prism.manual,
    disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
    util: {
      encode: function e(t) {
        if (t instanceof o) {
          return new o(t.type, e(t.content), t.alias);
        } else if (Array.isArray(t)) {
          return t.map(e);
        } else {
          return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        if (!e.__id) {
          Object.defineProperty(e, "__id", {
            value: ++n
          });
        }
        return e.__id;
      },
      clone: function e(t, n) {
        var r;
        var o;
        n = n || {};
        switch (i.util.type(t)) {
          case "Object":
            o = i.util.objId(t);
            if (n[o]) {
              return n[o];
            }
            r = {};
            n[o] = r;
            for (var s in t) {
              if (t.hasOwnProperty(s)) {
                r[s] = e(t[s], n);
              }
            }
            return r;
          case "Array":
            o = i.util.objId(t);
            if (n[o]) {
              return n[o];
            } else {
              r = [];
              n[o] = r;
              t.forEach(function (t, i) {
                r[i] = e(t, n);
              });
              return r;
            }
          default:
            return t;
        }
      },
      getLanguage: function (e) {
        for (; e;) {
          var n = t.exec(e.className);
          if (n) {
            return n[1].toLowerCase();
          }
          e = e.parentElement;
        }
        return "none";
      },
      setLanguage: function (e, n) {
        e.className = e.className.replace(RegExp(t, "gi"), "");
        e.classList.add("language-" + n);
      },
      currentScript: function () {
        if (typeof document == "undefined") {
          return null;
        }
        if ("currentScript" in document) {
          return document.currentScript;
        }
        try {
          throw new Error();
        } catch (r) {
          var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
          if (e) {
            var t = document.getElementsByTagName("script");
            for (var n in t) {
              if (t[n].src == e) {
                return t[n];
              }
            }
          }
          return null;
        }
      },
      isActive: function (e, t, n) {
        for (var r = "no-" + t; e;) {
          var i = e.classList;
          if (i.contains(t)) {
            return true;
          }
          if (i.contains(r)) {
            return false;
          }
          e = e.parentElement;
        }
        return !!n;
      }
    },
    languages: {
      plain: r,
      plaintext: r,
      text: r,
      txt: r,
      extend: function (e, t) {
        var n = i.util.clone(i.languages[e]);
        for (var r in t) {
          n[r] = t[r];
        }
        return n;
      },
      insertBefore: function (e, t, n, r) {
        var o = (r = r || i.languages)[e];
        var s = {};
        for (var l in o) {
          if (o.hasOwnProperty(l)) {
            if (l == t) {
              for (var a in n) {
                if (n.hasOwnProperty(a)) {
                  s[a] = n[a];
                }
              }
            }
            if (!n.hasOwnProperty(l)) {
              s[l] = o[l];
            }
          }
        }
        var u = r[e];
        r[e] = s;
        i.languages.DFS(i.languages, function (t, n) {
          if (n === u && t != e) {
            this[t] = s;
          }
        });
        return s;
      },
      DFS: function e(t, n, r, o) {
        o = o || {};
        var s = i.util.objId;
        for (var l in t) {
          if (t.hasOwnProperty(l)) {
            n.call(t, l, t[l], r || l);
            var a = t[l];
            var u = i.util.type(a);
            if (u !== "Object" || o[s(a)]) {
              if (!(u !== "Array" || o[s(a)])) {
                o[s(a)] = true;
                e(a, n, l, o);
              }
            } else {
              o[s(a)] = true;
              e(a, n, null, o);
            }
          }
        }
      }
    },
    plugins: {},
    highlightAll: function (e, t) {
      i.highlightAllUnder(document, e, t);
    },
    highlightAllUnder: function (e, t, n) {
      var r = {
        callback: n,
        container: e,
        selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
      };
      i.hooks.run("before-highlightall", r);
      r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector));
      i.hooks.run("before-all-elements-highlight", r);
      for (var o, s = 0; o = r.elements[s++];) {
        i.highlightElement(o, t === true, r.callback);
      }
    },
    highlightElement: function (t, n, r) {
      var o = i.util.getLanguage(t);
      var s = i.languages[o];
      i.util.setLanguage(t, o);
      var l = t.parentElement;
      if (l && l.nodeName.toLowerCase() === "pre") {
        i.util.setLanguage(l, o);
      }
      var a = {
        element: t,
        language: o,
        grammar: s,
        code: t.textContent
      };
      function u(e) {
        a.highlightedCode = e;
        i.hooks.run("before-insert", a);
        a.element.innerHTML = a.highlightedCode;
        i.hooks.run("after-highlight", a);
        i.hooks.run("complete", a);
        if (r) {
          r.call(a.element);
        }
      }
      i.hooks.run("before-sanity-check", a);
      if ((l = a.element.parentElement) && l.nodeName.toLowerCase() === "pre" && !l.hasAttribute("tabindex")) {
        l.setAttribute("tabindex", "0");
      }
      if (!a.code) {
        i.hooks.run("complete", a);
        return void (r && r.call(a.element));
      }
      i.hooks.run("before-highlight", a);
      if (a.grammar) {
        if (n && e.Worker) {
          var c = new Worker(i.filename);
          c.onmessage = function (e) {
            u(e.data);
          };
          c.postMessage(JSON.stringify({
            language: a.language,
            code: a.code,
            immediateClose: true
          }));
        } else {
          u(i.highlight(a.code, a.grammar, a.language));
        }
      } else {
        u(i.util.encode(a.code));
      }
    },
    highlight: function (e, t, n) {
      var r = {
        code: e,
        grammar: t,
        language: n
      };
      i.hooks.run("before-tokenize", r);
      if (!r.grammar) {
        throw new Error("The language \"" + r.language + "\" has no grammar.");
      }
      r.tokens = i.tokenize(r.code, r.grammar);
      i.hooks.run("after-tokenize", r);
      return o.stringify(i.util.encode(r.tokens), r.language);
    },
    tokenize: function (e, t) {
      var n = t.rest;
      if (n) {
        for (var r in n) {
          t[r] = n[r];
        }
        delete t.rest;
      }
      var i = new a();
      u(i, i.head, e);
      l(e, i, t, i.head, 0);
      return function (e) {
        var t = [];
        var n = e.head.next;
        for (; n !== e.tail;) {
          t.push(n.value);
          n = n.next;
        }
        return t;
      }(i);
    },
    hooks: {
      all: {},
      add: function (e, t) {
        var n = i.hooks.all;
        n[e] = n[e] || [];
        n[e].push(t);
      },
      run: function (e, t) {
        var n = i.hooks.all[e];
        if (n && n.length) {
          for (var r, o = 0; r = n[o++];) {
            r(t);
          }
        }
      }
    },
    Token: o
  };
  function o(e, t, n, r) {
    this.type = e;
    this.content = t;
    this.alias = n;
    this.length = (r || "").length | 0;
  }
  function s(e, t, n, r) {
    e.lastIndex = t;
    var i = e.exec(n);
    if (i && r && i[1]) {
      var o = i[1].length;
      i.index += o;
      i[0] = i[0].slice(o);
    }
    return i;
  }
  function l(e, t, n, r, a, d) {
    for (var g in n) {
      if (n.hasOwnProperty(g) && n[g]) {
        var f = n[g];
        f = Array.isArray(f) ? f : [f];
        for (var h = 0; h < f.length; ++h) {
          if (d && d.cause == g + "," + h) {
            return;
          }
          var p = f[h];
          var _ = p.inside;
          var m = !!p.lookbehind;
          var y = !!p.greedy;
          var N = p.alias;
          if (y && !p.pattern.global) {
            var v = p.pattern.toString().match(/[imsuy]*$/)[0];
            p.pattern = RegExp(p.pattern.source, v + "g");
          }
          for (var T = p.pattern || p, E = r.next, C = a; E !== t.tail && !(d && C >= d.reach); C += E.value.length, E = E.next) {
            var x = E.value;
            if (t.length > e.length) {
              return;
            }
            if (!(x instanceof o)) {
              var b;
              var S = 1;
              if (y) {
                if (!(b = s(T, C, e, m)) || b.index >= e.length) {
                  break;
                }
                var A = b.index;
                var O = b.index + b[0].length;
                var w = C;
                for (w += E.value.length; A >= w;) {
                  w += (E = E.next).value.length;
                }
                C = w -= E.value.length;
                if (E.value instanceof o) {
                  continue;
                }
                for (var k = E; k !== t.tail && (w < O || typeof k.value == "string"); k = k.next) {
                  S++;
                  w += k.value.length;
                }
                S--;
                x = e.slice(C, w);
                b.index -= C;
              } else if (!(b = s(T, 0, x, m))) {
                continue;
              }
              A = b.index;
              var R = b[0];
              var D = x.slice(0, A);
              var M = x.slice(A + R.length);
              var $ = C + x.length;
              if (d && $ > d.reach) {
                d.reach = $;
              }
              var I = E.prev;
              if (D) {
                I = u(t, I, D);
                C += D.length;
              }
              c(t, I, S);
              E = u(t, I, new o(g, _ ? i.tokenize(R, _) : R, N, R));
              if (M) {
                u(t, E, M);
              }
              if (S > 1) {
                var P = {
                  cause: g + "," + h,
                  reach: $
                };
                l(e, t, n, E.prev, C, P);
                if (d && P.reach > d.reach) {
                  d.reach = P.reach;
                }
              }
            }
          }
        }
      }
    }
  }
  function a() {
    var e = {
      value: null,
      prev: null,
      next: null
    };
    var t = {
      value: null,
      prev: e,
      next: null
    };
    e.next = t;
    this.head = e;
    this.tail = t;
    this.length = 0;
  }
  function u(e, t, n) {
    var r = t.next;
    var i = {
      value: n,
      prev: t,
      next: r
    };
    t.next = i;
    r.prev = i;
    e.length++;
    return i;
  }
  function c(e, t, n) {
    for (var r = t.next, i = 0; i < n && r !== e.tail; i++) {
      r = r.next;
    }
    t.next = r;
    r.prev = t;
    e.length -= i;
  }
  e.Prism = i;
  o.stringify = function e(t, n) {
    if (typeof t == "string") {
      return t;
    }
    if (Array.isArray(t)) {
      var r = "";
      t.forEach(function (t) {
        r += e(t, n);
      });
      return r;
    }
    var o = {
      type: t.type,
      content: e(t.content, n),
      tag: "span",
      classes: ["token", t.type],
      attributes: {},
      language: n
    };
    var s = t.alias;
    if (s) {
      if (Array.isArray(s)) {
        Array.prototype.push.apply(o.classes, s);
      } else {
        o.classes.push(s);
      }
    }
    i.hooks.run("wrap", o);
    var l = "";
    for (var a in o.attributes) {
      l += " " + a + "=\"" + (o.attributes[a] || "").replace(/"/g, "&quot;") + "\"";
    }
    return "<" + o.tag + " class=\"" + o.classes.join(" ") + "\"" + l + ">" + o.content + "</" + o.tag + ">";
  };
  if (!e.document) {
    if (e.addEventListener) {
      if (!i.disableWorkerMessageHandler) {
        e.addEventListener("message", function (t) {
          var n = JSON.parse(t.data);
          var r = n.language;
          var o = n.code;
          var s = n.immediateClose;
          e.postMessage(i.highlight(o, i.languages[r], r));
          if (s) {
            e.close();
          }
        }, false);
      }
      return i;
    } else {
      return i;
    }
  }
  var d = i.util.currentScript();
  function g() {
    if (!i.manual) {
      i.highlightAll();
    }
  }
  if (d) {
    i.filename = d.src;
    if (d.hasAttribute("data-manual")) {
      i.manual = true;
    }
  }
  if (!i.manual) {
    var f = document.readyState;
    if (f === "loading" || f === "interactive" && d && d.defer) {
      document.addEventListener("DOMContentLoaded", g);
    } else if (window.requestAnimationFrame) {
      window.requestAnimationFrame(g);
    } else {
      window.setTimeout(g, 16);
    }
  }
  return i;
}(typeof window != "undefined" ? window : typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope ? self : {});
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
if (module.exports) {
  module.exports = r;
}
if (require.g !== undefined) {
  require.g.Prism = r;
}
r.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [{
            pattern: /^=/,
            alias: "attr-equals"
          }, /"|'/]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [{
    pattern: /&[\da-z]{1,8};/i,
    alias: "named-entity"
  }, /&#x?[\da-f]{1,8};/i]
};
r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity;
r.languages.markup.doctype.inside["internal-subset"].inside = r.languages.markup;
r.hooks.add("wrap", function (e) {
  if (e.type === "entity") {
    e.attributes.title = e.content.replace(/&amp;/, "&");
  }
});
Object.defineProperty(r.languages.markup.tag, "addInlined", {
  value: function (e, t) {
    var n = {
      ["language-" + t]: {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: r.languages[t]
      },
      cdata: /^<!\[CDATA\[|\]\]>$/i
    };
    var i = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: n
      }
    };
    i["language-" + t] = {
      pattern: /[\s\S]+/,
      inside: r.languages[t]
    };
    var o = {};
    o[e] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return e;
      }), "i"),
      lookbehind: true,
      greedy: true,
      inside: i
    };
    r.languages.insertBefore("markup", "cdata", o);
  }
});
Object.defineProperty(r.languages.markup.tag, "addAttribute", {
  value: function (e, t) {
    r.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
      lookbehind: true,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [t, "language-" + t],
              inside: r.languages[t]
            },
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        }
      }
    });
  }
});
r.languages.html = r.languages.markup;
r.languages.mathml = r.languages.markup;
r.languages.svg = r.languages.markup;
r.languages.xml = r.languages.extend("markup", {});
r.languages.ssml = r.languages.xml;
r.languages.atom = r.languages.xml;
r.languages.rss = r.languages.xml;
(function (e) {
  var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  e.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
      }
    },
    url: {
      pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: true,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + t.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
      lookbehind: true
    },
    string: {
      pattern: t,
      greedy: true
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    punctuation: /[(){};:,]/
  };
  e.languages.css.atrule.inside.rest = e.languages.css;
  var n = e.languages.markup;
  if (n) {
    n.tag.addInlined("style", "css");
    n.tag.addAttribute("style", "css");
  }
})(r);
r.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
r.languages.javascript = r.languages.extend("clike", {
  "class-name": [r.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  keyword: [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
    lookbehind: true
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
r.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
r.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
    lookbehind: true,
    greedy: true,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: "language-regex",
        inside: r.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: r.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: r.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: r.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: r.languages.javascript
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
r.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: true,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: r.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: "property"
  }
});
r.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: "property"
  }
});
if (r.languages.markup) {
  r.languages.markup.tag.addInlined("script", "javascript");
  r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
}
r.languages.js = r.languages.javascript;
(function () {
  if (r !== undefined && typeof document != "undefined") {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    var e = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    };
    var t = "data-src-status";
    var n = "loading";
    var i = "loaded";
    var o = "pre[data-src]:not([data-src-status=\"loaded\"]):not([data-src-status=\"loading\"])";
    r.hooks.add("before-highlightall", function (e) {
      e.selector += ", " + o;
    });
    r.hooks.add("before-sanity-check", function (s) {
      var l = s.element;
      if (l.matches(o)) {
        s.code = "";
        l.setAttribute(t, n);
        var a = l.appendChild(document.createElement("CODE"));
        a.textContent = "Loading…";
        var u = l.getAttribute("data-src");
        var c = s.language;
        if (c === "none") {
          var d = (/\.(\w+)$/.exec(u) || [, "none"])[1];
          c = e[d] || d;
        }
        r.util.setLanguage(a, c);
        r.util.setLanguage(l, c);
        var g = r.plugins.autoloader;
        if (g) {
          g.loadLanguages(c);
        }
        (function (e, t, n) {
          var r = new XMLHttpRequest();
          r.open("GET", e, true);
          r.onreadystatechange = function () {
            if (r.readyState == 4) {
              if (r.status < 400 && r.responseText) {
                t(r.responseText);
              } else if (r.status >= 400) {
                n("✖ Error " + r.status + " while fetching file: " + r.statusText);
              } else {
                n("✖ Error: File does not exist or is empty");
              }
            }
          };
          r.send(null);
        })(u, function (e) {
          l.setAttribute(t, i);
          var n = function (e) {
            var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
            if (t) {
              var n = Number(t[1]);
              var r = t[2];
              var i = t[3];
              if (r) {
                if (i) {
                  return [n, Number(i)];
                } else {
                  return [n, undefined];
                }
              } else {
                return [n, n];
              }
            }
          }(l.getAttribute("data-range"));
          if (n) {
            var o = e.split(/\r\n?|\n/g);
            var s = n[0];
            var u = n[1] == null ? o.length : n[1];
            if (s < 0) {
              s += o.length;
            }
            s = Math.max(0, Math.min(s - 1, o.length));
            if (u < 0) {
              u += o.length;
            }
            u = Math.max(0, Math.min(u, o.length));
            e = o.slice(s, u).join("\n");
            if (!l.hasAttribute("data-start")) {
              l.setAttribute("data-start", String(s + 1));
            }
          }
          a.textContent = e;
          r.highlightElement(a);
        }, function (e) {
          l.setAttribute(t, "failed");
          a.textContent = e;
        });
      }
    });
    r.plugins.fileHighlight = {
      highlight: function (e) {
        for (var t, n = (e || document).querySelectorAll(o), i = 0; t = n[i++];) {
          r.highlightElement(t);
        }
      }
    };
    var s = false;
    r.fileHighlight = function () {
      if (!s) {
        console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
        s = true;
      }
      r.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }
})();