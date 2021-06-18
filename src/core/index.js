/**
 * new Vue会根据平台进入不同的运行时文件，比如 web 的，是 src/platforms/web/entry-runtime.js
 * 然后会执行本文件的内容
 */

// Vue 的定义是在 instance/index.js 
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

// 拿到了 Vue 构造函数后，给它初始化静态属性和方法，比如 Vue.set, Vue.nextTick 等
initGlobalAPI(Vue)

// 然后定义一些原型属性
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

// TODO: Vue版本号？这里为什么没有取具体值，要研究下
Vue.version = '__VERSION__'

export default Vue
