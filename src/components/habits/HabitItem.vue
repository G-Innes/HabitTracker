<template>
  <label class="custom-checkbox-container">
    <input
      type="checkbox"
      :checked="isHabitCompletedForDate(habitStore.formattedCurrentDate)"
      @change="toggleCompletion"
      class="custom-checkbox"
    />
    <span class="mr-3" :class="'category-' + habit.category">{{
      habit.category
    }}</span>
    <span
      class="custom-checkmark"
      :class="{
        'custom-checkmark-checked': isHabitCompletedForDate(
          habitStore.formattedCurrentDate,
        ),
      }"
    ></span>
    <span class="habit-name">{{ habit.name }}</span>
    <span
      v-if="isHabitCompletedForDate(habitStore.formattedCurrentDate)"
      class="success-message fade-in-out"
    >
      Completed!
    </span>
  </label>
</template>

<script setup>
import { defineProps } from 'vue';
import { useHabitStore } from '../../store/habitStore';

const { habit } = defineProps(['habit']);
const habitStore = useHabitStore();

const isHabitCompletedForDate = (date) => {
  return habit.completions && habit.completions[date];
};

const toggleCompletion = () => {
  habitStore.markHabitCompleted(habit.name, habitStore.formattedCurrentDate);
};
</script>

<style scoped>
.custom-checkbox-container {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: grey;
  cursor: pointer;
  justify-content: center;
  margin: 5px;
}
.custom-checkbox {
  display: none;
}
.custom-checkmark {
  width: 12px;
  height: 12px;
  border: 1px solid #888;
  border-radius: 50%;
  background-color: rgba(128, 128, 128, 0.309);
}
.custom-checkmark-checked {
  background-color: springgreen;
  border: none;
}
.habit-name {
  margin: 10px;
}
.success-message {
  color: springgreen;
  display: none;
}
.custom-checkbox:checked
  ~ .custom-checkmark-checked
  ~ .habit-name
  ~ .success-message {
  display: inline-block;
}
.custom-checkbox:checked
  ~ .custom-checkmark-checked
  ~ .habit-name
  ~ .success-message.fade-in-out {
  animation: fadeIn 0.8s forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
