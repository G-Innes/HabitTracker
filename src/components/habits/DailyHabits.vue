<template>
  <div class="daily-habits d-flex flex-column pl-10 pr-10">
    <h1><span class="text-grade">Habits</span> for</h1>
    <!-- Selector for navigating between days -->
    <div class="day-select d-flex justify-space-evenly align-center mt-5">
      <!-- Previous day -->
      <v-btn color="rgba(0, 255, 127, 0.3)" icon @click="showPreviousDay">
        <v-icon>mdi-arrow-left-circle</v-icon>
      </v-btn>
      <!-- Display selected date -->
      <span class="ml-5 mr-5">{{ habitStore.formattedCurrentDate }}</span>
      <!-- Next day -->
      <v-btn color="rgba(0, 255, 127, 0.3)" icon @click="showNextDay">
        <v-icon>mdi-arrow-right-circle</v-icon>
      </v-btn>
    </div>
    <!-- List of habits for selected date -->
    <HabitList :habits="habitsForToday" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHabitStore } from '../../store/habitStore';
import HabitList from './HabitList.vue';

// Access habit store
const habitStore = useHabitStore();

// Ref to store list of habits for selected day
const habitsForToday = ref([]);

// When component is mounted, get habits for that date
onMounted(() => {
  habitsForToday.value = habitStore.getHabitsForDate();
});

// Update displayed habits based on the selected date
const updateHabitsForDate = (daysToAdd) => {
  const newDate = new Date(habitStore.currentDate);
  newDate.setDate(newDate.getDate() + daysToAdd);
  habitStore.currentDate = newDate;
  habitsForToday.value = habitStore.getHabitsForDate(habitStore.currentDate);
};

// Nav to previous date habits
const showPreviousDay = () => {
  updateHabitsForDate(-1);
};

// Next dates habits
const showNextDay = () => {
  updateHabitsForDate(1);
};
</script>
