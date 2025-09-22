"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var logo_png_1 = require("@/assets/logo.png");
var logoUrl = logo_png_1.default;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['navbar-brand']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-brand']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-container']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-text']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-text']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-brand']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button-label']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-brand']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-brand']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-actions']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)(__assign({ class: "navbar-wrapper" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "navbar-container" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign(__assign(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.$router.push('/');
        // @ts-ignore
        [$router,];
    } }, { onKeydown: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.$router.push('/');
        // @ts-ignore
        [$router,];
    } }), { onKeydown: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.$router.push('/');
        // @ts-ignore
        [$router,];
    } }), { class: "navbar-brand" }), { role: "button", tabindex: "0" }));
if (__VLS_ctx.logoUrl) {
    // @ts-ignore
    [logoUrl,];
    var __VLS_0 = {}.Avatar;
    /** @type {[typeof __VLS_components.Avatar, ]} */ ;
    // @ts-ignore
    Avatar;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ image: (__VLS_ctx.logoUrl), size: "normal", shape: "circle" }, { class: "brand-logo" }), { 'aria-label': "Logo" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ image: (__VLS_ctx.logoUrl), size: "normal", shape: "circle" }, { class: "brand-logo" }), { 'aria-label': "Logo" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    // @ts-ignore
    [logoUrl,];
}
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "brand-text" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "navbar-actions" }));
var __VLS_5 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign({ 'onClick': {} }, { label: "Home", icon: "pi pi-home", severity: "secondary", outlined: true, size: "small", 'aria-label': "Navigate to Home page" })));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { label: "Home", icon: "pi pi-home", severity: "secondary", outlined: true, size: "small", 'aria-label': "Navigate to Home page" })], __VLS_functionalComponentArgsRest(__VLS_6), false));
var __VLS_9;
var __VLS_10;
var __VLS_11 = ({ click: {} },
    { onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.$router.push('/');
            // @ts-ignore
            [$router,];
        } });
var __VLS_8;
var __VLS_13 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13(__assign({ 'onClick': {} }, { label: "Safety", icon: "pi pi-shield", severity: "secondary", outlined: true, size: "small", 'aria-label': "Navigate to Safety page" })));
var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { label: "Safety", icon: "pi pi-shield", severity: "secondary", outlined: true, size: "small", 'aria-label': "Navigate to Safety page" })], __VLS_functionalComponentArgsRest(__VLS_14), false));
var __VLS_17;
var __VLS_18;
var __VLS_19 = ({ click: {} },
    { onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.$router.push('/safety');
            // @ts-ignore
            [$router,];
        } });
var __VLS_16;
var __VLS_21 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21(__assign({ 'onClick': {} }, { label: "Predict", icon: "pi pi-chart-line", severity: "secondary", outlined: true, size: "small", 'aria-label': "Navigate to Predict page" })));
var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { label: "Predict", icon: "pi pi-chart-line", severity: "secondary", outlined: true, size: "small", 'aria-label': "Navigate to Predict page" })], __VLS_functionalComponentArgsRest(__VLS_22), false));
var __VLS_25;
var __VLS_26;
var __VLS_27 = ({ click: {} },
    { onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.$router.push('/predict');
            // @ts-ignore
            [$router,];
        } });
var __VLS_24;
var __VLS_29 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29(__assign({ 'onClick': {} }, { label: "Education", icon: "pi pi-book", severity: "secondary", outlined: true, size: "small", 'aria-label': "Navigate to Education page" })));
var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { label: "Education", icon: "pi pi-book", severity: "secondary", outlined: true, size: "small", 'aria-label': "Navigate to Education page" })], __VLS_functionalComponentArgsRest(__VLS_30), false));
var __VLS_33;
var __VLS_34;
var __VLS_35 = ({ click: {} },
    { onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.$router.push('/education');
            // @ts-ignore
            [$router,];
        } });
var __VLS_32;
/** @type {__VLS_StyleScopedClasses['navbar-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-container']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-brand']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-text']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-actions']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return ({
        logoUrl: logoUrl,
    }); },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
