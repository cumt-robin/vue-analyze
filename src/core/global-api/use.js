/* @flow */

import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    // 判断待安装的插件是不是已经存在于自身的插件列表中
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      // 如果插件已经存在了，直接返回this，是为了链式调用吧
      return this
    }

    // additional parameters
    // Vue.use(plugin, ...args)时可以传参数给插件
    // 这里toArray(arguments, 1)是把plugin剔除，取后面的作为参数
    const args = toArray(arguments, 1)
    // 然后要把Vue注入到参数列表前部
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      // plugin可以选择提供install方法，通过install方法能拿到Vue，和其他参数
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      // 也可以本身就是一个函数，当作install使用
      plugin.apply(null, args)
    }
    // 把这个新插件加入到插件列表中
    installedPlugins.push(plugin)
    // 最后也返回this，可以链式调用
    return this
  }
}
