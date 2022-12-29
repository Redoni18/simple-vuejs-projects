var app = new Vue({
    el: '#vue-app',
    data: { 
      name : '',
      job: 'Ninja',
      website: "https://www.google.com/",
      websiteTag: '<a href="https://www.google.com/">Google</a>',
      age: 20,
      x: 0,
      y: 0,
      info: "press alt + enter",
      a: 0,
      b: 0,
      available: false,
      nearby: false,
      error: false,
      success: false,
      characters: ['A', 'B', 'C', 'D'],
      ninjas: [
          { name: 'A', age: 25 },
          { name: 'B', age: 35 },
          { name: 'C', age: 55 }
        ]
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name
        },
        add(inc) {
            this.age += inc
        },
        subtract(inc){
            this.age -= inc
        },
        updateXY(event){
            this.x = event.offsetX
            this.y = event.offsetY
        },
        logName(){
            alert('you entered your name ')
        },
        logAge(){
            alert('you entered your age')
        },
    },
    computed: {
        addToA(){
            console.log('addToA')
            return this.a + this.age
        },
        addToB(){
            console.log('addtoB')
            return this.b+this.age
        },
        compClasses(){
            return{
                available: this.available,
                nearby: this.nearby
            }
        }
        
    }
  });