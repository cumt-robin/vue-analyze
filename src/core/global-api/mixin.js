/* @flow */

import { mergeOptions } from '../util/index'

// 初始化mixin静态方法，mixin的核心在于 mergeOptions，这个和普通的 merge 不一样。具体见 src/core/util/index.js
export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    this.options = mergeOptions(this.options, mixin)
    // 提供链式调用能力
    return this
  }
}
