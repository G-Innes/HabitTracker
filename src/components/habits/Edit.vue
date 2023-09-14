<template>
  <div class="d-flex justify-center">
    <!-- Edit habit details -->
    <form class="ma-5" @submit.prevent="saveChanges">
      <input
        class="rounded-pill ma-5"
        type="text"
        v-model="editedHabit.name"
        placeholder="Enter Habit Name"
      />
      <!-- Category select -->
      <div class="cat-group ma-2">
        <Categories :categories="categories" v-model="editedHabit.category" />
      </div>
      <!-- Active days select -->
      <div class="day-group ma-2">
        <Days
          :activeDays="days"
          :selectedDays="editedHabit.activeDays"
          @updateSelectedDays="updateSelectedDays"
        />
      </div>
      <button class="ma-5" type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import Categories from './Cats.vue';
import Days from './Days.vue';

const { habit } = defineProps(['habit']);
const emit = defineEmits(['editHabit']);

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const categories = ['Health', 'Work', 'Hobby', 'Mindset'];

// Ref to store the edited habit
const editedHabit = ref({ ...habit, category: habit.category || '' });

// Save changes and notify parent component
const saveChanges = () => {
  emit('editHabit', editedHabit.value);
};

// Update active days whenever a day is clicked
const updateSelectedDays = (day) => {
  editedHabit.value.activeDays = editedHabit.value.activeDays.includes(day)
    ? editedHabit.value.activeDays.filter((d) => d !== day)
    : [...editedHabit.value.activeDays, day];
};
</script>
