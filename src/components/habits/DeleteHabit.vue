<template>
  <button @click="deleteHabit" class="delete-habit-button">Delete</button>
</template>

<script setup>
import { defineProps } from 'vue';
import Swal from 'sweetalert2';
import { useHabitStore } from '../../store/habitStore';

// Define the habit prop for component
const props = defineProps({
  habit: Object,
});

const habitStore = useHabitStore();

// Delete the habit
const deleteHabit = () => {
  Swal.fire({
    title: 'Hold up...',
    text: 'Are you sure you want to delete this habit?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#06652780',
    cancelButtonColor: '#65060680',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {
    if (result.isConfirmed) {
      // Delete from store
      habitStore.deleteHabit(props.habit);
    }
  });
};
</script>

<style scoped>
.delete-habit-button {
  background-color: #65060680;
  color: white;
  font-size: 12px;
  border: none;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
