<template>
    <div class="Pet">
        <h1>{{ title | uppercase }}</h1>
        <p>{{ animal }}</p>
        <strong>{{ propertyName }}</strong>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Pet',
    data() {
        return {
            animal: {},
            title: 'Pet Page',
            propertyName: 'Hello from Getting to Know Vue.js!'
        }
    },
    template: `<div>
                  <div>{{ propertyName }}</div>
              </div>`
    ,
    computed: {
        ...mapState([
            'cats',
            'dogs'
        ])
    },
    // computed: {
    //     capitalizedText: function () {
    //         return this.text.toUpperCase();
    //     }
    // },
    mounted() {
        const animal = this.$route.params.id
        this.animal = animal
    },
    filters: {
        uppercase: function(value) {
            return value.toUpperCase();
        }
    }
}
</script>

<style scoped>

</style>