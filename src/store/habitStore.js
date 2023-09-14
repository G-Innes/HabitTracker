import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import {
  addHabit,
  markHabitCompleted,
  getHabitsForDate,
  deleteHabit,
  editHabit,
  stopHabit,
} from './habitActions';
import { formattedCurrentDate } from './habitGetters';

// eslint-disable-next-line import/prefer-default-export
export const useHabitStore = defineStore('habit', {
  // State for the habit store
  state: () => ({
    // Fetch habits from localStorage or default to an empty array
    habits: ref(JSON.parse(localStorage.getItem('habits')) || []),
    // The current date fro tracking habits
    currentDate: new Date(),
    // Selected date, for viewing habits for specific dates
    selectedDate: new Date(),
    // Object to keep track of completed habits
    completedHabits: reactive({}),
  }),
  // Getters for computed properties based on state
  getters: {
    formattedCurrentDate,
  },
  // Actions for modifying the state
  actions: {
    addHabit,
    markHabitCompleted,
    getHabitsForDate,
    deleteHabit,
    editHabit,
    stopHabit,
  },
});
