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
var vue_1 = require("vue");
var card_1 = require("primevue/card");
var button_1 = require("primevue/button");
var beach_mp4_1 = require("@/assets/video/beach.mp4");
var props = defineProps();
var beachVideoUrl = (0, vue_1.computed)(function () { return beach_mp4_1.default; });
var scrollToDashboard = function () {
    var _a, _b;
    var target = ((_a = props.dashboardRef) === null || _a === void 0 ? void 0 : _a.value) || ((_b = props.featuresRef) === null || _b === void 0 ? void 0 : _b.value);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['hero-video-container']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-scroll-button']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-title']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-content']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-title']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-content']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-scroll-button']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "hero-video-container" }));
__VLS_asFunctionalElement(__VLS_elements.video, __VLS_elements.video)(__assign({ class: "hero-video" }, { autoplay: true, muted: true, loop: true, playsinline: true }));
__VLS_asFunctionalElement(__VLS_elements.source)({
    src: (__VLS_ctx.beachVideoUrl),
    type: "video/mp4",
});
// @ts-ignore
[beachVideoUrl,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "hero-overlay" }));
var __VLS_0 = {}.Card;
/** @type {[typeof __VLS_components.Card, typeof __VLS_components.Card, ]} */ ;
// @ts-ignore
card_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "hero-content-card" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "hero-content-card" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = __VLS_3.slots.default;
{
    var __VLS_5 = __VLS_3.slots.content;
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "hero-content" }));
    __VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)(__assign({ class: "hero-title" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "hero-subtitle" }));
}
var __VLS_3;
var __VLS_6 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
button_1.default;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign(__assign(__assign({ 'onClick': {} }, { icon: "pi pi-arrow-down" }), { class: "hero-scroll-button" }), { text: true, rounded: true, size: "large", 'aria-label': "Scroll to dashboard" })));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { icon: "pi pi-arrow-down" }), { class: "hero-scroll-button" }), { text: true, rounded: true, size: "large", 'aria-label': "Scroll to dashboard" })], __VLS_functionalComponentArgsRest(__VLS_7), false));
var __VLS_10;
var __VLS_11;
var __VLS_12 = ({ click: {} },
    { onClick: (__VLS_ctx.scrollToDashboard) });
// @ts-ignore
[scrollToDashboard,];
var __VLS_9;
/** @type {__VLS_StyleScopedClasses['hero-video-container']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-video']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-content-card']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-content']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-title']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-scroll-button']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return ({
        Card: card_1.default,
        Button: button_1.default,
        beachVideoUrl: beachVideoUrl,
        scrollToDashboard: scrollToDashboard,
    }); },
    __typeProps: {},
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
