<template>
  <div>
    <h2>Vue Microfrontend</h2>
    <p>React count: {{ reactCount }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reactCount: 0,
    };
  },
  mounted() {
    window.addEventListener("react-count", (event) => {
      this.reactCount = event.detail;
    });
  },
};
</script>
