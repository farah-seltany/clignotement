<template>
  <div class="container">
    <router-link class="back-button" to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0V0z" opacity=".87" />
        <path
          d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
        />
      </svg>
    </router-link>
    <div class="circles-container" ref="circlesContainer">
      <circle-component v-for="circle in numberOfCircle" :key="circle">
      </circle-component>
    </div>
  </div>
</template>

<script>
import CircleComponent from "@/components/CircleComponent";
export default {
  name: "BlinkingPage",
  components: { CircleComponent },
  data() {
    return {
      numberOfCircle: Math.floor(Math.random() * (130 - 50) + 50),
    };
  },
  mounted() {},
};
</script>

<style scoped>
.back-button {
  position: absolute;
  left: 1em;
  top: 1em;
  cursor: pointer;
  animation-name: example;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

@keyframes example {
  0% {
    left: 1em;
  }
  25% {
    left: 1.3em;
  }
  50% {
    left: 1em;
  }
  75% {
    left: 1.3em;
  }
  100% {
    left: 1em;
  }
}

.circles-container {
  height: 100vh;
  width: 100%;
}
</style>
