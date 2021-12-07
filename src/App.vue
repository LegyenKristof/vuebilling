<template>
  <div id="app">
    <Tablazat :sorok="rows" @hozzaad="hozzaad" @torol="torol" @mentes="mentes"></Tablazat>
  </div>
</template>

<script>
import Tablazat from './components/Tablazat.vue'

export default {
  name: 'App',
  components: {
    Tablazat
  },
  data() {
    return {
      rows: [
        {
          title: 'Kerék',
          price: 100,
          quantity: 12
        },
        {
          title: 'Teleszkóp',
          price: 1000,
          quantity: 300
        },
        {
          title: 'Kormány',
          price: 230,
          quantity: 5
        },
        {
          title: 'Ajtó',
          price: 45120,
          quantity: 321
        },
      ]
    }
  },
  methods: {
    hozzaad(e){
        this.rows.push({title: e.title, price: e.price, quantity: e.quantity})
    },
    torol(e){
      this.rows = this.rows.filter(function(sor) {
        return sor.title != e
      })
    },
    mentes(e){
      this.rows.map(function (sor) {
        if(sor.title != e.old.title || sor.price != e.old.price || sor.quantity != e.old.quantity){
          return sor
        }
        sor.title = e.new.title
        sor.price = e.new.price
        sor.quantity = e.new.quantity
        return sor
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
