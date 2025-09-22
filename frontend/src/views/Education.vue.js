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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var selected = (0, vue_1.ref)(null);
var selectItem = function (item) { return (selected.value = item); };
var speak = function (text) {
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
};
// ✅ Image imports
var sodium_png_1 = require("@/assets/edu/minerals/sodium.png");
var chloride_png_1 = require("@/assets/edu/minerals/chloride.png");
var magnesium_png_1 = require("@/assets/edu/minerals/magnesium.png");
var calcium_png_1 = require("@/assets/edu/minerals/calcium.png");
var potassium_png_1 = require("@/assets/edu/minerals/potassium.png");
var sulfate_png_1 = require("@/assets/edu/minerals/sulfate.png");
var oxygen_png_1 = require("@/assets/edu/minerals/oxygen.png");
var carbon_dioxide_png_1 = require("@/assets/edu/minerals/carbon-dioxide.png");
var e_coli_png_1 = require("@/assets/edu/diseases/e-coli.png");
var legionella_png_1 = require("@/assets/edu/diseases/legionella.png");
var giardia_png_1 = require("@/assets/edu/diseases/giardia.png");
var cholera_png_1 = require("@/assets/edu/diseases/cholera.png");
var salmonella_png_1 = require("@/assets/edu/diseases/salmonella.png");
var spirillum_png_1 = require("@/assets/edu/bacteria/spirillum.png");
var xenophilius_png_1 = require("@/assets/edu/bacteria/xenophilius.png");
var methylobacterium_png_1 = require("@/assets/edu/bacteria/methylobacterium.png");
var rhodococcus_png_1 = require("@/assets/edu/bacteria/rhodococcus.png");
// ✅ Data arrays
var minerals = [
    { title: "Sodium (Na⁺)", pron: "SO-dee-um", blurb: "Hi, I’m Sodium! I love to join with Chloride...", img: sodium_png_1.default },
    { title: "Chloride (Cl⁻)", pron: "KLOR-ide", blurb: "Hello, I’m Chloride! I’m Sodium’s best friend...", img: chloride_png_1.default },
    { title: "Magnesium (Mg²⁺)", pron: "Mag-NEE-zee-um", blurb: "Hi, I’m Magnesium! I keep the ocean healthy...", img: magnesium_png_1.default },
    { title: "Calcium (Ca²⁺)", pron: "KAL-see-um", blurb: "Hi, I’m Calcium! Shells, corals, and crabs love me...", img: calcium_png_1.default },
    { title: "Potassium (K⁺)", pron: "Puh-TASS-ee-um", blurb: "Hey, I’m Potassium! I’m also in bananas...", img: potassium_png_1.default },
    { title: "Sulfate (SO₄²⁻)", pron: "SUL-fate", blurb: "Hi, I’m Sulfate! I float around in seawater...", img: sulfate_png_1.default },
    { title: "Oxygen (O₂)", pron: "OK-si-jen", blurb: "Hi, I’m Oxygen! Fish and crabs breathe me...", img: oxygen_png_1.default },
    { title: "Carbon Dioxide (CO₂)", pron: "KAR-bun Dye-ox-side", blurb: "Hello, I’m Carbon Dioxide! Sea plants use me...", img: carbon_dioxide_png_1.default }
];
var diseases = [
    { title: "E. coli", pron: "Ee KO-lie", blurb: "I live in tummies. Some naughty kinds can cause tummy aches.", img: e_coli_png_1.default },
    { title: "Legionella", pron: "LEE-juh-nel-uh", blurb: "I like warm water in hot tubs and pipes.", img: legionella_png_1.default },
    { title: "Giardia", pron: "JEE-ar-dee-uh", blurb: "I live in lakes and cause tummy bugs.", img: giardia_png_1.default },
    { title: "Cholera", pron: "KOL-uh-ruh", blurb: "I sneak into dirty water and cause watery diarrhea.", img: cholera_png_1.default },
    { title: "Salmonella", pron: "SAL-muh-nel-uh", blurb: "I hang out on raw food and cause food poisoning.", img: salmonella_png_1.default }
];
var bacteria = [
    { title: "Spirillum", pron: "Spy-RILL-um", blurb: "I twirl like a corkscrew and live in water.", img: spirillum_png_1.default },
    { title: "Xenophilius", pron: "ZEN-oh-fill-us", blurb: "A recycling helper living in tricky places.", img: xenophilius_png_1.default },
    { title: "Methylobacterium", pron: "METH-ih-low-bak-TEER-ee-um", blurb: "Lives on plants and helps them grow.", img: methylobacterium_png_1.default },
    { title: "Rhodococcus", pron: "ROW-doe-kok-us", blurb: "Breaks down oily pollution, cleaning up the environment.", img: rhodococcus_png_1.default }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['page-background']} */ ;
/** @type {__VLS_StyleScopedClasses['education-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['education-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['education-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['edu-card']} */ ;
/** @type {__VLS_StyleScopedClasses['edu-card']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.main, __VLS_elements.main)(__assign({ class: "education-wrapper" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "page-background" }));
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "carousel" }));
var _loop_1 = function (item, index) {
    // @ts-ignore
    [minerals,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.selectItem(item);
            // @ts-ignore
            [selectItem,];
        } }, { key: (index) }), { class: "edu-card" }));
    __VLS_asFunctionalElement(__VLS_elements.img)(__assign({ src: (item.img), alt: (item.title) }, { class: "edu-img" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "edu-info" }));
    __VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({});
    (item.title);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "pron" }));
    (item.pron);
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.speak(item.pron);
            // @ts-ignore
            [speak,];
        } }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "blurb" }));
    (item.blurb);
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.minerals)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    _loop_1(item, index);
}
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "carousel" }));
var _loop_2 = function (item, index) {
    // @ts-ignore
    [diseases,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.selectItem(item);
            // @ts-ignore
            [selectItem,];
        } }, { key: (index) }), { class: "edu-card" }));
    __VLS_asFunctionalElement(__VLS_elements.img)(__assign({ src: (item.img), alt: (item.title) }, { class: "edu-img" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "edu-info" }));
    __VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({});
    (item.title);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "pron" }));
    (item.pron);
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.speak(item.pron);
            // @ts-ignore
            [speak,];
        } }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "blurb" }));
    (item.blurb);
};
for (var _c = 0, _d = __VLS_getVForSourceType((__VLS_ctx.diseases)); _c < _d.length; _c++) {
    var _e = _d[_c], item = _e[0], index = _e[1];
    _loop_2(item, index);
}
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "carousel" }));
var _loop_3 = function (item, index) {
    // @ts-ignore
    [bacteria,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.selectItem(item);
            // @ts-ignore
            [selectItem,];
        } }, { key: (index) }), { class: "edu-card" }));
    __VLS_asFunctionalElement(__VLS_elements.img)(__assign({ src: (item.img), alt: (item.title) }, { class: "edu-img" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "edu-info" }));
    __VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({});
    (item.title);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "pron" }));
    (item.pron);
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.speak(item.pron);
            // @ts-ignore
            [speak,];
        } }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "blurb" }));
    (item.blurb);
};
for (var _f = 0, _g = __VLS_getVForSourceType((__VLS_ctx.bacteria)); _f < _g.length; _f++) {
    var _h = _g[_f], item = _h[0], index = _h[1];
    _loop_3(item, index);
}
if (__VLS_ctx.selected) {
    // @ts-ignore
    [selected,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.selected))
                return;
            __VLS_ctx.selected = null;
            // @ts-ignore
            [selected,];
        } }, { class: "overlay" }));
    __VLS_asFunctionalElement(__VLS_elements.img)(__assign({ src: (__VLS_ctx.selected.img) }, { class: "overlay-img" }));
    // @ts-ignore
    [selected,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "overlay-text" }));
    __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
    (__VLS_ctx.selected.title);
    // @ts-ignore
    [selected,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.selected.pron);
    // @ts-ignore
    [selected,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    (__VLS_ctx.selected.blurb);
    // @ts-ignore
    [selected,];
}
__VLS_asFunctionalElement(__VLS_elements.footer, __VLS_elements.footer)(__assign({ class: "footer" }));
__VLS_asFunctionalElement(__VLS_elements.small, __VLS_elements.small)({});
__VLS_asFunctionalElement(__VLS_elements.small, __VLS_elements.small)({});
/** @type {__VLS_StyleScopedClasses['education-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['page-background']} */ ;
/** @type {__VLS_StyleScopedClasses['carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['edu-card']} */ ;
/** @type {__VLS_StyleScopedClasses['edu-img']} */ ;
/** @type {__VLS_StyleScopedClasses['edu-info']} */ ;
/** @type {__VLS_StyleScopedClasses['pron']} */ ;
/** @type {__VLS_StyleScopedClasses['blurb']} */ ;
/** @type {__VLS_StyleScopedClasses['carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['edu-card']} */ ;
/** @type {__VLS_StyleScopedClasses['edu-img']} */ ;
/** @type {__VLS_StyleScopedClasses['edu-info']} */ ;
/** @type {__VLS_StyleScopedClasses['pron']} */ ;
/** @type {__VLS_StyleScopedClasses['blurb']} */ ;
/** @type {__VLS_StyleScopedClasses['carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['edu-card']} */ ;
/** @type {__VLS_StyleScopedClasses['edu-img']} */ ;
/** @type {__VLS_StyleScopedClasses['edu-info']} */ ;
/** @type {__VLS_StyleScopedClasses['pron']} */ ;
/** @type {__VLS_StyleScopedClasses['blurb']} */ ;
/** @type {__VLS_StyleScopedClasses['overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['overlay-img']} */ ;
/** @type {__VLS_StyleScopedClasses['overlay-text']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return ({
        selected: selected,
        selectItem: selectItem,
        speak: speak,
        minerals: minerals,
        diseases: diseases,
        bacteria: bacteria,
    }); },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
