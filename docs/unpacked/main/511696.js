var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoPickerLoadable = function (e) {
  switch (e.type) {
    case c.PhotoPickerType.NEWSLETTER:
    case c.PhotoPickerType.GROUP:
    case c.PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP:
    case c.PhotoPickerType.GENERAL_GROUP:
      return d.default.createElement(m, (0, r.default)({}, e, {
        testid: "group-pic-picker"
      }));
    case c.PhotoPickerType.COMMUNITY:
      return d.default.createElement(h, (0, r.default)({}, e, {
        testid: "community-pic-picker"
      }));
    case c.PhotoPickerType.PROFILE:
      return d.default.createElement(p, (0, r.default)({}, e, {
        testid: "profile-pic-picker"
      }));
    case c.PhotoPickerType.COVER_PHOTO:
      return d.default.createElement(g, (0, r.default)({}, e, {
        testid: "cover-photo-picker"
      }));
  }
};
exports.requireBundle = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/348926.js"));
var l = a(require("./114945.js"));
var i = a(require("../app/97359.js"));
var u = a(require("./205106.js"));
var s = a(require("./989427.js"));
var c = require("./588792.js");
var d = a(require("../vendor/667294.js"));
const f = (0, u.default)((0, o.default)(function* () {
  const e = yield Promise.all([require.e(8295), require.e(1702), require.e(9488), require.e(2790), require.e(275)]).then(require.bind(require, 127044));
  return (0, i.default)(e);
}), "PhotoPicker");
exports.requireBundle = f;
const p = (0, l.default)({
  loader: f,
  loading: e => d.default.createElement(s.default, {
    svgName: "default-user",
    error: Boolean(e.error),
    retry: e.retry
  })
});
const m = (0, l.default)({
  loader: f,
  loading: e => d.default.createElement(s.default, {
    svgName: "default-group",
    error: Boolean(e.error),
    retry: e.retry
  })
});
const h = (0, l.default)({
  loader: f,
  loading: e => d.default.createElement(s.default, {
    svgName: "default-group",
    error: Boolean(e.error),
    retry: e.retry
  })
});
const g = (0, l.default)({
  loader: f,
  loading: e => d.default.createElement(s.default, {
    error: Boolean(e.error),
    retry: e.retry
  })
});