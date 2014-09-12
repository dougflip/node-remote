"use strict";

// polyfill bind for phantomJS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
// https://github.com/ariya/phantomjs/issues/10522
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function () {},
            fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis
                        ? this
                        : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}

function isFunction(obj){
    return typeof obj === 'function';
}

function buildInstance(obj){
    obj = Array.isArray(obj) ? obj[obj.length - 1] : obj;
    return (obj.constructor === Function) ? new obj() : obj;
}

function createDefaultValue(obj, key){
    if(isFunction(obj)) return jasmine.createSpy(key);

    return (Array.isArray(obj)) ? [] : null;
}

function createNullMock(obj){
    var mock = {};
    var instance = buildInstance(obj);
    for(var key in instance){
        mock[key] = createDefaultValue(instance[key], key);
    }
    return mock;
}

module.exports = createNullMock;
