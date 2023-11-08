Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSuspiciousCharacters = function (e, t, n, s) {
  const l = e.split(".");
  let p;
  let f = false;
  l.forEach(e => {
    f = !e.match(d);
    if (f) {
      if (p) {
        return null;
      }
      p = e;
    }
  });
  if (p == null || f) {
    return null;
  }
  const _ = [];
  let g = true;
  const m = (0, i.toArray)(p);
  for (let e = 0; e < m.length; e++) {
    const t = m[e];
    g = g && c(t);
    if (!g && a[t]) {
      if (_.length >= 2) {
        return null;
      }
      _.push(t);
    }
  }
  if (g) {
    if (u(n) || u(t) || s.some(e => function (e) {
      return o.has(e);
    }(e))) {
      return null;
    } else {
      return new Set(m);
    }
  }
  if (!_.length) {
    return null;
  }
  const h = _.filter(e => {
    const i = a[e];
    if (i == null) {
      return false;
    }
    if (s.some(e => i.includes(e))) {
      return false;
    }
    const o = new Set();
    for (let e = 0; e < i.length; e++) {
      const t = r.LANGUAGE_TO_REGIONS[i[e]];
      if (t != null) {
        for (let e = 0; e < t.length; e++) {
          o.add(t[e]);
        }
      }
    }
    return !o.has(n) && !o.has(t);
  });
  if (h.length) {
    return new Set(h);
  } else {
    return null;
  }
};
var r = require("./558700.js");
var i = require("./849360.js");
const a = {
  í: ["ast", "ksf", "bas", "ca", "cs", "dua", "nl", "ee", "ewo", "fo", "fr", "gl", "kl", "hu", "is", "ga", "dyo", "kea", "kkj", "nmg", "lkt", "lag", "ln", "lu", "mas", "nnh", "jgo", "pt", "qu", "seh", "sk", "es", "to", "vai", "vi", "wae", "cy", "fy", "yav", "yo"],
  î: ["af", "agq", "bss", "bfd", "bas", "bkv", "btt", "nl", "igb", "ewo", "fr", "fur", "gaj", "gby", "kl", "jab", "atg", "jbu", "kkj", "naq", "ksh", "ku", "nmb", "lmp", "ln", "mda", "mg", "mas", "mzm", "jgo", "nin", "ann", "ro", "sg", "scn", "srn", "yer", "tr", "wa", "cy", "yav", "yle"],
  ü: ["agg", "ast", "az", "br", "ca", "co", "cs", "nl", "etr", "et", "fr", "gl", "de", "tof", "god", "hu", "tbd", "geb", "ksh", "kup", "nds", "lb", "arn", "oc", "sg", "sk", "es", "gsw", "dts", "tr", "tk", "vo", "wa", "wae", "fy", "yll"],
  ċ: ["mt"],
  ī: ["agq", "bss", "bfd", "bas", "bkv", "btt", "ddn", "igb", "kjy", "ich", "gux", "haw", "jab", "iby", "idu", "jbu", "kub", "nmg", "lv", "mda", "mi", "mas", "mql", "nin", "prg", "gd", "to", "yba", "yav"],
  ı: ["az", "crh", "tr"],
  ļ: ["lv"],
  ł: ["dsb", "nv", "pl", "hsb"],
  š: ["bs", "hr", "cs", "dzg", "et", "fi", "smn", "geb", "khq", "ses", "kun", "lkt", "lv", "lt", "dsb", "se", "nso", "prg", "sr", "sh", "sms", "sk", "sl", "taq", "twq", "tuq", "hsb", "wqe", "dje"],
  ƙ: ["ckl", "ank", "ha", "ikx", "kai", "hia", "mbu", "anc", "nin", "pip", "tal", "tan", "wja", "wji"],
  ǀ: ["naq"],
  ǁ: ["naq"],
  ȯ: ["liv"],
  ɑ: ["fmp", "dud", "tmh"],
  ɓ: ["fub", "yay", "bkc", "bjt", "bcn", "bas", "bsq", "bmq", "fue", "bys", "bwr", "cky", "fuq", "ckl", "asg", "dbq", "dnj", "dgh", "dow", "dua", "enn", "ff", "gby", "gba", "gmm", "ank", "gde", "gkp", "jgk", "ha", "hbb", "ikx", "kkj", "hig", "kzr", "kai", "kpe", "nmg", "hia", "ffm", "mbo", "mbu", "mif", "mzm", "mua", "sur", "anc", "fuv", "nin", "dgi", "pbi", "pip", "fuf", "cla", "sav", "srr", "sld", "sok", "tal", "tan", "yer", "ttr", "tik", "kdl", "tsw", "vai", "vut", "wja", "wji", "fuh", "gnd"],
  ḍ: ["tzm", "kab", "okr", "shi", "tmh", "taq"],
  ṛ: ["tzm", "kab", "shi"],
  ṭ: ["tzm", "kab", "shi", "tmh", "taq"],
  ẉ: [],
  ạ: ["izi", "yaz", "blt", "vi"],
  ẹ: ["yay", "bom", "bin", "mfn", "dzg", "igb", "enn", "gkn", "iby", "ikk", "ikw", "izi", "okr", "yaz", "blt", "tan", "tuq", "vi", "yo"],
  ị: ["avu", "mfn", "igb", "enn", "iby", "ig", "ige", "ikk", "ikw", "izi", "okr", "blt", "tan", "vi"]
};
const o = new Set(["abq", "ab", "ady", "av", "az", "ba", "be", "bs", "bg", "bua", "ce", "ckt", "cu", "cv", "crh", "dar", "dng", "myv", "evn", "gag", "inh", "kbd", "xal", "krc", "kaa", "kk", "kjh", "kca", "ky", "kv", "koi", "kpy", "kum", "lbe", "lez", "mk", "mns", "chm", "mdf", "mn", "ttt", "gld", "yrk", "nog", "os", "ru", "rue", "sr", "sh", "cjs", "alt", "tab", "tg", "tt", "tkr", "tk", "tyv", "ude", "udm", "uk", "uz", "mrj", "sah"]);
const s = new Set(["374", "994", "375", "387", "359", "995", "7", "383", "996", "389", "373", "976", "382", "381", "992", "993", "380", "998"]);
const l = "авгекмнорстухшщьѕіјѡѵүһӏԁԛԝԧꚙ";
function u(e) {
  return s.has(e);
}
function c(e) {
  return l.includes(e);
}
const d = new RegExp("^[a-z0-9-]+$");