<template>
  <div class="card">
    <h2>Vue Counter MFE</h2>
    <p>The current count is:</p>
    <span class="counter">{{ count }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { counterStore } from "@acme/shared-logic";

const count = ref(0);
let subscription;

onMounted(() => {
  subscription = counterStore.counter$.subscribe((newCount) => {
    count.value = newCount;
  });
});

onUnmounted(() => {
  if (subscription) {
    subscription.unsubscribe();
  }
});
</script>

<style>
.card {
  padding: 20px;
  border: 2px solid #42b983;
  border-radius: 8px;
  text-align: center;
}
.counter {
  font-size: 48px;
  font-weight: bold;
  color: #42b983;
}
</style>
