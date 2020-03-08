
// import './aaa.scss'
import Vue from 'vue'
import App from './App.vue'

let aaaaa = '52'
console.log(Vue);


new Vue({
  el: '#app',  //#app 元素的 outerHTML 是 Vue 模板，该模板可以被编译成 render function。
  template: '<App/>',
  components: { App }
})
