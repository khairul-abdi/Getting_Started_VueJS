Vue.component('button-counter', {
  template: /*html */`<button @click="counter">You clicked me {{ count }} times.</button>`,
  data() {
    return {
      count: 0
    }
  },
  methods: {
    counter() {
      this.count++
    }
  }
})

const app = new Vue({
  el: '#components-demo'
})