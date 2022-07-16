<template>
  <div class="circle"
    v-if="display"
    v-bind:style="{
    top: customStyle.top,
    left: customStyle.left,
    backgroundColor: customStyle.color,
    width: customStyle.width,
    height: customStyle.width
  }">
  </div>
</template>

<script>
export default {
  name: "CircleComponent",
  data(){
    return {
      colors: ['#8a307f', '#a2d5c6', '#077b8a', '#5c3c92', '#79a7d3', '#d71b3b', '#e8d71e'],
      customStyle: {
        left: 0,
        top: 0,
        color: null,
        width: 0,
      },
      display: false
    }
  },
  watch: {
    display() {
      if(!this.display) {
        this.initCircle()
      }
    }
  },
  methods: {
    initCircle() {
      this.customStyle.left = Math.random() * window.innerWidth + 'px';
      this.customStyle.top = Math.random() * window.innerHeight + 'px';
      this.customStyle.color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.customStyle.width = (Math.random() * (6 - 2) + 2) + 'em';
      this.display = true;
      setTimeout(() => {
        this.display = false
      }, Math.random() * 2000)
    },
  },
  mounted() {
    this.initCircle()
  }
}
</script>

<style scoped>
  .circle {
    position: absolute;
    border-radius: 50%;
  }
</style>