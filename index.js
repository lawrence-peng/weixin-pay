
var WXPay = require('./lib/payment');

WXPay.mix('Util', require('./lib/util'));

module.exports = WXPay;