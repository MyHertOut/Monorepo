
// bem 命名规范
// block 代码块  element 元素  modifier 修饰符 state 状态 
// g-button
// g-button__element
// g-button__element--disabled  
// is-checked is-enabled is-disabled is-loading is-primary is-success is-warning is-error


// :class=[bem.b('button', 'element', 'disabled')]

// 前缀名 g-button-box__element--modifier
const _bem = (prefixName: string, blockSuffix: string, element: string, modifier: string) => {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`
  }
  if (element) {
    prefixName += `__${element}`
  }
  if (modifier) {
    prefixName += `--${modifier}`
  }
  return prefixName
}

const createBEM = (prefixName: string) => {
  const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '') // block
  const e = (element: string = '') => element ? _bem(prefixName, '', element, '') : '' // element
  const m = (modifier: string = '') => modifier ? _bem(prefixName, '', '', modifier) : '' // modifier

  const be = (blockSuffix: string = '', element: string = '') => blockSuffix && element ? _bem(prefixName, blockSuffix, element, "") : '' // block-element
  const bm = (blockSuffix: string = '', modifier: string = '') => blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : '' // block--modifier
  const em = (element: string = '', modifier: string = '') => element && modifier ? _bem(prefixName, '', element, modifier) : '' // element--modifier

  const bem = (blockSuffix: string = '', element: string = '', modifier: string = '') => blockSuffix && element && modifier ? _bem(prefixName, blockSuffix, element, modifier) : '' // block-element--modifier

  const is = (name: string, state: boolean | string) => state ? `is-${name}` : '' // is-name

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is
  }
}

export const createNameSpace = (name: string) => {
  const prefixName = `g-${name}`
  return createBEM(prefixName)
}

/**
const bem = createNameSpace('icon')

console.log(bem.b('box'))
console.log(bem.e('element'))
console.log(bem.m('modifier'))

console.log(bem.be('box', 'element'))
console.log(bem.bm('box', 'modifier'))
console.log(bem.em('element', 'modifier'))

console.log(bem.bem('box', 'element', 'modifier'))
console.log(bem.is('checked', true))
 */