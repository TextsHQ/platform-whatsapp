!function (e) {
  var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;
  var n = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;
  var r = {
    pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
    lookbehind: true,
    inside: {
      namespace: {
        pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /\./
    }
  };
  e.languages.java = e.languages.extend("clike", {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
      lookbehind: true,
      greedy: true
    },
    "class-name": [r, {
      pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
      lookbehind: true,
      inside: r.inside
    }, {
      pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + n + /[A-Z]\w*\b/.source),
      lookbehind: true,
      inside: r.inside
    }],
    keyword: t,
    function: [e.languages.clike.function, {
      pattern: /(::\s*)[a-z_]\w*/,
      lookbehind: true
    }],
    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: true
    }
  });
  e.languages.insertBefore("java", "string", {
    "triple-quoted-string": {
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: true,
      alias: "string"
    },
    char: {
      pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
      greedy: true
    }
  });
  e.languages.insertBefore("java", "class-name", {
    annotation: {
      pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
      lookbehind: true,
      alias: "punctuation"
    },
    generics: {
      pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
      inside: {
        "class-name": r,
        keyword: t,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    import: [{
      pattern: RegExp(/(\bimport\s+)/.source + n + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
      lookbehind: true,
      inside: {
        namespace: r.inside.namespace,
        punctuation: /\./,
        operator: /\*/,
        "class-name": /\w+/
      }
    }, {
      pattern: RegExp(/(\bimport\s+static\s+)/.source + n + /(?:\w+|\*)(?=\s*;)/.source),
      lookbehind: true,
      alias: "static",
      inside: {
        namespace: r.inside.namespace,
        static: /\b\w+$/,
        punctuation: /\./,
        operator: /\*/,
        "class-name": /\w+/
      }
    }],
    namespace: {
      pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function () {
        return t.source;
      })),
      lookbehind: true,
      inside: {
        punctuation: /\./
      }
    }
  });
}(Prism);