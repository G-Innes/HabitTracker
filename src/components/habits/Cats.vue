<template>
  <span class="cat-text">Select a Category</span>
  <!-- Checkbox group for categories -->
  <div class="checkbox-group justify-center">
    <div class="d-flex justify-center">
      <!-- Render checkbox for each category -->
      <label class="custom-checkbox" v-for="cat in categories" :key="cat">
        <!-- Bind the checked status and update logic to checkbox -->
        <input
          type="checkbox"
          name="catbox"
          :value="cat"
          :checked="modelValue.includes(cat)"
          @change="updateSelectedCategory(cat)"
        />
        <span class="checkmark"></span>
        {{ cat }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define props for receiving categories & current selected value
const { categories, modelValue } = defineProps(['categories', 'modelValue']);
const emit = defineEmits(['update:modelValue']);

// Update selected category when a checkbox is toggled
const updateSelectedCategory = (cat) => {
  emit('update:modelValue', cat);
};
</script>
