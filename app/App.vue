<template lang="pug">
div#target(:style="styleVariables")
  div#controller
    div.controller-head(@click="isOpen = !isOpen")
      | コントローラー
      span {{actionIcon}}
    table(v-show="isOpen")
      tr
        td フォントサイズ
        td
          input(type="number" step="0.1" v-model="fontSize")
          | ps
      tr
        td 色
        td
          | #
          input(type="text" v-model="fontColor")
      tr
        td サンプル
        td.sumple(:style="sumpleStyleValues") サンプルテキスト

</template>

<script>
import Vue from 'vue/dist/vue.esm.js';
import Comment from './Comment.vue';

export default {
  name: "app",
  data() {
    return {
      fontSize: 15,
      fontColor: '000',
      isOpen: true
    }
  },
  computed: {
    actionIcon() {
      return this.isOpen ? '-' : '+';
    },
    styleVariables() {
      return {
        '--width': `${this.windowWidth}px`,
        '--height': `${this.windowHeight}px`,
        '--font-size': `${this.fontSize}px`,
        '--font-color': `#${this.fontColor}`
      }
    },
    sumpleStyleValues() {
      return {
        '--font-size': `${this.fontSize}px`,
        '--font-color': `#${this.fontColor}`
      }
    }
  },
  methods: {
    addText(res) {
      const ComponentClass = Vue.extend(Comment)
      const instance = new ComponentClass({
        propsData: {
          text: res.data,
          top: this.createRandTop(),
          start: this.windowWidth
        }
      });
      instance.$mount();
      this.$el.append(instance.$el);
    },
    createRandTop() {
      const max = this.windowHeight - this.fontSize;
      const random = Math.floor( (Math.random() * (max + 1)) / 10 ) * 10;
      return random;
    }
  },
  mounted() {
    const ws = new WebSocket(`${APP_DOMAIN}/message`);
    ws.addEventListener("message", this.addText);
  }
}
</script>

<style lang="scss" scoped>
#target {
  --width: 0;
  --height: 0;
  --font-size: 15px;
  --font-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  color: var(--font-color);
  font-size: var(--font-size);
  width: var(--width);
  height: var(--height);
  background-color: rgba(0,0,0,0);
  #controller {
    width: 371px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 15px;
    color: #000;
    .controller-head {
      border: solid #000 1px;
      padding: 10px;
      margin-bottom: 10px;
      span {
        position: absolute;
        right: 10px;
        font-weight: bold;
        border: solid #000 1px;
        display: inline-block;
        text-align:center;
        background-color: #000;
        color: #fff;
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 50%;
      }
    }
    table {
      border: solid 1px;
      tr td {
        padding: 15px;
        border: solid 1px #000;
        &.sumple {
          --font-size: 15px;
          --font-color: #000;
          color: var(--font-color);
          font-size: var(--font-size);
        }
      }
    }
  }
}
</style>
