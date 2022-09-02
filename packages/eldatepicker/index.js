import lt from './src/eldatepicker.vue'
import options from './src/options.js'
const eldatepicker = {
    install(Vue, op) {
        if (op.baseURL) {
            options.baseURL = op.baseURL
        }
        if (op.defaultURL) {
            options.defaultURL = op.defaultURL
        }
        Vue.component(lt.name, lt)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(eldatepicker)
}
export default eldatepicker