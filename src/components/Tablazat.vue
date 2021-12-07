<template>
  <div>
      <table>
          <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
          </tr>
          <Sor v-for="sor in sorok" :key="sor.title" :sor="sor"></Sor>
          <tr>
              <th><input type="text"></th>
              <th><input type="text"></th>
              <th><input type="text"></th>
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
    }
}
</script>