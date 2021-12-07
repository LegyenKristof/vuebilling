<template>
    <tr>
        <td v-for="adat in sor" :key="adat">{{adat}}</td>
    </tr>
</template>

<script>
export default {
    props: ["sor"]
}
</script>