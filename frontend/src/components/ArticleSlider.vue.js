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
var carousel_1 = require("primevue/carousel");
var props = defineProps();
// Import article visuals (placeholders from assets)
// Using Vite alias '@' to resolve to /src
var badwater_jpg_1 = require("@/assets/article/badwater.jpg");
var badwater2_jpg_1 = require("@/assets/article/badwater2.jpg");
var badwater3_jpg_1 = require("@/assets/article/badwater3.jpg");
var swimbanned_jpg_1 = require("@/assets/article/swimbanned.jpg");
var wateract_jpg_1 = require("@/assets/article/wateract.jpg");
var images = [badwater_jpg_1.default, badwater2_jpg_1.default, badwater3_jpg_1.default, swimbanned_jpg_1.default, wateract_jpg_1.default];
// Chunk articles into groups so each slide contains up to 4 items
var groupSize = 4;
var slides = (0, vue_1.computed)(function () {
    var arr = [];
    var groupIndex = 0;
    for (var i = 0; i < props.articles.length; i += groupSize) {
        var items = props.articles.slice(i, i + groupSize);
        var image = images[groupIndex % images.length];
        arr.push({ items: items, image: image });
        groupIndex++;
    }
    return arr.filter(function (g) { return g.items.length > 0; });
});
// Responsive: smaller screens still show one slide at a time; content inside adapts grid
var responsiveOptions = [
    { breakpoint: '1200px', numVisible: 1, numScroll: 1 },
    { breakpoint: '992px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['sublink']} */ ;
/** @type {__VLS_StyleScopedClasses['sublink']} */ ;
/** @type {__VLS_StyleScopedClasses['feature']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-img']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder']} */ ;
/** @type {__VLS_StyleScopedClasses['sublinks']} */ ;
/** @type {__VLS_StyleScopedClasses['feature']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-img']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder']} */ ;
/** @type {__VLS_StyleScopedClasses['sublinks']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "article-slider" }));
var __VLS_0 = {}.Carousel;
/** @type {[typeof __VLS_components.Carousel, typeof __VLS_components.Carousel, ]} */ ;
// @ts-ignore
carousel_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    value: (__VLS_ctx.slides),
    numVisible: (1),
    numScroll: (1),
    circular: (true),
    autoplayInterval: (5500),
    showIndicators: (true),
    showNavigators: (true),
    responsiveOptions: (__VLS_ctx.responsiveOptions),
    dataTestid: "article-carousel",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        value: (__VLS_ctx.slides),
        numVisible: (1),
        numScroll: (1),
        circular: (true),
        autoplayInterval: (5500),
        showIndicators: (true),
        showNavigators: (true),
        responsiveOptions: (__VLS_ctx.responsiveOptions),
        dataTestid: "article-carousel",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = __VLS_3.slots.default;
// @ts-ignore
[slides, responsiveOptions,];
{
    var __VLS_5 = __VLS_3.slots.item;
    var slotProps = __VLS_getSlotParameters(__VLS_5)[0];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "slide-card" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "feature" }));
    if (slotProps.data.image) {
        __VLS_asFunctionalElement(__VLS_elements.img)(__assign({ class: "hero-img" }, { src: (slotProps.data.image), alt: "article visual" }));
    }
    else {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "placeholder" }, { role: "img", 'aria-label': "article image placeholder" }));
    }
    __VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)(__assign({ class: "title" }, { href: (slotProps.data.items[0].url), target: "_blank", rel: "noopener noreferrer" }));
    (slotProps.data.items[0].title);
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "sublinks" }));
    for (var _i = 0, _a = __VLS_getVForSourceType((slotProps.data.items.slice(1))); _i < _a.length; _i++) {
        var _b = _a[_i], a = _b[0], idx = _b[1];
        __VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)(__assign(__assign({ key: (idx) }, { class: "sublink" }), { href: (a.url), target: "_blank", rel: "noopener noreferrer", title: (a.title) }));
        (a.title);
    }
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['article-slider']} */ ;
/** @type {__VLS_StyleScopedClasses['slide-card']} */ ;
/** @type {__VLS_StyleScopedClasses['feature']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-img']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['sublinks']} */ ;
/** @type {__VLS_StyleScopedClasses['sublink']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return ({
        Carousel: carousel_1.default,
        slides: slides,
        responsiveOptions: responsiveOptions,
    }); },
    __typeProps: {},
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
