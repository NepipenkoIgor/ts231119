"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var period = 60;
var baseUrl = 'http://localhost';
var firstName = 'Ihor';
var account = {
    firstName: firstName,
    getName: function () {
        return this.firstName;
    },
};
var person = __assign({}, account);
var dates = [11, 12, 13];
var myName = person.firstName;
var firstDate = dates[0];
for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
    var d = dates_1[_i];
    console.log(d);
}
var sum = function (a, b) { return a + b; };
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
function userMessage(_a, _b) {
    var start = _a[0], end = _a[1];
    var name = _b.firstName;
    return "" + start + name + end;
}
console.log(userMessage(__makeTemplateObject(["Good day, ", " !!"], ["Good day, ", " !!"]), person));
var date = dates.includes(1);
