<template>
  <div>
      <table>
          <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Operations</th>
          </tr>
          <Sor v-for="sor in sorok" :key="sor.title" :sor="sor"></Sor>
          <tr>
              <td><input type="text" v-model="title"></td>
              <td><input type="number" v-model="price"></td>
              <td><input type="number" v-model="quantity"></td>
              <td><button @click="hozzaad">Hozzáad</button></td>
          </tr>
      </table>
  </div>
</template>

<script>
import Sor from "./Sor.vue"

export default {
    props: ["sorok"],
    components:{
        Sor
    },
    data() {
        return {
            title: null,
            price: null,
            quantity: null
        }
    },
    methods: {
        hozzaad(){
            this.$emit("hozzaad", { title: this.title, price: this.price, quantity: this.quantity})
            this.title = null
            this.price = null
            this.quantity = null
        }
    }
}
</script>