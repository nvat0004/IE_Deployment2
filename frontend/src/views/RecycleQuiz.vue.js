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
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
require("animate.css");
var canvas_confetti_1 = require("canvas-confetti");
// Questions (6 items, 2 bins only)
var questions = (0, vue_1.ref)([
    { name: 'Chip Packets', bin: 'Red Bin', image: '/quiz/ChipPackets.png', fact: 'Chip packets cannot be recycled – they go in the red bin.' },
    { name: 'Clothing', bin: 'Red Bin', image: '/quiz/Clothing.png', fact: 'Clothing doesn’t belong in recycling. Donate if possible, otherwise red bin.' },
    { name: 'Dirty Food Containers', bin: 'Red Bin', image: '/quiz/FoodContainers.png', fact: 'Food containers that are dirty can’t be recycled – red bin.' },
    { name: 'Leftover Food', bin: 'Green Bin', image: '/quiz/LeftoverFood.png', fact: 'Food scraps and leftovers are compostable – green bin.' },
    { name: 'Styrofoam', bin: 'Red Bin', image: '/quiz/Styrofoam.png', fact: 'Styrofoam cannot be recycled – it belongs in the red bin.' },
    { name: 'Tin Cans', bin: 'Green Bin', image: '/quiz/TinCans.png', fact: 'Clean tin cans can be recycled – green bin.' },
]);
// State
var currentIndex = (0, vue_1.ref)(0);
var score = (0, vue_1.ref)(0);
var answered = (0, vue_1.ref)(false);
var isCorrect = (0, vue_1.ref)(false);
var quizCompleted = (0, vue_1.ref)(false);
var isMuted = (0, vue_1.ref)(false);
var animateCorrect = (0, vue_1.ref)(false);
var animateWrong = (0, vue_1.ref)(false);
// Sounds
var correctSound = new Audio('/sounds/correct.mp3');
var wrongSound = new Audio('/sounds/wrong.mp3');
var bgMusic = new Audio('/sounds/bg.mp3');
var happySound = new Audio('/sounds/happy.mp3');
bgMusic.loop = true;
var currentQuestion = (0, vue_1.computed)(function () { return questions.value[currentIndex.value]; });
var progressText = (0, vue_1.computed)(function () { return "Question ".concat(currentIndex.value + 1, " of ").concat(questions.value.length); });
var progressPercent = (0, vue_1.computed)(function () { return ((currentIndex.value + 1) / questions.value.length) * 100; });
var leaderboard = (0, vue_1.ref)([]);
// Drag logic
function onDragStart(event, correctBin) {
    event.dataTransfer.setData("bin", correctBin);
}
function onDrop(bin) {
    if (answered.value)
        return;
    var correctBin = currentQuestion.value.bin;
    answered.value = true;
    isCorrect.value = bin === correctBin;
    if (isCorrect.value) {
        score.value++;
        animateCorrect.value = true;
        if (!isMuted.value)
            correctSound.play();
        setTimeout(function () { return (animateCorrect.value = false); }, 1000);
    }
    else {
        animateWrong.value = true;
        if (!isMuted.value)
            wrongSound.play();
        setTimeout(function () { return (animateWrong.value = false); }, 1000);
    }
}
// Next
function nextQuestion() {
    if (currentIndex.value < questions.value.length - 1) {
        currentIndex.value++;
        answered.value = false;
    }
    else {
        completeQuiz();
    }
}
// Complete
function completeQuiz() {
    quizCompleted.value = true;
    // 🎉 Confetti
    (0, canvas_confetti_1.default)({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
    if (!isMuted.value)
        happySound.play();
    var name = prompt('Enter your name for the leaderboard:') || 'Player';
    var entry = { name: name, score: score.value };
    var existing = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    existing.push(entry);
    existing.sort(function (a, b) { return b.score - a.score; });
    leaderboard.value = existing.slice(0, 5);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard.value));
}
// Restart
function restartQuiz() {
    shuffleArray(questions.value);
    currentIndex.value = 0;
    score.value = 0;
    answered.value = false;
    isCorrect.value = false;
    quizCompleted.value = false;
}
// Sound toggle
function toggleMute() {
    isMuted.value = !isMuted.value;
    if (isMuted.value) {
        bgMusic.pause();
    }
    else {
        bgMusic.play();
    }
}
// Shuffle helper
function shuffleArray(array) {
    return array.sort(function () { return Math.random() - 0.5; });
}
// Init
(0, vue_1.onMounted)(function () {
    shuffleArray(questions.value);
    leaderboard.value = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    // Start bg music on first click
    document.body.addEventListener('click', function () {
        if (!isMuted.value && bgMusic.paused)
            bgMusic.play();
    }, { once: true });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "quiz-container d-flex justify-content-center align-items-center" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "quiz-card" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "d-flex justify-content-between align-items-center mb-3" }));
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)(__assign({ class: "fw-bold" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign({ onClick: (__VLS_ctx.toggleMute) }, { class: "btn btn-outline-secondary me-2" }));
// @ts-ignore
[toggleMute,];
var __VLS_0 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
vue_fontawesome_1.FontAwesomeIcon;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    icon: (__VLS_ctx.isMuted ? 'volume-mute' : 'volume-up'),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        icon: (__VLS_ctx.isMuted ? 'volume-mute' : 'volume-up'),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
// @ts-ignore
[isMuted,];
if (__VLS_ctx.quizCompleted) {
    // @ts-ignore
    [quizCompleted,];
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign({ onClick: (__VLS_ctx.restartQuiz) }, { class: "btn btn-outline-primary" }));
    // @ts-ignore
    [restartQuiz,];
}
if (!__VLS_ctx.quizCompleted) {
    // @ts-ignore
    [quizCompleted,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "text-center" }));
    __VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)(__assign({ class: "mb-3" }));
    __VLS_asFunctionalElement(__VLS_elements.img)(__assign(__assign(__assign(__assign({ onDragstart: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(!__VLS_ctx.quizCompleted))
                return;
            __VLS_ctx.onDragStart($event, __VLS_ctx.currentQuestion.bin);
            // @ts-ignore
            [onDragStart, currentQuestion,];
        } }, { src: (__VLS_ctx.currentQuestion.image), alt: (__VLS_ctx.currentQuestion.name) }), { class: "quiz-image mb-3 animate__animated" }), { class: ({
            'animate__bounce': __VLS_ctx.animateCorrect,
            'animate__wobble': __VLS_ctx.animateWrong
        }) }), { draggable: "true" }));
    // @ts-ignore
    [currentQuestion, currentQuestion, animateCorrect, animateWrong,];
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)(__assign({ class: "fw-bold" }));
    (__VLS_ctx.currentQuestion.name);
    // @ts-ignore
    [currentQuestion,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "text-muted" }));
    (__VLS_ctx.progressText);
    // @ts-ignore
    [progressText,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "progress mb-4" }, { style: {} }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign(__assign({ class: "progress-bar bg-success" }, { role: "progressbar" }), { style: ({ width: __VLS_ctx.progressPercent + '%' }) }));
    // @ts-ignore
    [progressPercent,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "d-flex justify-content-around mt-4 bins-area" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign(__assign({ onDragover: function () { } }, { onDrop: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(!__VLS_ctx.quizCompleted))
                return;
            __VLS_ctx.onDrop('Red Bin');
            // @ts-ignore
            [onDrop,];
        } }), { class: "bin" }));
    __VLS_asFunctionalElement(__VLS_elements.img)(__assign({ src: "/bins/red-bin.png" }, { class: "bin-img" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "fw-bold" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign(__assign({ onDragover: function () { } }, { onDrop: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(!__VLS_ctx.quizCompleted))
                return;
            __VLS_ctx.onDrop('Green Bin');
            // @ts-ignore
            [onDrop,];
        } }), { class: "bin" }));
    __VLS_asFunctionalElement(__VLS_elements.img)(__assign({ src: "/bins/green-bin.png" }, { class: "bin-img" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "fw-bold" }));
    if (__VLS_ctx.answered) {
        // @ts-ignore
        [answered,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mt-3" }));
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: (__VLS_ctx.isCorrect ? 'text-success' : 'text-danger') }, { class: "fw-bold fs-5" }));
        // @ts-ignore
        [isCorrect,];
        (__VLS_ctx.isCorrect ? '✅ Correct!' : '❌ Oops! Wrong Bin!');
        // @ts-ignore
        [isCorrect,];
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "text-info" }));
        (__VLS_ctx.currentQuestion.fact);
        // @ts-ignore
        [currentQuestion,];
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign({ onClick: (__VLS_ctx.nextQuestion) }, { class: "btn btn-primary mt-3" }));
        // @ts-ignore
        [nextQuestion,];
    }
}
else {
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "text-center animate__animated animate__tada" }));
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)(__assign({ class: "text-success" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "fw-bold" }));
    (__VLS_ctx.score);
    (__VLS_ctx.questions.length);
    // @ts-ignore
    [score, questions,];
    __VLS_asFunctionalElement(__VLS_elements.audio, __VLS_elements.audio)({
        ref: "happyAudio",
        src: "/sounds/happy.mp3",
    });
    /** @type {typeof __VLS_ctx.happyAudio} */ ;
    // @ts-ignore
    [happyAudio,];
    __VLS_asFunctionalElement(__VLS_elements.h5, __VLS_elements.h5)(__assign({ class: "mt-4" }));
    __VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)(__assign({ class: "list-group leaderboard" }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.leaderboard)); _i < _a.length; _i++) {
        var _b = _a[_i], entry = _b[0], index = _b[1];
        // @ts-ignore
        [leaderboard,];
        __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)(__assign({ class: "list-group-item" }, { key: (index) }));
        (index + 1);
        (entry.name);
        (entry.score);
    }
}
/** @type {__VLS_StyleScopedClasses['quiz-container']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['quiz-card']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-between']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['quiz-image']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['animate__animated']} */ ;
/** @type {__VLS_StyleScopedClasses['animate__bounce']} */ ;
/** @type {__VLS_StyleScopedClasses['animate__wobble']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-muted']} */ ;
/** @type {__VLS_StyleScopedClasses['progress']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-success']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-around']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bins-area']} */ ;
/** @type {__VLS_StyleScopedClasses['bin']} */ ;
/** @type {__VLS_StyleScopedClasses['bin-img']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['bin']} */ ;
/** @type {__VLS_StyleScopedClasses['bin-img']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['fs-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-info']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['animate__animated']} */ ;
/** @type {__VLS_StyleScopedClasses['animate__tada']} */ ;
/** @type {__VLS_StyleScopedClasses['text-success']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
/** @type {__VLS_StyleScopedClasses['leaderboard']} */ ;
/** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return ({
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        questions: questions,
        score: score,
        answered: answered,
        isCorrect: isCorrect,
        quizCompleted: quizCompleted,
        isMuted: isMuted,
        animateCorrect: animateCorrect,
        animateWrong: animateWrong,
        currentQuestion: currentQuestion,
        progressText: progressText,
        progressPercent: progressPercent,
        leaderboard: leaderboard,
        onDragStart: onDragStart,
        onDrop: onDrop,
        nextQuestion: nextQuestion,
        restartQuiz: restartQuiz,
        toggleMute: toggleMute,
    }); },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
