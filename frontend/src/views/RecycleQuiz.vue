<template>
  <div class="quiz-container d-flex justify-content-center align-items-center">
    <div class="quiz-card">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="fw-bold">🛢️ Trash Bin Quiz</h2>
        <div>
          <button @click="toggleMute" class="btn btn-outline-secondary me-2">
            <font-awesome-icon :icon="isMuted ? 'volume-mute' : 'volume-up'" /> Sound
          </button>
          <button v-if="quizCompleted" @click="restartQuiz" class="btn btn-outline-primary">Restart</button>
        </div>
      </div>

      <!-- Quiz Question -->
      <div v-if="!quizCompleted" class="text-center">
        <h4>🗑️ Where does this go?</h4>
        <img :src="currentQuestion.image" :alt="currentQuestion.name"
             class="quiz-image mb-3 animate__animated animate__bounceIn" />
        <h3 class="fw-bold">{{ currentQuestion.name }}</h3>
        <p class="text-muted">{{ progressText }}</p>

        <!-- Progress bar -->
        <div class="progress mb-3" style="height: 20px;">
          <div class="progress-bar bg-success" role="progressbar"
               :style="{ width: progressPercent + '%' }">
          </div>
        </div>

        <!-- Answer Buttons -->
        <div class="d-flex justify-content-center gap-3 my-3 flex-wrap">
          <button
            v-for="bin in bins"
            :key="bin.name"
            :class="['btn', 'bin-btn', bin.class]"
            @click="checkAnswer(bin.label)"
            :disabled="answered"
          >
            {{ bin.emoji }} {{ bin.label }}
          </button>
        </div>

        <!-- Feedback -->
        <div v-if="answered">
          <p :class="isCorrect ? 'text-success' : 'text-danger'" class="fw-bold fs-5">
            {{ isCorrect ? '✅ Correct!' : '❌ Oops! Wrong Bin!' }}
          </p>
          <p class="text-info">💡 Fun Fact: {{ currentQuestion.fact }}</p>
          <button @click="nextQuestion" class="btn btn-primary mt-3">Next ➡️</button>
        </div>
      </div>

      <!-- Quiz Completed -->
      <div v-else class="text-center animate__animated animate__tada">
        <h3 class="text-success">🎉 Quiz Completed!</h3>
        <p class="fw-bold">You scored {{ score }} out of {{ questions.length }}</p>

        <h5 class="mt-4">Leaderboard 🏆</h5>
        <ul class="list-group leaderboard">
          <li class="list-group-item" v-for="(entry, index) in leaderboard" :key="index">
            {{ index + 1 }}. {{ entry.name }} - {{ entry.score }} pts
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'animate.css';
import confetti from 'canvas-confetti';

// Bins
const bins = [
  { label: 'Red Bin', class: 'btn-danger', emoji: '🟥' },
  { label: 'Yellow Bin', class: 'btn-warning', emoji: '🟨' },
  { label: 'Green Bin', class: 'btn-success', emoji: '🟩' }
];

// Questions with your images
const questions = ref([
  { name: 'Chip Packets', bin: 'Red Bin', image: '/quiz/ChipPackets.png', fact: 'Chip packets cannot be recycled – red bin.' },
  { name: 'Clothing', bin: 'Red Bin', image: '/quiz/Clothing.png', fact: 'Clothes should go to charity, but in bins → red bin.' },
  { name: 'Dirty Food Containers', bin: 'Red Bin', image: '/quiz/FoodContainers.png', fact: 'Dirty containers can’t be recycled – red bin.' },
  { name: 'Leftover Food', bin: 'Green Bin', image: '/quiz/LeftoverFood.png', fact: 'Food scraps are compostable → green bin.' },
  { name: 'Styrofoam', bin: 'Red Bin', image: '/quiz/Styrofoam.png', fact: 'Styrofoam cannot be recycled – red bin.' },
  { name: 'Tin Cans', bin: 'Yellow Bin', image: '/quiz/TinCans.png', fact: 'Tin cans are 100% recyclable → yellow bin.' }
]);

// State
const currentIndex = ref(0);
const score = ref(0);
const answered = ref(false);
const isCorrect = ref(false);
const quizCompleted = ref(false);
const isMuted = ref(false);

// Local sounds
const correctSound = new Audio('/sounds/correct.mp3');
const wrongSound = new Audio('/sounds/wrong.mp3');
const bgMusic = new Audio('/sounds/bg.mp3');
bgMusic.loop = true;

const currentQuestion = computed(() => questions.value[currentIndex.value]);
const progressText = computed(() => `Question ${currentIndex.value + 1} of ${questions.value.length}`);
const progressPercent = computed(() => ((currentIndex.value + 1) / questions.value.length) * 100);
const leaderboard = ref([]);

// Answer check
function checkAnswer(bin) {
  answered.value = true;
  isCorrect.value = bin === currentQuestion.value.bin;
  if (isCorrect.value) {
    score.value++;
    if (!isMuted.value) correctSound.play();
  } else {
    if (!isMuted.value) wrongSound.play();
  }
}

// Next
function nextQuestion() {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++;
    answered.value = false;
  } else {
    completeQuiz();
  }
}

// Complete
function completeQuiz() {
  quizCompleted.value = true;

  // 🎉 Fire confetti
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });

  const name = prompt('Enter your name for the leaderboard:') || 'Player';
  const entry = { name, score: score.value };
  const existing = JSON.parse(localStorage.getItem('leaderboard') || '[]');
  existing.push(entry);
  existing.sort((a, b) => b.score - a.score);
  leaderboard.value = existing.slice(0, 5);
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard.value));
}

// Restart
function restartQuiz() {
  questions.value = shuffleArray(questions.value);
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
  } else {
    bgMusic.play();
  }
}

// Shuffle helper
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Init
onMounted(() => {
  questions.value = shuffleArray(questions.value);
  leaderboard.value = JSON.parse(localStorage.getItem('leaderboard') || '[]');
  // Start music after first click (browser policy)
  document.body.addEventListener('click', () => {
    if (!isMuted.value && bgMusic.paused) bgMusic.play();
  }, { once: true });
});
</script>

<style scoped>
.quiz-container {
  background: url('/backgrounds/trash-quiz-bg.png') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  padding: 20px;
}

/* Highlighted quiz card */
.quiz-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  padding: 30px;
  max-width: 600px;
  width: 100%;
}

.quiz-image {
  width: 160px;
  height: 160px;
  object-fit: contain;
  margin-bottom: 10px;
}

.bin-btn {
  min-width: 140px;
  font-size: 20px;
  padding: 12px 18px;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.leaderboard {
  max-width: 320px;
  margin: 0 auto;
  text-align: left;
}
</style>
