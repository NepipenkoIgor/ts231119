"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class Search {
    onSearch(e) {
        const value = e.target.value;
        console.log(value);
    }
}

__decorate([
    debounce(500)
], Search.prototype, "onSearch", null);
const search = new Search();
const input = document.querySelector('input');
input.addEventListener('input', search.onSearch);

function debounce(ms) {
    let timeoutId;
    return function (_target, _key, descriptor) {
        console.log(_target);
        console.log(_key);
        console.log(descriptor);
        const originalValue = descriptor.value;
        return {
            ...descriptor,
            value: (...args) => {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                timeoutId = setTimeout(() => {
                    originalValue(...args);
                }, ms);
            },
        };
    };
}
