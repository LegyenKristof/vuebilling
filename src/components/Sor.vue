<template>
    <tr>
        <td v-for="adat in sor" v-bind:key="adat">{{adat}}</td>
    </tr>
</template>

<script>
export default {
    props: ["sor"]
}
</script>