<template>
    <tr>
        <td v-for="adat in sor" :key="adat">{{adat}}</td>
        <td><button @click="torol">X</button><button>Edit</button></td>
    </tr>
</template>

<script>
export default {
    props: ["sor"],
    methods: {
        torol(){
            this.$emit("torol", this.sor.title)
        }
    }
}
</script>