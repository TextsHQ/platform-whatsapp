module.exports = function (e) {
  var t = this.has(e) && delete this.__data__[e];
  this.size -= t ? 1 : 0;
  return t;
};