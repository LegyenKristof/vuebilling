<template>
    <tr>
        <td v-for="adat in sor" :key="adat">{{adat}}</td>
        <td><button>X</button><button>Edit</button></td>
    </tr>
</template>

<script>
export default {
    props: ["sor"]
}
</script>