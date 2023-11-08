var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePicker = function (e) {
  let {
    onDateSelected: t,
    minDate: n,
    maxDate: a
  } = e;
  const {
    isKeyboardUser: c
  } = (0, o.default)();
  return l.default.createElement("div", {
    className: (0, u.default)(s.calendarOverride, c && s.focusStyles)
  }, l.default.createElement(i.default, {
    minDate: n,
    maxDate: a,
    onClickDay: t,
    minDetail: "month",
    locale: r.default.getLocale()
  }));
};
var r = a(require("../app/932325.js"));
var o = a(require("../app/395967.js"));
var l = a(require("../vendor/667294.js"));
var i = a(require("../vendors-main/593702.js"));
var u = a(require("../app/156720.js"));
const s = {
  calendarOverride: {
    ":first-child > .react-calendar": {
      width: "fic3vdu6",
      maxWidth: "aj9kv3bb",
      backgroundColor: "q3n2s85n",
      lineHeight: "ao6nldv4",
      boxSizing: "dushf9wy",
      borderTopStartRadius: "njkcohmn",
      borderTopEndRadius: "p1eo0xqw",
      borderBottomEndRadius: "jox2dw0b",
      borderBottomStartRadius: "qyxltceu",
      paddingBottom: "dlfettko"
    },
    ":first-child .react-calendar__tile--now": {
      backgroundColor: "k9iznvuq",
      borderTopStartRadius: "tgk8uyu0",
      borderTopEndRadius: "rx71yfjh",
      borderBottomEndRadius: "fnz69nvk",
      borderBottomStartRadius: "t3xspxal"
    },
    ":first-child .react-calendar__tile:disabled": {
      color: "m4aus8ch",
      cursor: "ngk621b7"
    },
    ":first-child .react-calendar__month-view__weekdays__weekday": {
      textAlign: "m9y6tsw0"
    },
    ":first-child .react-calendar__tile--now.react-calendar__month-view__days__day": {
      backgroundColor: "lnntzwet"
    },
    ":first-child .react-calendar__tile--now.react-calendar__month-view__days__day > abbr": {
      backgroundColor: "jza30ywr",
      borderTop: "kjj1hjrb",
      borderEnd: "jpbgmnpt",
      borderBottom: "s69zemrm",
      borderStart: "memh9ved",
      borderTopStartRadius: "aa7x11av",
      borderTopEndRadius: "j22e55a0",
      borderBottomEndRadius: "d98ggc3q",
      borderBottomStartRadius: "g74p79s9",
      color: "l969ayz1",
      display: "fj0k1yyw",
      width: "bl6okvi4",
      height: "iu0c551c",
      textAlign: "sxt2zk5z",
      lineHeight: "flzi81k7"
    },
    ":first-child .react-calendar__month-view__days__day": {
      fontSize: "cb0kv3ai"
    },
    ":first-child .react-calendar__month-view__weekdays__weekday > abbr": {
      fontSize: "bcjqek5m",
      textDecoration: "ry5uqzbq"
    },
    ":first-child button": {
      marginTop: "boyw0wbw",
      marginEnd: "jxla72it",
      marginBottom: "min1pi81",
      marginStart: "q7xbznqa",
      borderTop: "ow74au0v",
      borderEnd: "ekdhrn54",
      borderBottom: "dsypz41m",
      borderStart: "oxnvcqmb",
      outline: "ttwrg0zs",
      color: "llsqrhk1"
    },
    ":first-child button:enabled:hover": {
      cursor: "tbuexh9w"
    },
    ":first-child .react-calendar__navigation": {
      display: "stx8hvir",
      height: "ei9nez5s",
      marginBottom: "g2ua8t28",
      backgroundColor: "mv6dw2ws",
      color: "g6ss30c7",
      borderTopStartRadius: "qdmh2l7a",
      borderTopEndRadius: "n43zlivz",
      borderBottomEndRadius: "lhh3o5zj",
      borderBottomStartRadius: "b2zx3qf2"
    },
    ":first-child .react-calendar__navigation__label__labelText": {
      color: "of9qi5lf"
    },
    ":first-child .react-calendar__navigation__arrow": {
      minWidth: "sdcizmqq",
      background: "mmju4wo2",
      color: "j1pcgazo",
      display: "ot2natm9",
      alignItems: "go6ai9xr",
      justifyContent: "c9slr3je",
      fontSize: "qjz0p0fa",
      fontWeight: "tzm88dno"
    },
    ":first-child .react-calendar__navigation__arrow:disabled": {
      color: "gnwjjt0j",
      cursor: "ni0yjct9"
    },
    ":first-child .react-calendar__navigation__arrow:enabled:hover": {
      opacity: "h4lo89le"
    },
    ":first-child .react-calendar__month-view__days__day--neighboringMonth": {
      color: "dyd6b3gd"
    },
    ":first-child .react-calendar__year-view > .react-calendar__tile": {
      paddingTop: "spsy193p",
      paddingEnd: "qwz0wwi0",
      paddingBottom: "ofa17cmp",
      paddingStart: "pijnfy3a"
    },
    ":first-child .react-calendar__decade-view  > .react-calendar__tile": {
      paddingTop: "tnxq4igy",
      paddingEnd: "ca7desoo",
      paddingBottom: "dza0g1uc",
      paddingStart: "hk0pz77x"
    },
    ":first-child .react-calendar__century-view  > .react-calendar__tile": {
      paddingTop: "k6t4tz20",
      paddingEnd: "k8bbf2z4",
      paddingBottom: "e93t6fsc",
      paddingStart: "ediln70g"
    },
    ":first-child .react-calendar__tile": {
      maxWidth: "i840feut",
      paddingTop: "qc5aoaqy",
      paddingEnd: "fcvp7hhh",
      paddingBottom: "s2touqi7",
      paddingStart: "qoo6ly4w",
      background: "imseo511",
      textAlign: "fyhfaw2j",
      lineHeight: "e4lx3tk5"
    },
    ":first-child .react-calendar__navigation__prev2-button": {
      visibility: "mh1evk2c"
    },
    ":first-child .react-calendar__navigation__next2-button": {
      visibility: "ichcpqbo"
    }
  },
  focusStyles: {
    ":first-child button:focus": {
      boxShadow: "bd6jhgjz"
    }
  }
};