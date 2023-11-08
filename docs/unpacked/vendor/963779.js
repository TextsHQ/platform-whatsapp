module.exports = function (e) {
  var t = this.__data__;
  var n = t.delete(e);
  this.size = t.size;
  return n;
};