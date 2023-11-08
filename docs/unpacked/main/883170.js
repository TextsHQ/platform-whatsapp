Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playEndPttTone = function () {
  u(i);
};
exports.playMidPttTone = function () {
  u(l);
};
var a = require("../app/971804.js");
const r = require("./663320.js");
const o = require("./516663.js");
const l = new window.Audio(o);
const i = new window.Audio(r);
function u(e) {
  if (a.MuteCollection.getGlobalSounds()) {
    e.play();
  }
}