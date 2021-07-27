<template>
<div class="driver">
    <p>{{ comment}}</p>

    <h2>{{ fname }}</h2>
    <input v-text="fname" type="text" name="fname" v-model="fname" placeholder="First Name">
    <br>

    <p>My name is {{name}}</p>
    <button @click="changeName()">Change my name!</button>
    <br>
    <!-- Events -->
    <!-- <a v-on:click="handleClick">Click me!</a> -->
    <a @click="handleClick">Click me!</a>
</div>
</template>

<script>
export default {
    name: "Driver",
    data() {
        return {
            comment: "Hello Driver",
            fname: '',
            name: 'Mombo Feisal'
        }
    },
    methods: {
        handleClick: function() {
            alert('test')
        },

        changeName: function() {
          this.name = 'Flavius'
          console.log(this.name)
        }
    },
    watch: {
        name: function() {
            console.log(this.name)
        }
    }

}
</script>

<style scoped>

</style>