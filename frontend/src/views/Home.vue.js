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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var ArticleSlider_vue_1 = require("@/components/ArticleSlider.vue");
var HeroVideo_vue_1 = require("@/components/HeroVideo.vue");
var dashboardRef = (0, vue_1.ref)(null);
var featuresRef = (0, vue_1.ref)(null);
var dashboardRefRef = dashboardRef;
var featuresRefRef = featuresRef;
var OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY || 'a7f7e34d892b94d341f19b3252f8c992';
// const dashboardRef = ref<HTMLElement | null>(null)
// const featuresRef = ref<HTMLElement | null>(null)
var beaches = [
    { name: 'Carrum Beach', lat: -38.0652, lon: 145.1214 },
    { name: 'St Kilda Beach', lat: -37.8675, lon: 144.9731 },
    { name: 'Dromana Beach', lat: -38.3337, lon: 144.9658 },
    { name: 'Port Melbourne Beach', lat: -37.8399, lon: 144.939 },
    { name: 'Altona Beach', lat: -37.8686, lon: 144.8297 },
];
var selectedWeatherBeach = (0, vue_1.ref)(beaches[0]);
var selectedUvBeach = (0, vue_1.ref)(beaches[0]);
var weather = (0, vue_1.ref)(null);
var uvIndex = (0, vue_1.ref)(null);
var isLoadingWeather = (0, vue_1.ref)(true);
var isLoadingUv = (0, vue_1.ref)(true);
var weatherError = (0, vue_1.ref)(null);
var uvError = (0, vue_1.ref)(null);
var fetchWeather = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, data, err_1;
    var _a, _b, _c, _d, _e, _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _h.trys.push([0, 3, 4, 5]);
                return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(selectedWeatherBeach.value.lat, "&lon=").concat(selectedWeatherBeach.value.lon, "&units=metric&appid=").concat(OPEN_WEATHER_API_KEY))];
            case 1:
                res = _h.sent();
                if (!res.ok)
                    throw new Error("Weather ".concat(res.status));
                return [4 /*yield*/, res.json()];
            case 2:
                data = _h.sent();
                weather.value = {
                    temp: (_a = data.main) === null || _a === void 0 ? void 0 : _a.temp,
                    description: (_d = (_c = (_b = data.weather) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.description) !== null && _d !== void 0 ? _d : '',
                    humidity: (_e = data.main) === null || _e === void 0 ? void 0 : _e.humidity,
                    windSpeed: (_f = data.wind) === null || _f === void 0 ? void 0 : _f.speed
                };
                return [3 /*break*/, 5];
            case 3:
                err_1 = _h.sent();
                weatherError.value = (_g = err_1 === null || err_1 === void 0 ? void 0 : err_1.message) !== null && _g !== void 0 ? _g : 'Failed to fetch weather';
                return [3 /*break*/, 5];
            case 4:
                isLoadingWeather.value = false;
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
var fetchUv = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, data, err_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, 4, 5]);
                return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/uvi?lat=".concat(selectedUvBeach.value.lat, "&lon=").concat(selectedUvBeach.value.lon, "&appid=").concat(OPEN_WEATHER_API_KEY))];
            case 1:
                res = _b.sent();
                if (!res.ok)
                    throw new Error("UV ".concat(res.status));
                return [4 /*yield*/, res.json()];
            case 2:
                data = _b.sent();
                uvIndex.value = typeof data.value === 'number' ? data.value : null;
                return [3 /*break*/, 5];
            case 3:
                err_2 = _b.sent();
                uvError.value = (_a = err_2 === null || err_2 === void 0 ? void 0 : err_2.message) !== null && _a !== void 0 ? _a : 'Failed to fetch UV index';
                return [3 /*break*/, 5];
            case 4:
                isLoadingUv.value = false;
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
var articleLinks = [
    { title: 'Poor water quality forecast for all beaches in Victoria’s Port Phillip Bay, EPA warns', url: 'https://www.abc.net.au/news/2017-01-20/poor-water-quality-forecast-at-all-beaches-in-port-phillip-bay/8197404' },
    { title: 'Filthy reason some Melbourne beaches are closed to swimmers', url: 'https://www.heraldsun.com.au/news/victoria/melbourne-beaches-not-suitable-for-swimming-after-severe-storms/news-story/6d37ab96514f5fb1fd585be957831f3d' },
    { title: 'Water Quality in Port Phillip Bay still recovering after Victoria’s record floods', url: 'https://www.abc.net.au/news/2023-01-05/victoria-beach-bay-water-quality-epa-melbourne-floods/101826148' },
    { title: 'Health risks at bay and ocean beaches', url: 'https://www.mpnews.com.au/2022/10/31/health-risks-at-bay-and-ocean-beaches/' },
    { title: 'Melbournes Port Phillip Bay not suitable for swimming after severe storms', url: 'https://www.abc.net.au/news/2023-12-29/melbourne-bays-poor-water-quality-explainer/103269472' },
    { title: 'The bay has turned brown and swimmers are emerged coated in a strange goo', url: 'https://www.theage.com.au/politics/victoria/the-bay-has-turned-brown-and-swimmers-are-emerging-coated-in-a-strange-goo-20240118-p5ey9u.html' },
    { title: 'Why you should check the water quality before going for a swim in Victoria', url: 'https://www.racv.com.au/royalauto/travel/victoria/swimming-water-quality-victoria.html' }
];
var features = [
    { icon: '📊', title: 'Real-Time Water Quality', description: 'Instant updates on different Beaches water quality after rainfall' },
    { icon: '⏰', title: 'Advance Planning', description: 'Forecasts that help plan your beach visits safely' },
    { icon: '🛡️', title: 'Safety Alerts', description: 'Get notified when water becomes unsafe for swimming' },
    { icon: '📚', title: 'Educational Resources', description: 'Understand water safety, indicators, and tips' },
    { icon: '☔️', title: 'Rainfall Impact Analysis', description: 'Know how rain affects beach water quality' }
];
var audiences = [
    { icon: '👨‍👩‍👧', title: 'Parents & Families', description: 'Parents aged 30–50 who prioritize children’s safety and informed beach decisions' },
    { icon: '🌺', title: 'Beach Visitors', description: 'Tourists from Victoria suburbs visiting Dromana Beach after rain' },
    { icon: '🌊', title: 'Water Safety Advocates', description: 'Health-conscious families promoting child-focused beach safety' }
];
var showBackToTop = (0, vue_1.ref)(false);
var scrollToTop = function () { return window.scrollTo({ top: 0, behavior: 'smooth' }); };
var handleScroll = function () { showBackToTop.value = window.scrollY > 300; };
(0, vue_1.onMounted)(function () {
    fetchWeather();
    fetchUv();
    window.addEventListener('scroll', handleScroll);
});
(0, vue_1.onUnmounted)(function () { window.removeEventListener('scroll', handleScroll); });
(0, vue_1.watch)(selectedWeatherBeach, fetchWeather);
(0, vue_1.watch)(selectedUvBeach, fetchUv);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['home']} */ ;
/** @type {__VLS_StyleScopedClasses['main-content-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-card']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-card']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-card']} */ ;
/** @type {__VLS_StyleScopedClasses['fancy-card']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-head']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-card']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-sub']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['kpi']} */ ;
/** @type {__VLS_StyleScopedClasses['weather']} */ ;
/** @type {__VLS_StyleScopedClasses['weather']} */ ;
/** @type {__VLS_StyleScopedClasses['weather']} */ ;
/** @type {__VLS_StyleScopedClasses['weather']} */ ;
/** @type {__VLS_StyleScopedClasses['weather']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['tile']} */ ;
/** @type {__VLS_StyleScopedClasses['tile']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-card']} */ ;
/** @type {__VLS_StyleScopedClasses['audience-card']} */ ;
/** @type {__VLS_StyleScopedClasses['muted']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['back-to-top-button']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['panels']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['four']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['panels']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['four']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['five']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['three']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['panels']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['four']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['five']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['three']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-card']} */ ;
/** @type {__VLS_StyleScopedClasses['fancy-card']} */ ;
/** @type {__VLS_StyleScopedClasses['weather']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['features-section']} */ ;
/** @type {__VLS_StyleScopedClasses['audiences-section']} */ ;
/** @type {__VLS_StyleScopedClasses['articles-section']} */ ;
/** @type {__VLS_StyleScopedClasses['main-content-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['dashboard-section']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-quiz-section']} */ ;
/** @type {__VLS_StyleScopedClasses['features-title']} */ ;
/** @type {__VLS_StyleScopedClasses['audiences-title']} */ ;
/** @type {__VLS_StyleScopedClasses['articles-title']} */ ;
/** @type {__VLS_StyleScopedClasses['dashboard-title']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-quiz-title']} */ ;
/** @type {__VLS_StyleScopedClasses['features-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['audiences-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['articles-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['features-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['audiences-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-card']} */ ;
/** @type {__VLS_StyleScopedClasses['audience-card']} */ ;
/** @type {__VLS_StyleScopedClasses['back-to-top-button']} */ ;
/** @type {__VLS_StyleScopedClasses['main-content-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['features-title']} */ ;
/** @type {__VLS_StyleScopedClasses['audiences-title']} */ ;
/** @type {__VLS_StyleScopedClasses['articles-title']} */ ;
/** @type {__VLS_StyleScopedClasses['dashboard-title']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-quiz-title']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-card']} */ ;
/** @type {__VLS_StyleScopedClasses['audience-card']} */ ;
/** @type {__VLS_StyleScopedClasses['back-to-top-button']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "home" }));
/** @type {[typeof HeroVideo, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(HeroVideo_vue_1.default, new HeroVideo_vue_1.default({
    dashboardRef: (__VLS_ctx.dashboardRefRef),
    featuresRef: (__VLS_ctx.featuresRefRef),
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        dashboardRef: (__VLS_ctx.dashboardRefRef),
        featuresRef: (__VLS_ctx.featuresRefRef),
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
// @ts-ignore
[dashboardRefRef, featuresRefRef,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "main-content-wrapper" }));
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)(__assign({ ref: "dashboardRef" }, { class: "dashboard-section" }));
/** @type {typeof __VLS_ctx.dashboardRef} */ ;
// @ts-ignore
[dashboardRef,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "dashboard-header" }));
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)(__assign({ class: "dashboard-title" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "grid panels" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "panel" }));
var __VLS_4 = {}.Card;
/** @type {[typeof __VLS_components.Card, typeof __VLS_components.Card, ]} */ ;
// @ts-ignore
Card;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ class: "panel-card fancy-card tall-box" })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: "panel-card fancy-card tall-box" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
var __VLS_8 = __VLS_7.slots.default;
{
    var __VLS_9 = __VLS_7.slots.header;
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "panel-head d-flex justify-content-between align-items-center" }));
    __VLS_asFunctionalElement(__VLS_elements.h5, __VLS_elements.h5)({});
    __VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)(__assign({ value: (__VLS_ctx.selectedUvBeach) }, { class: "form-select form-select-sm w-auto" }));
    // @ts-ignore
    [selectedUvBeach,];
    for (var _i = 0, _f = __VLS_getVForSourceType((__VLS_ctx.beaches)); _i < _f.length; _i++) {
        var beach = _f[_i][0];
        // @ts-ignore
        [beaches,];
        __VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
            key: (beach.name),
            value: (beach),
        });
        (beach.name);
    }
}
{
    var __VLS_10 = __VLS_7.slots.content;
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "panel-sub" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "panel-body" }));
    if (__VLS_ctx.isLoadingUv) {
        // @ts-ignore
        [isLoadingUv,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "loading" }));
        var __VLS_11 = {}.ProgressSpinner;
        /** @type {[typeof __VLS_components.ProgressSpinner, ]} */ ;
        // @ts-ignore
        ProgressSpinner;
        // @ts-ignore
        var __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11(__assign({ style: {} }, { strokeWidth: "4", animationDuration: "1s" })));
        var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([__assign({ style: {} }, { strokeWidth: "4", animationDuration: "1s" })], __VLS_functionalComponentArgsRest(__VLS_12), false));
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "muted" }));
    }
    else if (__VLS_ctx.uvError) {
        // @ts-ignore
        [uvError,];
        var __VLS_16 = {}.Message;
        /** @type {[typeof __VLS_components.Message, typeof __VLS_components.Message, ]} */ ;
        // @ts-ignore
        Message;
        // @ts-ignore
        var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ severity: "error", closable: (false) }, { class: "w-100" })));
        var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ severity: "error", closable: (false) }, { class: "w-100" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
        var __VLS_20 = __VLS_19.slots.default;
        (__VLS_ctx.uvError);
        // @ts-ignore
        [uvError,];
        var __VLS_19;
    }
    else {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "kpi" }));
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
        ((_a = __VLS_ctx.uvIndex) !== null && _a !== void 0 ? _a : '-');
        // @ts-ignore
        [uvIndex,];
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "muted small" }));
        (__VLS_ctx.selectedUvBeach.name);
        // @ts-ignore
        [selectedUvBeach,];
    }
}
var __VLS_7;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "panel" }));
var __VLS_21 = {}.Card;
/** @type {[typeof __VLS_components.Card, typeof __VLS_components.Card, ]} */ ;
// @ts-ignore
Card;
// @ts-ignore
var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21(__assign({ class: "panel-card fancy-card tall-box" })));
var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([__assign({ class: "panel-card fancy-card tall-box" })], __VLS_functionalComponentArgsRest(__VLS_22), false));
var __VLS_25 = __VLS_24.slots.default;
{
    var __VLS_26 = __VLS_24.slots.header;
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "panel-head d-flex justify-content-between align-items-center" }));
    __VLS_asFunctionalElement(__VLS_elements.h5, __VLS_elements.h5)({});
    __VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)(__assign({ value: (__VLS_ctx.selectedWeatherBeach) }, { class: "form-select form-select-sm w-auto" }));
    // @ts-ignore
    [selectedWeatherBeach,];
    for (var _g = 0, _h = __VLS_getVForSourceType((__VLS_ctx.beaches)); _g < _h.length; _g++) {
        var beach = _h[_g][0];
        // @ts-ignore
        [beaches,];
        __VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
            key: (beach.name),
            value: (beach),
        });
        (beach.name);
    }
}
{
    var __VLS_27 = __VLS_24.slots.content;
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "panel-sub" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "panel-body" }));
    if (__VLS_ctx.isLoadingWeather) {
        // @ts-ignore
        [isLoadingWeather,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "loading" }));
        var __VLS_28 = {}.ProgressSpinner;
        /** @type {[typeof __VLS_components.ProgressSpinner, ]} */ ;
        // @ts-ignore
        ProgressSpinner;
        // @ts-ignore
        var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ style: {} }, { strokeWidth: "4" })));
        var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ style: {} }, { strokeWidth: "4" })], __VLS_functionalComponentArgsRest(__VLS_29), false));
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "muted" }));
    }
    else if (__VLS_ctx.weatherError) {
        // @ts-ignore
        [weatherError,];
        var __VLS_33 = {}.Message;
        /** @type {[typeof __VLS_components.Message, typeof __VLS_components.Message, ]} */ ;
        // @ts-ignore
        Message;
        // @ts-ignore
        var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33(__assign({ severity: "error", closable: (false) }, { class: "w-100" })));
        var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([__assign({ severity: "error", closable: (false) }, { class: "w-100" })], __VLS_functionalComponentArgsRest(__VLS_34), false));
        var __VLS_37 = __VLS_36.slots.default;
        (__VLS_ctx.weatherError);
        // @ts-ignore
        [weatherError,];
        var __VLS_36;
    }
    else {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "weather" }));
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
        __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)(__assign({ class: "fs-3" }));
        ((_b = __VLS_ctx.weather) === null || _b === void 0 ? void 0 : _b.temp);
        // @ts-ignore
        [weather,];
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "fw-bold text-capitalize" }));
        ((_c = __VLS_ctx.weather) === null || _c === void 0 ? void 0 : _c.description);
        // @ts-ignore
        [weather,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "d-flex justify-content-center gap-4 mt-2" }));
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
        __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
        ((_d = __VLS_ctx.weather) === null || _d === void 0 ? void 0 : _d.humidity);
        // @ts-ignore
        [weather,];
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
        __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
        ((_e = __VLS_ctx.weather) === null || _e === void 0 ? void 0 : _e.windSpeed);
        // @ts-ignore
        [weather,];
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "muted small" }));
        (__VLS_ctx.selectedWeatherBeach.name);
        // @ts-ignore
        [selectedWeatherBeach,];
    }
}
var __VLS_24;
var __VLS_38 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
var __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38(__assign({ to: "/safety" }, { class: "panel" })));
var __VLS_40 = __VLS_39.apply(void 0, __spreadArray([__assign({ to: "/safety" }, { class: "panel" })], __VLS_functionalComponentArgsRest(__VLS_39), false));
var __VLS_42 = __VLS_41.slots.default;
var __VLS_43 = {}.Card;
/** @type {[typeof __VLS_components.Card, typeof __VLS_components.Card, ]} */ ;
// @ts-ignore
Card;
// @ts-ignore
var __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43(__assign({ class: "panel-card" })));
var __VLS_45 = __VLS_44.apply(void 0, __spreadArray([__assign({ class: "panel-card" })], __VLS_functionalComponentArgsRest(__VLS_44), false));
var __VLS_47 = __VLS_46.slots.default;
{
    var __VLS_48 = __VLS_46.slots.header;
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "panel-head" }));
    __VLS_asFunctionalElement(__VLS_elements.h5, __VLS_elements.h5)({});
}
{
    var __VLS_49 = __VLS_46.slots.content;
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "panel-sub" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "panel-body" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "muted" }));
}
var __VLS_46;
var __VLS_41;
var __VLS_50 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
var __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50(__assign({ to: "/predict" }, { class: "panel" })));
var __VLS_52 = __VLS_51.apply(void 0, __spreadArray([__assign({ to: "/predict" }, { class: "panel" })], __VLS_functionalComponentArgsRest(__VLS_51), false));
var __VLS_54 = __VLS_53.slots.default;
var __VLS_55 = {}.Card;
/** @type {[typeof __VLS_components.Card, typeof __VLS_components.Card, ]} */ ;
// @ts-ignore
Card;
// @ts-ignore
var __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55(__assign({ class: "panel-card" })));
var __VLS_57 = __VLS_56.apply(void 0, __spreadArray([__assign({ class: "panel-card" })], __VLS_functionalComponentArgsRest(__VLS_56), false));
var __VLS_59 = __VLS_58.slots.default;
{
    var __VLS_60 = __VLS_58.slots.header;
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "panel-head" }));
    __VLS_asFunctionalElement(__VLS_elements.h5, __VLS_elements.h5)({});
}
{
    var __VLS_61 = __VLS_58.slots.content;
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "panel-sub" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "panel-body" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "muted" }));
}
var __VLS_58;
var __VLS_53;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)(__assign({ class: "trash-quiz-section" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "trash-quiz-header" }));
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)(__assign({ class: "trash-quiz-title" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "grid one" }));
var __VLS_62 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
var __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62(__assign({ to: "/recycle-quiz" }, { class: "panel" })));
var __VLS_64 = __VLS_63.apply(void 0, __spreadArray([__assign({ to: "/recycle-quiz" }, { class: "panel" })], __VLS_functionalComponentArgsRest(__VLS_63), false));
var __VLS_66 = __VLS_65.slots.default;
var __VLS_67 = {}.Card;
/** @type {[typeof __VLS_components.Card, typeof __VLS_components.Card, ]} */ ;
// @ts-ignore
Card;
// @ts-ignore
var __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67(__assign({ class: "panel-card" })));
var __VLS_69 = __VLS_68.apply(void 0, __spreadArray([__assign({ class: "panel-card" })], __VLS_functionalComponentArgsRest(__VLS_68), false));
var __VLS_71 = __VLS_70.slots.default;
{
    var __VLS_72 = __VLS_70.slots.header;
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "panel-head" }));
    __VLS_asFunctionalElement(__VLS_elements.h5, __VLS_elements.h5)({});
}
{
    var __VLS_73 = __VLS_70.slots.content;
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "panel-sub" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "panel-body" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "muted" }));
}
var __VLS_70;
var __VLS_65;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)(__assign({ ref: "featuresRef" }, { class: "features-section" }));
/** @type {typeof __VLS_ctx.featuresRef} */ ;
// @ts-ignore
[featuresRef,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "features-header" }));
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)(__assign({ class: "features-title" }));
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "features-subtitle" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "features-grid" }));
for (var _j = 0, _k = __VLS_getVForSourceType((__VLS_ctx.features)); _j < _k.length; _j++) {
    var _l = _k[_j], feature = _l[0], index = _l[1];
    // @ts-ignore
    [features,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ key: (index) }, { class: "feature-card" }));
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)(__assign({ class: "feature-title" }));
    (feature.title);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "feature-description" }));
    (feature.description);
}
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)(__assign({ class: "audiences-section" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "audiences-header" }));
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)(__assign({ class: "audiences-title" }));
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "audiences-subtitle" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "audiences-grid" }));
for (var _m = 0, _o = __VLS_getVForSourceType((__VLS_ctx.audiences)); _m < _o.length; _m++) {
    var _p = _o[_m], group = _p[0], index = _p[1];
    // @ts-ignore
    [audiences,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ key: (index) }, { class: "audience-card" }));
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)(__assign({ class: "audience-title" }));
    (group.title);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "audience-description" }));
    (group.description);
}
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)(__assign({ class: "articles-section" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "articles-header" }));
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)(__assign({ class: "articles-title" }));
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "articles-subtitle" }));
/** @type {[typeof ArticleSlider, ]} */ ;
// @ts-ignore
var __VLS_74 = __VLS_asFunctionalComponent(ArticleSlider_vue_1.default, new ArticleSlider_vue_1.default({
    articles: (__VLS_ctx.articleLinks),
}));
var __VLS_75 = __VLS_74.apply(void 0, __spreadArray([{
        articles: (__VLS_ctx.articleLinks),
    }], __VLS_functionalComponentArgsRest(__VLS_74), false));
// @ts-ignore
[articleLinks,];
__VLS_asFunctionalElement(__VLS_elements.footer, __VLS_elements.footer)(__assign({ class: "footer" }));
__VLS_asFunctionalElement(__VLS_elements.small, __VLS_elements.small)({});
__VLS_asFunctionalElement(__VLS_elements.small, __VLS_elements.small)({});
var __VLS_78 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
var __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78(__assign(__assign({ 'onClick': {} }, { class: "back-to-top-button" }), { icon: "pi pi-arrow-up", severity: "secondary", outlined: true, rounded: true, size: "large", 'aria-label': "Scroll to top of page" })));
var __VLS_80 = __VLS_79.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { class: "back-to-top-button" }), { icon: "pi pi-arrow-up", severity: "secondary", outlined: true, rounded: true, size: "large", 'aria-label': "Scroll to top of page" })], __VLS_functionalComponentArgsRest(__VLS_79), false));
var __VLS_82;
var __VLS_83;
var __VLS_84 = ({ click: {} },
    { onClick: (__VLS_ctx.scrollToTop) });
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.showBackToTop) }), null, null);
// @ts-ignore
[scrollToTop, showBackToTop,];
var __VLS_81;
/** @type {__VLS_StyleScopedClasses['home']} */ ;
/** @type {__VLS_StyleScopedClasses['main-content-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['dashboard-section']} */ ;
/** @type {__VLS_StyleScopedClasses['dashboard-header']} */ ;
/** @type {__VLS_StyleScopedClasses['dashboard-title']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['panels']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-card']} */ ;
/** @type {__VLS_StyleScopedClasses['fancy-card']} */ ;
/** @type {__VLS_StyleScopedClasses['tall-box']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-head']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-between']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['form-select']} */ ;
/** @type {__VLS_StyleScopedClasses['form-select-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-sub']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-body']} */ ;
/** @type {__VLS_StyleScopedClasses['loading']} */ ;
/** @type {__VLS_StyleScopedClasses['muted']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
/** @type {__VLS_StyleScopedClasses['kpi']} */ ;
/** @type {__VLS_StyleScopedClasses['muted']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-card']} */ ;
/** @type {__VLS_StyleScopedClasses['fancy-card']} */ ;
/** @type {__VLS_StyleScopedClasses['tall-box']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-head']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-between']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['form-select']} */ ;
/** @type {__VLS_StyleScopedClasses['form-select-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-sub']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-body']} */ ;
/** @type {__VLS_StyleScopedClasses['loading']} */ ;
/** @type {__VLS_StyleScopedClasses['muted']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
/** @type {__VLS_StyleScopedClasses['weather']} */ ;
/** @type {__VLS_StyleScopedClasses['fs-3']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-capitalize']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['muted']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-card']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-head']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-sub']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-body']} */ ;
/** @type {__VLS_StyleScopedClasses['muted']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-card']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-head']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-sub']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-body']} */ ;
/** @type {__VLS_StyleScopedClasses['muted']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-quiz-section']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-quiz-header']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-quiz-title']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['one']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-card']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-head']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-sub']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-body']} */ ;
/** @type {__VLS_StyleScopedClasses['muted']} */ ;
/** @type {__VLS_StyleScopedClasses['features-section']} */ ;
/** @type {__VLS_StyleScopedClasses['features-header']} */ ;
/** @type {__VLS_StyleScopedClasses['features-title']} */ ;
/** @type {__VLS_StyleScopedClasses['features-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['features-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-card']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-title']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-description']} */ ;
/** @type {__VLS_StyleScopedClasses['audiences-section']} */ ;
/** @type {__VLS_StyleScopedClasses['audiences-header']} */ ;
/** @type {__VLS_StyleScopedClasses['audiences-title']} */ ;
/** @type {__VLS_StyleScopedClasses['audiences-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['audiences-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['audience-card']} */ ;
/** @type {__VLS_StyleScopedClasses['audience-title']} */ ;
/** @type {__VLS_StyleScopedClasses['audience-description']} */ ;
/** @type {__VLS_StyleScopedClasses['articles-section']} */ ;
/** @type {__VLS_StyleScopedClasses['articles-header']} */ ;
/** @type {__VLS_StyleScopedClasses['articles-title']} */ ;
/** @type {__VLS_StyleScopedClasses['articles-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['back-to-top-button']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return ({
        ArticleSlider: ArticleSlider_vue_1.default,
        HeroVideo: HeroVideo_vue_1.default,
        dashboardRef: dashboardRef,
        featuresRef: featuresRef,
        dashboardRefRef: dashboardRefRef,
        featuresRefRef: featuresRefRef,
        beaches: beaches,
        selectedWeatherBeach: selectedWeatherBeach,
        selectedUvBeach: selectedUvBeach,
        weather: weather,
        uvIndex: uvIndex,
        isLoadingWeather: isLoadingWeather,
        isLoadingUv: isLoadingUv,
        weatherError: weatherError,
        uvError: uvError,
        articleLinks: articleLinks,
        features: features,
        audiences: audiences,
        showBackToTop: showBackToTop,
        scrollToTop: scrollToTop,
    }); },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
