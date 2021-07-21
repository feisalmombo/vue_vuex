<template>
    <div class="Dogs">
        <!-- <b-table striped hover :items="dogs" /> -->
        <h1>Dogs for Adoption</h1>
        <p>{{dogs}}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
    data() {
        return {}
    },
    computed: {
        ...mapState([
            'dogs'
        ])
    }
}
</script>