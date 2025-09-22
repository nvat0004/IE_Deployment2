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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY || 'a7f7e34d892b94d341f19b3252f8c992';
var DROMANA = { lat: -38.33, lon: 145.0 };
var weather = (0, vue_1.ref)(null);
var uvIndex = (0, vue_1.ref)(null);
var isLoadingWeather = (0, vue_1.ref)(false);
var isLoadingUv = (0, vue_1.ref)(false);
var weatherError = (0, vue_1.ref)(null);
var uvError = (0, vue_1.ref)(null);
var fetchWeather = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, data, err_1;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _l.trys.push([0, 3, 4, 5]);
                isLoadingWeather.value = true;
                weatherError.value = null;
                return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?q=Dromana,AU&units=metric&appid=".concat(OPEN_WEATHER_API_KEY))];
            case 1:
                res = _l.sent();
                if (!res.ok)
                    throw new Error("Weather ".concat(res.status));
                return [4 /*yield*/, res.json()];
            case 2:
                data = _l.sent();
                weather.value = {
                    temp: (_a = data.main) === null || _a === void 0 ? void 0 : _a.temp,
                    description: (_d = (_c = (_b = data.weather) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.description) !== null && _d !== void 0 ? _d : "",
                    humidity: (_e = data.main) === null || _e === void 0 ? void 0 : _e.humidity,
                    windSpeed: (_f = data.wind) === null || _f === void 0 ? void 0 : _f.speed,
                    icon: (_j = (_h = (_g = data.weather) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.icon) !== null && _j !== void 0 ? _j : "",
                };
                return [3 /*break*/, 5];
            case 3:
                err_1 = _l.sent();
                weatherError.value = (_k = err_1 === null || err_1 === void 0 ? void 0 : err_1.message) !== null && _k !== void 0 ? _k : "Failed to fetch weather";
                return [3 /*break*/, 5];
            case 4:
                isLoadingWeather.value = false;
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
var fetchUv = function () { return __awaiter(void 0, void 0, void 0, function () {
    var lat, lon, res, data, err_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, 4, 5]);
                isLoadingUv.value = true;
                uvError.value = null;
                lat = DROMANA.lat, lon = DROMANA.lon;
                return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/uvi?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(OPEN_WEATHER_API_KEY))];
            case 1:
                res = _b.sent();
                if (!res.ok) {
                    throw new Error("UV ".concat(res.status));
                }
                return [4 /*yield*/, res.json()];
            case 2:
                data = _b.sent();
                uvIndex.value = typeof data.value === "number" ? data.value : null;
                return [3 /*break*/, 5];
            case 3:
                err_2 = _b.sent();
                uvError.value = (_a = err_2 === null || err_2 === void 0 ? void 0 : err_2.message) !== null && _a !== void 0 ? _a : "Failed to fetch UV index";
                return [3 /*break*/, 5];
            case 4:
                isLoadingUv.value = false;
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
(0, vue_1.onMounted)(function () { fetchWeather(); fetchUv(); });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)(__assign({ class: "card" }));
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "grid" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "subcard" }));
__VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({});
if (__VLS_ctx.isLoadingUv) {
    // @ts-ignore
    [isLoadingUv,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
}
else if (__VLS_ctx.uvError) {
    // @ts-ignore
    [uvError,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    (__VLS_ctx.uvError);
    // @ts-ignore
    [uvError,];
}
else {
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    ((_a = __VLS_ctx.uvIndex) !== null && _a !== void 0 ? _a : '-');
    // @ts-ignore
    [uvIndex,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "subcard" }));
__VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({});
if (__VLS_ctx.isLoadingWeather) {
    // @ts-ignore
    [isLoadingWeather,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
}
else if (__VLS_ctx.weatherError) {
    // @ts-ignore
    [weatherError,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    (__VLS_ctx.weatherError);
    // @ts-ignore
    [weatherError,];
}
else {
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    ((_b = __VLS_ctx.weather) === null || _b === void 0 ? void 0 : _b.temp);
    // @ts-ignore
    [weather,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    ((_c = __VLS_ctx.weather) === null || _c === void 0 ? void 0 : _c.description);
    // @ts-ignore
    [weather,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    ((_d = __VLS_ctx.weather) === null || _d === void 0 ? void 0 : _d.humidity);
    // @ts-ignore
    [weather,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    ((_e = __VLS_ctx.weather) === null || _e === void 0 ? void 0 : _e.windSpeed);
    // @ts-ignore
    [weather,];
}
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['subcard']} */ ;
/** @type {__VLS_StyleScopedClasses['subcard']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return ({
        weather: weather,
        uvIndex: uvIndex,
        isLoadingWeather: isLoadingWeather,
        isLoadingUv: isLoadingUv,
        weatherError: weatherError,
        uvError: uvError,
    }); },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
