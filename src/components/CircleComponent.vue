<template>
  <div
    class="circle"
    v-if="display"
    v-bind:style="{
      top: `${customStyle.top}px`,
      left: `${customStyle.left}px`,
      backgroundColor: customStyle.color,
      width: `${customStyle.width}px`,
      height: `${customStyle.width}px`,
    }"
  ></div>
</template>

<script>
export default {
  name: "CircleComponent",
  data() {
    return {
      colors: [
        "#8a307f",
        "#a2d5c6",
        "#077b8a",
        "#5c3c92",
        "#79a7d3",
        "#d71b3b",
        "#e8d71e",
      ],
      customStyle: {
        left: 0,
        top: 0,
        color: null,
        width: 0,
      },
      display: false,
    };
  },
  watch: {
    display() {
      if (!this.display) {
        this.initCircle();
      }
    },
  },
  methods: {
    initCircle() {
      this.customStyle.color =
        this.colors[Math.floor(Math.random() * this.colors.length)];
      this.customStyle.width = Math.floor(Math.random() * (120 - 20) + 20);
      this.customStyle.left = Math.floor(
        Math.random() * (window.innerWidth - this.customStyle.width * 1.3)
      );
      this.customStyle.top = Math.floor(
        Math.random() * (window.innerHeight - this.customStyle.width)
      );
      this.display = true;
      setTimeout(() => {
        this.display = false;
      }, Math.random() * 2000);
    },
  },
  mounted() {
    this.initCircle();
  },
};
</script>

<style scoped>
.circle {
  position: absolute;
  border-radius: 50%;
}
</style>
