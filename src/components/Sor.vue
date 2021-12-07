<template>
    <tr>
        <td v-if="!edit">{{sor.title}}</td>
        <td v-if="!edit">{{sor.price}}</td>
        <td v-if="!edit">{{sor.quantity}}</td>
        <td v-if="!edit"><button @click="torol">X</button><button @click="modosit">Edit</button></td>
        <td v-if="edit"><input type="text" v-model="title"></td>
        <td v-if="edit"><input type="number" v-model="price"></td>
        <td v-if="edit"><input type="number" v-model="quantity"></td>
        <td v-if="edit"><button @click="mentes">Save</button></td>
    </tr>
</template>

<script>
export default {
    props: ["sor"],
    methods: {
        torol(){
            this.$emit("torol", this.sor.title)
        },
        modosit(){
            this.edit = true
        },
        mentes(){
            this.edit = false
            this.$emit("mentes", {old: this.sor, new: {title: this.title, price: this.price, quantity: this.quantity}})
        }
    },
    data() {
        return {
            edit: false,
            title: this.sor.title,
            price: this.sor.price,
            quantity: this.sor.quantity
        }
    }
}
</script>