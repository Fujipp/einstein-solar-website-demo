<template>
  <div class="spinner" :style="spinnerStyle"></div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  speed: {
    type: Number,
    required: true,
    default: 1
  }
});

const spinnerStyle = computed(() => {
  return {
    animation: `spin ${5 / props.speed}s linear infinite`
  };
});
</script>

<style scoped>
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>