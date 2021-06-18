import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 简单地提供一个Vue构造器，其他复杂的行为都在其他方法中去实现
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    // 限制 Vue 必须通过 new 调用
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // new Vue得到实例对象，通过实例对象调用原型上挂载的_init方法进行初始化。
  // _init 原型方法是在 src/core/instance/init.js 中定义的，并且是在下面的 initMixin 调用时定义的。
  this._init(options)
}

// 见src/core/instance/init.js
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
