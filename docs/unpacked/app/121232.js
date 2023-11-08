var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElectronCompatibleStyles = function (e) {
  var t;
  if ((t = p.get(e)) !== null && t !== undefined) {
    return t;
  } else {
    return {
      classname: "",
      classnameCamelCase: "",
      height: 72,
      textSize: i.default,
      detailImageSize: 49,
      pollQuestionTextSize: a.default,
      pollDetailsQuestionTextSize: o.default,
      pollDetailsOptionTextSize: s.default,
      pollDetailsTimestampTextSize: l.default,
      pollDetailsTagTextSize: u.default,
      metaTextStyles: c.default,
      composerFontSize: d.default
    };
  }
};
r(require("./156720.js"));
const i = {
  default: {
    fontSize: "f8jlpxt4",
    lineHeight: "idwf4z32"
  },
  textSizeSmall: {
    fontSize: "dsh4tgtl",
    lineHeight: "sid27bd6"
  },
  textSizeXSmall: {
    fontSize: "lak21jic",
    lineHeight: "cr2cog7z"
  },
  textSizeXXSmall: {
    fontSize: "r8knbtme",
    lineHeight: "c4f797jd"
  },
  textSizeLarge: {
    fontSize: "f8jlpxt4",
    lineHeight: "erpdyial"
  },
  textSizeXLarge: {
    fontSize: "bze30y65",
    lineHeight: "i7clx65o"
  },
  textSizeXXLarge: {
    fontSize: "enbbiyaj",
    lineHeight: "qg52vu03"
  }
};
const a = {
  default: {
    fontSize: "enbbiyaj"
  },
  textSizeSmall: {
    fontSize: "f8jlpxt4"
  },
  textSizeXSmall: {
    fontSize: "ovllcyds"
  },
  textSizeXXSmall: {
    fontSize: "lak21jic"
  },
  textSizeLarge: {
    fontSize: "enbbiyaj"
  },
  textSizeXLarge: {
    fontSize: "fe5nidar"
  },
  textSizeXXLarge: {
    fontSize: "cqiun4t2"
  }
};
const o = {
  default: {
    fontSize: "iqrewfee"
  },
  textSizeSmall: {
    fontSize: "enbbiyaj"
  },
  textSizeXSmall: {
    fontSize: "bze30y65"
  },
  textSizeXXSmall: {
    fontSize: "f8jlpxt4"
  },
  textSizeLarge: {
    fontSize: "iqrewfee"
  },
  textSizeXLarge: {
    fontSize: "p9fp32ui"
  },
  textSizeXXLarge: {
    fontSize: "ctdnaqea"
  }
};
const s = {
  default: {
    fontSize: "enbbiyaj"
  },
  textSizeSmall: {
    fontSize: "f8jlpxt4"
  },
  textSizeXSmall: {
    fontSize: "ovllcyds"
  },
  textSizeXXSmall: {
    fontSize: "lak21jic"
  },
  textSizeLarge: {
    fontSize: "enbbiyaj"
  },
  textSizeXLarge: {
    fontSize: "fe5nidar"
  },
  textSizeXXLarge: {
    fontSize: "cqiun4t2"
  }
};
const l = {
  default: {
    fontSize: "f8jlpxt4"
  },
  textSizeSmall: {
    fontSize: "dsh4tgtl"
  },
  textSizeXSmall: {
    fontSize: "lak21jic"
  },
  textSizeXXSmall: {
    fontSize: "r8knbtme"
  },
  textSizeLarge: {
    fontSize: "f8jlpxt4"
  },
  textSizeXLarge: {
    fontSize: "bze30y65"
  },
  textSizeXXLarge: {
    fontSize: "enbbiyaj"
  }
};
const u = {
  default: {
    fontSize: "lak21jic"
  },
  textSizeSmall: {
    fontSize: "cq4aadlz"
  },
  textSizeXSmall: {
    fontSize: "cq4aadlz"
  },
  textSizeXXSmall: {
    fontSize: "fwsb36il"
  },
  textSizeLarge: {
    fontSize: "lak21jic"
  },
  textSizeXLarge: {
    fontSize: "dsh4tgtl"
  },
  textSizeXXLarge: {
    fontSize: "dsh4tgtl"
  }
};
const c = {
  default: {
    fontSize: "o38k74y6",
    lineHeight: "cr2cog7z"
  },
  textSizeSmall: {
    fontSize: "r8knbtme",
    lineHeight: "omzt3tek"
  },
  textSizeXSmall: {
    fontSize: "cq4aadlz",
    lineHeight: "c4f797jd"
  },
  textSizeXXSmall: {
    fontSize: "fwsb36il",
    lineHeight: "p9jsab73"
  },
  textSizeLarge: {
    fontSize: "dsh4tgtl",
    lineHeight: "q5jc98e4"
  },
  textSizeXLarge: {
    fontSize: "ovllcyds",
    lineHeight: "sid27bd6"
  },
  textSizeXXLarge: {
    fontSize: "f8jlpxt4",
    lineHeight: "g2xi8p6r"
  }
};
const d = {
  default: {
    fontSize: "bze30y65"
  },
  textSizeSmall: {
    fontSize: "f8jlpxt4"
  },
  textSizeXSmall: {
    fontSize: "ovllcyds"
  },
  textSizeXXSmall: {
    fontSize: "dsh4tgtl"
  },
  textSizeLarge: {
    fontSize: "enbbiyaj"
  },
  textSizeXLarge: {
    fontSize: "fe5nidar"
  },
  textSizeXXLarge: {
    fontSize: "cqiun4t2"
  }
};
const p = new Map([[-1, {
  classname: "textsize-small",
  classnameCamelCase: "textSizeSmall",
  height: 64,
  textSize: i.textSizeSmall,
  detailImageSize: 44,
  pollQuestionTextSize: a.textSizeSmall,
  pollDetailsQuestionTextSize: o.textSizeSmall,
  pollDetailsOptionTextSize: s.textSizeSmall,
  pollDetailsTimestampTextSize: l.textSizeSmall,
  pollDetailsTagTextSize: u.textSizeSmall,
  metaTextStyles: c.textSizeSmall,
  composerFontSize: d.textSizeSmall
}], [-2, {
  classname: "textsize-xsmall",
  classnameCamelCase: "textSizeXSmall",
  height: 58,
  textSize: i.textSizeXSmall,
  detailImageSize: 40,
  pollQuestionTextSize: a.textSizeXSmall,
  pollDetailsQuestionTextSize: o.textSizeXSmall,
  pollDetailsOptionTextSize: s.textSizeXSmall,
  pollDetailsTimestampTextSize: l.textSizeXSmall,
  pollDetailsTagTextSize: u.textSizeXSmall,
  metaTextStyles: c.textSizeXSmall,
  composerFontSize: d.textSizeXSmall
}], [-3, {
  classname: "textsize-xxsmall",
  classnameCamelCase: "textSizeXXSmall",
  height: 52,
  textSize: i.textSizeXXSmall,
  detailImageSize: 38,
  pollQuestionTextSize: a.textSizeXXSmall,
  pollDetailsQuestionTextSize: o.textSizeXXSmall,
  pollDetailsOptionTextSize: s.textSizeXXSmall,
  pollDetailsTimestampTextSize: l.textSizeXXSmall,
  pollDetailsTagTextSize: u.textSizeXXSmall,
  metaTextStyles: c.textSizeXXSmall,
  composerFontSize: d.textSizeXXSmall
}], [1, {
  classname: "textsize-large",
  classnameCamelCase: "textSizeLarge",
  height: 72,
  textSize: i.textSizeLarge,
  detailImageSize: 49,
  pollQuestionTextSize: a.textSizeLarge,
  pollDetailsQuestionTextSize: o.textSizeLarge,
  pollDetailsOptionTextSize: s.textSizeLarge,
  pollDetailsTimestampTextSize: l.textSizeLarge,
  pollDetailsTagTextSize: u.textSizeLarge,
  metaTextStyles: c.textSizeLarge,
  composerFontSize: d.textSizeLarge
}], [2, {
  classname: "textsize-xlarge",
  classnameCamelCase: "textSizeXLarge",
  height: 72,
  textSize: i.textSizeXLarge,
  detailImageSize: 49,
  pollQuestionTextSize: a.textSizeXLarge,
  pollDetailsQuestionTextSize: o.textSizeXLarge,
  pollDetailsOptionTextSize: s.textSizeXLarge,
  pollDetailsTimestampTextSize: l.textSizeXLarge,
  pollDetailsTagTextSize: u.textSizeXLarge,
  metaTextStyles: c.textSizeXLarge,
  composerFontSize: d.textSizeXLarge
}], [3, {
  classname: "textsize-xxlarge",
  classnameCamelCase: "textSizeXXLarge",
  height: 72,
  textSize: i.textSizeXXLarge,
  detailImageSize: 49,
  pollQuestionTextSize: a.textSizeXXLarge,
  pollDetailsQuestionTextSize: o.textSizeXXLarge,
  pollDetailsOptionTextSize: s.textSizeXXLarge,
  pollDetailsTimestampTextSize: l.textSizeXXLarge,
  pollDetailsTagTextSize: u.textSizeXXLarge,
  metaTextStyles: c.textSizeXXLarge,
  composerFontSize: d.textSizeXXLarge
}]]);