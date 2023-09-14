<template>
  <span class="day-text">Select Habit days</span>
  <div class="checkbox-group">
    <div class="d-flex justify-center flex-wrap">
      <!-- Render checkbox for each day -->
      <label class="custom-checkbox" v-for="day in activeDays" :key="day">
        <!-- Bind checked status and update logic to each checkbox -->
        <input
          type="checkbox"
          name="daybox"
          :value="day"
          :checked="selectedDays.includes(day)"
          @change="updateSelectedDays(day)"
        />
        <span class="checkmark"></span>
        {{ day }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define props for receiving active days and the current selected days
const { activeDays, selectedDays } = defineProps([
  'activeDays',
  'selectedDays',
]);
const emit = defineEmits(['updateSelectedDays']);

// Update selected days when checkbox is checked
const updateSelectedDays = (day) => {
  emit('updateSelectedDays', day);
};
</script>
