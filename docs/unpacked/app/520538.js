Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultFavicon = function (e) {
  let {
    children: t
  } = e;
  (0, i.useEffect)(() => {
    (0, r.setTitleAndIcon)(0);
  }, []);
  return t;
};
exports.ErrorFavicon = function (e) {
  let {
    children: t
  } = e;
  (0, i.useEffect)(() => {
    (0, r.setTitleAndIcon)(-1);
  }, []);
  return t;
};
var r = require("./884127.js");
var i = require("../vendor/667294.js");