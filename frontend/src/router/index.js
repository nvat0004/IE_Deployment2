"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
// Pages from `views` folder
var Home_vue_1 = require("../views/Home.vue");
var Education_vue_1 = require("../views/Education.vue");
var SwimmingSafety_vue_1 = require("../views/SwimmingSafety.vue");
var SevenDaysPrediction_vue_1 = require("../views/SevenDaysPrediction.vue");
var routes = [
    { path: '/', name: 'Home', component: Home_vue_1.default },
    { path: '/education', name: 'Education', component: Education_vue_1.default },
    { path: '/safety', name: 'SwimmingSafety', component: SwimmingSafety_vue_1.default },
    { path: '/predict', name: 'SevenDaysPrediction', component: SevenDaysPrediction_vue_1.default }
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: routes
});
exports.default = router;
