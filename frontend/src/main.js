"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
require("bootstrap/dist/css/bootstrap.min.css");
require("./style.css");
// PrimeVue imports
var config_1 = require("primevue/config");
var button_1 = require("primevue/button");
var card_1 = require("primevue/card");
var progressspinner_1 = require("primevue/progressspinner");
var message_1 = require("primevue/message");
var divider_1 = require("primevue/divider");
var toolbar_1 = require("primevue/toolbar");
var avatar_1 = require("primevue/avatar");
var carousel_1 = require("primevue/carousel");
require("primeicons/primeicons.css");
var app = (0, vue_1.createApp)(App_vue_1.default);
// Register PrimeVue components globally
app.component('Button', button_1.default);
app.component('Card', card_1.default);
app.component('ProgressSpinner', progressspinner_1.default);
app.component('Message', message_1.default);
app.component('Divider', divider_1.default);
app.component('Toolbar', toolbar_1.default);
app.component('Avatar', avatar_1.default);
app.component('Carousel', carousel_1.default);
// Configure PrimeVue
app.use(config_1.default, {
    theme: {
        preset: 'aura',
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});
app.use(router_1.default);
app.mount('#app');
