<template>
<div class="driver">
    <p>{{ comment}}</p>

    <h2>{{ fname }}</h2>
    <input type="text" name="fname" v-model="fname" placeholder="First Name">
</div>
</template>

<script>
export default {
    name: "Driver",
    data() {
        return {
            comment: "Hello Driver",
            fname: ''
        }
    }

}
</script>

<style lang="scss" scoped>

</style>