<template>
  <ul class="mt-5">
    <li v-for="habit in habits" :key="habit.name">
      <!-- Habit componment (checkbox and name) -->
      <HabitItem :habit="habit" />
      <!--Stop component-->
      <StopHabit :habit="habit" />
      <!-- Edit component -->
      <button @click="editHabit(habit)">Edit</button>
      <!-- Delet component -->
      <DeleteHabitButton :habit="habit" />
    </li>
    <!-- Conditional rendering of the Edit component -->
    <div v-if="isEditing">
      <EditHabit :habit="selectedHabit" @editHabit="handleEditHabit" />
    </div>
  </ul>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';
import { useHabitStore } from '../../store/habitStore';

import HabitItem from './HabitItem.vue';
import EditHabit from './Edit.vue';
import DeleteHabitButton from './DeleteHabit.vue';
import StopHabit from './StopHabit.vue';

// Habits prop that component receives
defineProps({
  habits: Array,
});
const habitStore = useHabitStore();

// Store the currently selected habit for editing
const selectedHabit = ref(null);

// Checks if editing is active
const isEditing = computed(() => !!selectedHabit.value);

// Set a habit as selected for editing
const editHabit = (habit) => {
  selectedHabit.value = { ...habit };
};

// Handle the edits made to a habit
const handleEditHabit = (editedHabit) => {
  habitStore.editHabit(editedHabit);
  selectedHabit.value = null; // Clear the selection after editing
};
</script>

<style scoped>
li {
  list-style-type: none;
  margin-bottom: 5%;
}
button {
  background-color: #87971280;
  color: white;
  font-size: 12px;
  border: none;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
}
</style>
