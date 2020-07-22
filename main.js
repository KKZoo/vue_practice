var app = new Vue({
  el: '#app',
  data:{
    message: 'Hello Vue.js!',
    count:10,
    user: {
      lastName: 'Yamada',
      firstName: 'Taro',
      prefecture: 'Tokyo'
    },
    colors: ['Red', 'Green', 'Blue'],
    toggle: false,
    now: ''
  },
  methods: {
    onclick: function(){
      alert('onclick')
    }
  }
})
