import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        counter:1
    },
    mutations: {
        inc(state) {
            state.counter++
        },
        dec(state) {
            state.counter--
        }
    },
    getters: {
        inc3(state) {
            return state.counter+3
        }
    },
    actions: {

    },
    modules: {
        
    }
})

export default store