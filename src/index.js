"use strict";
var Singleton = (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    };
    return Singleton;
}());
var inst1 = Singleton.getInstance();
var inst2 = Singleton.getInstance();
var inst3 = Singleton.getInstance();
