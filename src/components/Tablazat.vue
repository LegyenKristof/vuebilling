<template>
  <div>
      <table>
          <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
          </tr>
          <tr v-for="sor in sorok" v-bind:key="sor.title">
              <td v-for="adat in sor" v-bind:key="adat">{{adat}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    props: ["sorok"]
}
</script>