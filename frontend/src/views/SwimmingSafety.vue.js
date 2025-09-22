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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var axios_1 = require("axios");
var leaflet_1 = require("leaflet");
require("leaflet/dist/leaflet.css");
var router = (0, vue_router_1.useRouter)();
var selectedBeach = (0, vue_1.ref)("Carrum Beach");
var status = (0, vue_1.ref)("");
var reason = (0, vue_1.ref)("");
var date = (0, vue_1.ref)("");
var selectedStatus = (0, vue_1.ref)("");
var map = (0, vue_1.ref)(null);
var markers = (0, vue_1.ref)([]);
var allBeachStatuses = (0, vue_1.ref)([]);
var beachOptions = [
    { name: "Carrum Beach", lat: -38.0652, lng: 145.1214 },
    { name: "St Kilda Beach", lat: -37.8675, lng: 144.9731 },
    { name: "Dromana Beach", lat: -38.3337, lng: 144.9658 },
    { name: "Port Melbourne Beach", lat: -37.8399, lng: 144.939 },
    { name: "Altona Beach", lat: -37.8686, lng: 144.8297 },
];
var formattedDate = (0, vue_1.computed)(function () {
    if (!date.value)
        return "";
    var options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
    return new Date(date.value).toLocaleDateString(undefined, options);
});
// Redirect to Prediction
var goToPrediction = function () {
    if (selectedBeach.value) {
        router.push({ path: "/predict", query: { beach: selectedBeach.value } });
    }
};
// Fetch all beaches and sync map + card
var fetchAllSafety = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _loop_1, _i, beachOptions_1, beach;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                markers.value.forEach(function (m) { return m.remove(); });
                markers.value = [];
                allBeachStatuses.value = [];
                _loop_1 = function (beach) {
                    var res, s, r, d, color, marker, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _c.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, axios_1.default.get("/api/today-safety?beach=".concat(encodeURIComponent(beach.name)))];
                            case 1:
                                res = _c.sent();
                                s = res.data.status;
                                r = res.data.reason;
                                d = res.data.date;
                                allBeachStatuses.value.push({ name: beach.name, status: s, reason: r, date: d });
                                color = s === "Safe" ? "green" : s === "Moderate" ? "orange" : "red";
                                marker = leaflet_1.default.circleMarker([beach.lat, beach.lng], {
                                    radius: 10,
                                    fillColor: color,
                                    color: "#000",
                                    weight: 1,
                                    fillOpacity: 0.8,
                                })
                                    .addTo(map.value)
                                    .bindPopup("<b>".concat(beach.name, "</b><br>Status: ").concat(s))
                                    .on("click", function () {
                                    selectedBeach.value = beach.name;
                                });
                                markers.value.push(marker);
                                return [3 /*break*/, 3];
                            case 2:
                                _b = _c.sent();
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                };
                _i = 0, beachOptions_1 = beachOptions;
                _a.label = 1;
            case 1:
                if (!(_i < beachOptions_1.length)) return [3 /*break*/, 4];
                beach = beachOptions_1[_i];
                return [5 /*yield**/, _loop_1(beach)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                updateSelectedBeach();
                return [2 /*return*/];
        }
    });
}); };
// Sync selected beach card + zoom
var updateSelectedBeach = function () {
    var beach = allBeachStatuses.value.find(function (b) { return b.name === selectedBeach.value; });
    if (beach) {
        status.value = beach.status;
        reason.value = beach.reason;
        date.value = beach.date;
        var b = beachOptions.find(function (b) { return b.name === selectedBeach.value; });
        if (b && map.value) {
            map.value.setView([b.lat, b.lng], 13);
        }
    }
};
var filteredBeaches = (0, vue_1.computed)(function () {
    if (!selectedStatus.value)
        return allBeachStatuses.value;
    return allBeachStatuses.value.filter(function (b) { return b.status === selectedStatus.value; });
});
var initMap = function () {
    map.value = leaflet_1.default.map("map").setView([-37.9, 145.0], 9);
    leaflet_1.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map.value);
};
(0, vue_1.onMounted)(function () {
    initMap();
    fetchAllSafety();
});
(0, vue_1.watch)(selectedBeach, updateSelectedBeach);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['page-background']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "page-wrapper" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "page-background" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "main-content-wrapper" }));
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)(__assign({ class: "safety-section" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "d-flex justify-content-between align-items-start mb-3" }));
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)(__assign({ class: "mb-0" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "text-end" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mb-2" }));
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)(__assign({ for: "statusFilter" }, { class: "form-label fw-bold me-2" }));
__VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)(__assign({ value: (__VLS_ctx.selectedStatus), id: "statusFilter" }, { class: "form-select d-inline-block w-auto" }));
// @ts-ignore
[selectedStatus,];
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "",
});
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "Safe",
});
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "Moderate",
});
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "Dangerous",
});
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)(__assign({ class: "list-group small" }, { style: {} }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.filteredBeaches)); _i < _a.length; _i++) {
    var beach = _a[_i][0];
    // @ts-ignore
    [filteredBeaches,];
    __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)(__assign({ key: (beach.name) }, { class: "list-group-item d-flex justify-content-between align-items-center" }));
    (beach.name);
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "badge" }, { class: ({
            'bg-success': beach.status === 'Safe',
            'bg-warning text-dark': beach.status === 'Moderate',
            'bg-danger': beach.status === 'Dangerous'
        }) }));
    (beach.status);
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mb-3 text-center" }));
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)(__assign({ for: "beach" }, { class: "form-label fw-bold" }));
__VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)(__assign({ value: (__VLS_ctx.selectedBeach), id: "beach" }, { class: "form-select w-auto d-inline-block" }));
// @ts-ignore
[selectedBeach,];
for (var _b = 0, _c = __VLS_getVForSourceType((__VLS_ctx.beachOptions)); _b < _c.length; _b++) {
    var beach = _c[_b][0];
    // @ts-ignore
    [beachOptions,];
    __VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
        key: (beach.name),
        value: (beach.name),
    });
    (beach.name);
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "text-center mb-3" }));
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign(__assign({ onClick: (__VLS_ctx.goToPrediction) }, { class: "btn btn-primary" }), { disabled: (!__VLS_ctx.selectedBeach) }));
// @ts-ignore
[selectedBeach, goToPrediction,];
(__VLS_ctx.selectedBeach);
// @ts-ignore
[selectedBeach,];
if (__VLS_ctx.status) {
    // @ts-ignore
    [status,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign(__assign({ class: "card text-center mx-auto shadow p-3 mb-4" }, { style: {} }), { class: ({
            'border-success': __VLS_ctx.status === 'Safe',
            'border-warning': __VLS_ctx.status === 'Moderate',
            'border-danger': __VLS_ctx.status === 'Dangerous'
        }) }));
    // @ts-ignore
    [status, status, status,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "card-body" }));
    __VLS_asFunctionalElement(__VLS_elements.h5, __VLS_elements.h5)(__assign({ class: "card-title" }));
    (__VLS_ctx.formattedDate);
    // @ts-ignore
    [formattedDate,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "card-text fw-bold fs-4" }, { class: ({
            'text-success': __VLS_ctx.status === 'Safe',
            'text-warning': __VLS_ctx.status === 'Moderate',
            'text-danger': __VLS_ctx.status === 'Dangerous'
        }) }));
    // @ts-ignore
    [status, status, status,];
    (__VLS_ctx.status);
    // @ts-ignore
    [status,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "card-text" }));
    (__VLS_ctx.reason);
    // @ts-ignore
    [reason,];
}
if (!__VLS_ctx.status) {
    // @ts-ignore
    [status,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "text-center mt-4 text-muted" }));
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "position-relative mb-4" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ id: "map" }, { style: {} }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "map-legend position-absolute top-0 end-0 p-2 bg-white rounded shadow-sm m-2" }));
__VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)(__assign({ class: "d-block mb-1" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "legend-dot bg-success" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "legend-dot bg-warning" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "legend-dot bg-danger" }));
__VLS_asFunctionalElement(__VLS_elements.footer, __VLS_elements.footer)(__assign({ class: "footer" }));
__VLS_asFunctionalElement(__VLS_elements.small, __VLS_elements.small)({});
__VLS_asFunctionalElement(__VLS_elements.small, __VLS_elements.small)({});
/** @type {__VLS_StyleScopedClasses['page-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['page-background']} */ ;
/** @type {__VLS_StyleScopedClasses['main-content-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['safety-section']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-between']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
/** @type {__VLS_StyleScopedClasses['form-select']} */ ;
/** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
/** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-between']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['badge']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-success']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-warning']} */ ;
/** @type {__VLS_StyleScopedClasses['text-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['form-select']} */ ;
/** @type {__VLS_StyleScopedClasses['w-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-success']} */ ;
/** @type {__VLS_StyleScopedClasses['border-warning']} */ ;
/** @type {__VLS_StyleScopedClasses['border-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
/** @type {__VLS_StyleScopedClasses['card-title']} */ ;
/** @type {__VLS_StyleScopedClasses['card-text']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['fs-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-success']} */ ;
/** @type {__VLS_StyleScopedClasses['text-warning']} */ ;
/** @type {__VLS_StyleScopedClasses['text-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['card-text']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-muted']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['map-legend']} */ ;
/** @type {__VLS_StyleScopedClasses['position-absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['end-0']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['m-2']} */ ;
/** @type {__VLS_StyleScopedClasses['d-block']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['legend-dot']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-success']} */ ;
/** @type {__VLS_StyleScopedClasses['legend-dot']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-warning']} */ ;
/** @type {__VLS_StyleScopedClasses['legend-dot']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return ({
        selectedBeach: selectedBeach,
        status: status,
        reason: reason,
        selectedStatus: selectedStatus,
        beachOptions: beachOptions,
        formattedDate: formattedDate,
        goToPrediction: goToPrediction,
        filteredBeaches: filteredBeaches,
    }); },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
