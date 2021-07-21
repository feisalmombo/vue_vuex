<template>
    <div class="Cats">
        <!-- <b-table striped hover :items="cats" /> -->
        <h1>Cats for Adoption</h1>
        <p>{{cats}}</p>
    </div>
</template>

<script>
// import cats from '@/data/cats'  // The @ symbol means ../../
                                // Instead of import cats from data/cats you may 
                                // comment this line and write in this way
import { mapState } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState([
            'cats'
        ])
    }
}
</script>