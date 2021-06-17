/**
 * @description 常量定义
 */

// SSR 的属性标记
export const SSR_ATTR = 'data-server-rendered'

// 资产类型，包括组件，指令，过滤器（管道），方面做初始化，做赋值时引用。
export const ASSET_TYPES = [
  'component',
  'directive',
  'filter'
]

// 生命周期名
export const LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
]
