<template>
  <div>
    VUEX
    <br>
    <button @click="jian()">-</button> {{ this.counter }} {{ this.inc3 }}<button @click="jia()">+</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
  data () {
    return {
    }
  },
  computed: {
     ...mapState ([ 'counter' ]),
     ...mapGetters([ 'inc3' ]),
  },
  methods: {
    ...mapMutations([ 'inc', 'dec' ]),
    jia() {
      this.inc()
    },
    jian() {
      if(this.counter > 0) {
        this.dec()
      } else {
        alert("没有了")
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
