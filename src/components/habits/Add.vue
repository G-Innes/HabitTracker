<template>
  <!-- New habit form -->
  <div class="d-flex justify-center">
    <form class="ma-5" @submit.prevent="addNewHabit">
      <!-- Habit name -->
      <input
        class="rounded-pill ma-5 pa-1"
        type="text"
        v-model="habitName"
        placeholder="Enter Habit Name"
      />
      <!-- Habit Category -->
      <div class="cat-group ma-5">
        <Categories :categories="categories" v-model="selectedCategory" />
      </div>
      <!-- Habit active days -->
      <div class="day-group ma-5">
        <Days
          :activeDays="activeDays"
          :selectedDays="selectedDays"
          @updateSelectedDays="updateSelectedDays"
        />
      </div>
      <button class="ma-5" type="submit">
        Add <span class="text-grade">Habit</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import { useHabitStore } from '../../store/habitStore';
import Categories from './Cats.vue';
import Days from './Days.vue';

// Initialize store
const habitStore = useHabitStore();

// Available categories and active days
const categories = ['Health', 'Work', 'Hobby', 'Mindset'];
const activeDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// Refs to store form inputs
const habitName = ref('');
const selectedDays = ref([]);
const selectedCategory = ref('');

// Function to add a new habit to the store
const addNewHabit = async () => {
  if (!habitName.value.trim()) {
    Swal.fire('Please enter a habit name!');
    return;
  }
  if (selectedDays.value.length === 0) {
    Swal.fire('Please select at least one active day');
    return;
  }
  if (selectedCategory.value.length === 0) {
    Swal.fire('Please select a category');
    return;
  }
  if (habitName.value.length >= 30) {
    Swal.fire('Keep habit name below 30 characters');
    return;
  }

  // Construct habit object
  const newHabit = {
    name: habitName.value,
    activeDays: selectedDays.value,
    category: selectedCategory.value,
    id: Date.now(),
    completions: {},
    stopped: false,
  };

  try {
    // Add the new habit to store
    habitStore.addHabit(newHabit);

    // Reset form fields after adding habit
    habitName.value = '';
    selectedDays.value = [];
    selectedCategory.value = [];

    Swal.fire('Habit added successfully');
  } catch (error) {
    Swal.fire('Failed to save habit', error);
  }
};

// Update selected active days when day is clicked
const updateSelectedDays = (day) => {
  selectedDays.value = selectedDays.value.includes(day)
    ? selectedDays.value.filter((d) => d !== day)
    : [...selectedDays.value, day];
};
</script>
