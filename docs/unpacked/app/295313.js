Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var n = {
  ach: {
    name: "Acholi",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  af: {
    name: "Afrikaans",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ak: {
    name: "Akan",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  am: {
    name: "Amharic",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  an: {
    name: "Aragonese",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ar: {
    name: "Arabic",
    numbers: [0, 1, 2, 3, 11, 100],
    plurals: e => Number(e === 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
  },
  arn: {
    name: "Mapudungun",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  ast: {
    name: "Asturian",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ay: {
    name: "Aymará",
    numbers: [1],
    plurals: () => 0
  },
  az: {
    name: "Azerbaijani",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  be: {
    name: "Belarusian",
    numbers: [1, 2, 5],
    plurals: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
  },
  bg: {
    name: "Bulgarian",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  bn: {
    name: "Bengali",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  bo: {
    name: "Tibetan",
    numbers: [1],
    plurals: () => 0
  },
  br: {
    name: "Breton",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  bs: {
    name: "Bosnian",
    numbers: [1, 2, 5],
    plurals: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
  },
  ca: {
    name: "Catalan",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  cgg: {
    name: "Chiga",
    numbers: [1],
    plurals: () => 0
  },
  cs: {
    name: "Czech",
    numbers: [1, 2, 5],
    plurals: e => Number(e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2)
  },
  csb: {
    name: "Kashubian",
    numbers: [1, 2, 5],
    plurals: e => Number(e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
  },
  cy: {
    name: "Welsh",
    numbers: [1, 2, 3, 8],
    plurals: e => Number(e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3)
  },
  da: {
    name: "Danish",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  de: {
    name: "German",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  dz: {
    name: "Dzongkha",
    numbers: [1],
    plurals: () => 0
  },
  el: {
    name: "Greek",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  en: {
    name: "English",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  eo: {
    name: "Esperanto",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  es: {
    name: "Spanish",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  es_ar: {
    name: "Argentinean Spanish",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  et: {
    name: "Estonian",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  eu: {
    name: "Basque",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  fa: {
    name: "Persian",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  fi: {
    name: "Finnish",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  fil: {
    name: "Filipino",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  fo: {
    name: "Faroese",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  fr: {
    name: "French",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  fur: {
    name: "Friulian",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  fy: {
    name: "Frisian",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ga: {
    name: "Irish",
    numbers: [1, 2, 3, 7, 11],
    plurals: e => Number(e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
  },
  gd: {
    name: "Scottish Gaelic",
    numbers: [1, 2, 3, 20],
    plurals: e => Number(e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3)
  },
  gl: {
    name: "Galician",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  gu: {
    name: "Gujarati",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  gun: {
    name: "Gun",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  ha: {
    name: "Hausa",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  he: {
    name: "Hebrew",
    numbers: [1, 2, 20, 3],
    plurals: e => Number(e === 1 ? 0 : e === 2 ? 1 : e >= 20 && e % 10 == 0 ? 2 : 3)
  },
  hi: {
    name: "Hindi",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  hr: {
    name: "Croatian",
    numbers: [1, 2, 5],
    plurals: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
  },
  hu: {
    name: "Hungarian",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  hy: {
    name: "Armenian",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ia: {
    name: "Interlingua",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  id: {
    name: "Indonesian",
    numbers: [1],
    plurals: () => 0
  },
  is: {
    name: "Icelandic",
    numbers: [1, 2],
    plurals: e => Number(e % 10 != 1 || e % 100 == 11)
  },
  it: {
    name: "Italian",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ja: {
    name: "Japanese",
    numbers: [1],
    plurals: () => 0
  },
  jbo: {
    name: "Lojban",
    numbers: [1],
    plurals: () => 0
  },
  jv: {
    name: "Javanese",
    numbers: [0, 1],
    plurals: e => Number(e !== 0)
  },
  ka: {
    name: "Georgian",
    numbers: [1],
    plurals: () => 0
  },
  kk: {
    name: "Kazakh",
    numbers: [1],
    plurals: () => 0
  },
  km: {
    name: "Khmer",
    numbers: [1],
    plurals: () => 0
  },
  kn: {
    name: "Kannada",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ko: {
    name: "Korean",
    numbers: [1],
    plurals: () => 0
  },
  ku: {
    name: "Kurdish",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  kw: {
    name: "Cornish",
    numbers: [1, 2, 3, 4],
    plurals: e => Number(e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3)
  },
  ky: {
    name: "Kyrgyz",
    numbers: [1],
    plurals: () => 0
  },
  lb: {
    name: "Letzeburgesch",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ln: {
    name: "Lingala",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  lo: {
    name: "Lao",
    numbers: [1],
    plurals: () => 0
  },
  lt: {
    name: "Lithuanian",
    numbers: [1, 2, 10],
    plurals: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
  },
  lv: {
    name: "Latvian",
    numbers: [0, 1, 2],
    plurals: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2)
  },
  mai: {
    name: "Maithili",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  mfe: {
    name: "Mauritian Creole",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  mg: {
    name: "Malagasy",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  mi: {
    name: "Maori",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  mk: {
    name: "Macedonian",
    numbers: [1, 2],
    plurals: e => Number(e == 1 || e % 10 == 1 ? 0 : 1)
  },
  ml: {
    name: "Malayalam",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  mn: {
    name: "Mongolian",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  mnk: {
    name: "Mandinka",
    numbers: [0, 1, 2],
    plurals: e => Number(e === 0 ? 0 : e == 1 ? 1 : 2)
  },
  mr: {
    name: "Marathi",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ms: {
    name: "Malay",
    numbers: [1],
    plurals: () => 0
  },
  mt: {
    name: "Maltese",
    numbers: [1, 2, 11, 20],
    plurals: e => Number(e == 1 ? 0 : e === 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
  },
  nah: {
    name: "Nahuatl",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  nap: {
    name: "Neapolitan",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  nb: {
    name: "Norwegian Bokmal",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ne: {
    name: "Nepali",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  nl: {
    name: "Dutch",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  nn: {
    name: "Norwegian Nynorsk",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  no: {
    name: "Norwegian",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  nso: {
    name: "Northern Sotho",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  oc: {
    name: "Occitan",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  or: {
    name: "Oriya",
    numbers: [2, 1],
    plurals: e => Number(e != 1)
  },
  pa: {
    name: "Punjabi",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  pap: {
    name: "Papiamento",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  pl: {
    name: "Polish",
    numbers: [1, 2, 5],
    plurals: e => Number(e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
  },
  pms: {
    name: "Piemontese",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ps: {
    name: "Pashto",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  pt: {
    name: "Portuguese",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  "pt-BR": {
    name: "Brazilian Portuguese",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  rm: {
    name: "Romansh",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ro: {
    name: "Romanian",
    numbers: [1, 2, 20],
    plurals: e => Number(e == 1 ? 0 : e === 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
  },
  ru: {
    name: "Russian",
    numbers: [1, 2, 5],
    plurals: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
  },
  sah: {
    name: "Yakut",
    numbers: [1],
    plurals: () => 0
  },
  sco: {
    name: "Scots",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  se: {
    name: "Northern Sami",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  si: {
    name: "Sinhala",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  sk: {
    name: "Slovak",
    numbers: [1, 2, 5],
    plurals: e => Number(e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2)
  },
  sl: {
    name: "Slovenian",
    numbers: [5, 1, 2, 3],
    plurals: e => Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
  },
  so: {
    name: "Somali",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  son: {
    name: "Songhay",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  sq: {
    name: "Albanian",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  sr: {
    name: "Serbian",
    numbers: [1, 2, 5],
    plurals: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
  },
  su: {
    name: "Sundanese",
    numbers: [1],
    plurals: () => 0
  },
  sv: {
    name: "Swedish",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  sw: {
    name: "Swahili",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  ta: {
    name: "Tamil",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  te: {
    name: "Telugu",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  tg: {
    name: "Tajik",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  th: {
    name: "Thai",
    numbers: [1],
    plurals: () => 0
  },
  ti: {
    name: "Tigrinya",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  tk: {
    name: "Turkmen",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  tr: {
    name: "Turkish",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  tt: {
    name: "Tatar",
    numbers: [1],
    plurals: () => 0
  },
  ug: {
    name: "Uyghur",
    numbers: [1],
    plurals: () => 0
  },
  uk: {
    name: "Ukrainian",
    numbers: [1, 2, 5],
    plurals: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
  },
  ur: {
    name: "Urdu",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  uz: {
    name: "Uzbek",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  vi: {
    name: "Vietnamese",
    numbers: [1],
    plurals: () => 0
  },
  wa: {
    name: "Walloon",
    numbers: [1, 2],
    plurals: e => Number(e > 1)
  },
  wo: {
    name: "Wolof",
    numbers: [1],
    plurals: () => 0
  },
  yo: {
    name: "Yoruba",
    numbers: [1, 2],
    plurals: e => Number(e != 1)
  },
  zh: {
    name: "Chinese",
    numbers: [1],
    plurals: () => 0
  }
};
exports.default = n;