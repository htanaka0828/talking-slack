<template lang="pug">
transition(name="slide-fade" appear @after-appear="destroySelf")
  p(ref="textTarget" :style="styleVariables") {{text}}
</template>

<script>
export default {
  name: "comment",
  props: {
    text: {
      type: String,
      default: ""
    },
    top: {
      type: Number,
      default: 0
    },
    start: {
      type: Number,
      default: 0
    }
  },
  computed: {
    styleVariables() {
      return {
        "--top": `${this.top}px`,
        "--right": `${this.start}px`,
        "--right-end": `${this.start * -1}px`,
      }
    }
  },
  methods: {
    destroySelf() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  --top: 0px;
  --right: 0px;
  position: absolute;
  word-break: keep-all;
  overflow: hidden;
  z-index: 99999;
  top: var(--top);
  right: var(--right);
}
.slide-fade-enter-active {
  transition: all 5s linear;
}
.slide-fade-enter {
  --right-end: 0px;
  right: var(--right-end);
}
</style>
