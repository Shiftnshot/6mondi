console.log("Test.js LOADED !")

var app = new Vue({
  el: '#app',
  data: {
    selected: 'Aucune',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
