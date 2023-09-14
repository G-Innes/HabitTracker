import { useHabitStore } from './habitStore';

// Function to provide access to habitStore's properties and actions To avoid repeatedly importing and initializing the habitStore in components
export default function useHabit() {
  // Initialize the habit store
  const habitStore = useHabitStore();

  // Return the properties and actions to expose
  return {
    habits: habitStore.habits, // Array of all habits
    currentDate: habitStore.currentDate, // Current date to track habits
    selectedDate: habitStore.selectedDate, // Selected date, useful for viewing habits for specific dates
    formattedCurrentDate: habitStore.formattedCurrentDate, // Current date in a readable format
    addHabit: habitStore.addHabit, // Action to add a new habit
    getHabitsForToday: habitStore.getHabitsForToday, // Action to get habits for today
    markHabitCompleted: habitStore.markHabitCompleted, // Action to mark a habit as completed
    getHabitsForDate: habitStore.getHabitsForDate, // Action to get habits for a specific date
  };
}
