<template>
  <button @click="stopHabit" class="stop-habit-button">Stop</button>
</template>

<script setup>
import { defineProps } from 'vue';
import { useHabitStore } from '../../store/habitStore';

// Define habit prop for component
const props = defineProps({
  habit: Object,
});

const habitStore = useHabitStore();

// Function to stop the habit
const stopHabit = () => {
  // eslint-disable-next-line no-restricted-globals
  if (confirm('Are you sure you want to stop this habit?')) {
    habitStore.stopHabit(props.habit);
  }
};
</script>

<style scoped>
.stop-habit-button {
  background-color: #166d2080;
  color: white;
  font-size: 12px;
  border: none;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  margin-right: 10px;
}
</style>
