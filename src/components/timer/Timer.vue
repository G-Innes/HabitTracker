<template>
  <div class="mt-5 d-flex justify-center flex-column align-center">
    <input v-model.number="minutes" min="1" placeholder="Enter Minutes" />
    <button class="mt-5" @click="startTimer">Start Timer</button>

    <div class="text-grade mt-5 pl-10 pr-10" v-if="timerRunning">
      Time left: {{ formattedTimeLeft }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// state for input minutes, track remaining time & check if running
const minutes = ref(0);
const timeLeft = ref(0);
const timerRunning = ref(false);

const startTimer = () => {
  if (minutes.value <= 0) {
    alert('Please enter a valid time in minutes.');
    return;
  }
  // Convert minutes to seconds
  timeLeft.value = minutes.value * 60;
  timerRunning.value = true;
  const interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value -= 1; // decrement time left every second
    } else {
      // Stop timer & update state on timeLeft 0
      timerRunning.value = false;
      clearInterval(interval);
      alert("Time's up!");
    }
  }, 1000);
};

// Format time left for display
const formattedTimeLeft = computed(() => {
  const mins = Math.floor(timeLeft.value / 60);
  const secs = timeLeft.value % 60;
  return `${mins} minute(s) and ${secs} seconds left`;
});
</script>
