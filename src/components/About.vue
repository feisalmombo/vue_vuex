<template>
    <div class="About">
        <h1>{{ title  | capitalizedText}}</h1>
        
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            title: 'About Page',
            text: 'Getting to Know Vue.js'
        }
    },
    template: `<div>{{ capitalizedText }}</div>`,
    computed: {
     capitalizedText: function () {
        return this.text.toUpperCase();
        }
    }
}
</script>

<style scoped>

</style>