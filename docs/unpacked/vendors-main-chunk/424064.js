!function (e) {
  var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function n(e) {
    e = e.replace(/<inner>/g, function () {
      return t;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")");
  }
  var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return r;
  });
  var o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  e.languages.markdown = e.languages.extend("markup", {});
  e.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: e.languages.yaml
        }
      }
    },
    blockquote: {
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + i + o + "(?:" + i + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + i + o + ")(?:" + i + ")*$"),
          lookbehind: true,
          inside: {
            "table-data": {
              pattern: RegExp(r),
              inside: e.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + i + ")" + o + "$"),
          lookbehind: true,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + i + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(r),
              alias: "important",
              inside: e.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [{
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: "keyword"
    }, {
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        "code-block": {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        "code-language": {
          pattern: /^(```).+/,
          lookbehind: true
        },
        punctuation: /```/
      }
    }],
    title: [{
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: "important",
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    hr: {
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: "punctuation"
    },
    list: {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: "punctuation"
    },
    "url-reference": {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      pattern: n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {}
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      pattern: n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {}
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {}
        },
        punctuation: /~~?/
      }
    },
    "code-snippet": {
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ["code", "keyword"]
    },
    url: {
      pattern: n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {}
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ["url", "bold", "italic", "strike"].forEach(function (t) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (n) {
      if (t !== n) {
        e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n];
      }
    });
  });
  e.hooks.add("after-tokenize", function (e) {
    if (!(e.language !== "markdown" && e.language !== "md")) {
      (function e(t) {
        if (t && typeof t != "string") {
          for (var n = 0, r = t.length; n < r; n++) {
            var i = t[n];
            if (i.type === "code") {
              var o = i.content[1];
              var s = i.content[3];
              if (o && s && o.type === "code-language" && s.type === "code-block" && typeof o.content == "string") {
                var l = o.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                var a = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                if (s.alias) {
                  if (typeof s.alias == "string") {
                    s.alias = [s.alias, a];
                  } else {
                    s.alias.push(a);
                  }
                } else {
                  s.alias = [a];
                }
              }
            } else {
              e(i.content);
            }
          }
        }
      })(e.tokens);
    }
  });
  e.hooks.add("wrap", function (t) {
    if (t.type === "code-block") {
      for (var n = "", r = 0, i = t.classes.length; r < i; r++) {
        var o = t.classes[r];
        var u = /language-(.+)/.exec(o);
        if (u) {
          n = u[1];
          break;
        }
      }
      var c;
      var d = e.languages[n];
      if (d) {
        t.content = e.highlight((c = t.content, c.replace(s, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (e, t) {
          var n;
          if ((t = t.toLowerCase())[0] === "#") {
            n = t[1] === "x" ? parseInt(t.slice(2), 16) : Number(t.slice(1));
            return a(n);
          }
          var r = l[t];
          return r || e;
        })), d, n);
      } else if (n && n !== "none" && e.plugins.autoloader) {
        var g = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 10000000000000000);
        t.attributes.id = g;
        e.plugins.autoloader.loadLanguages(n, function () {
          var t = document.getElementById(g);
          if (t) {
            t.innerHTML = e.highlight(t.textContent, e.languages[n], n);
          }
        });
      }
    }
  });
  var s = RegExp(e.languages.markup.tag.pattern.source, "gi");
  var l = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: "\""
  };
  var a = String.fromCodePoint || String.fromCharCode;
  e.languages.md = e.languages.markdown;
}(Prism);