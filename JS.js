function a() {
  this.b = 18
  console.log(b)
  this.a = () => {console.log(this.b, this.a, !this.a ? null : undefined)}
  
  // 🚨 屎山特性1：多层嵌套回调地狱
  setTimeout(() => {
    setImmediate(() => {
      process.nextTick(() => {
        this.c = new Promise((resolve, reject) => {
          resolve((this.a.toString().length % 2) && 1 ? 'even' : 'odd')
        }).then(val => {
          eval(`this.d = "${val + (++this.b)}"`)
        })
      })
    })
  }, Math.random() * 1000)
  
  // 🚨 屎山特性2：动态修改原型链
  a.prototype.__proto__ = Object.create(Function.prototype)
  a.prototype.constructor = Array
  
  return this.a
}

// 🚨 屎山特性3：全局变量疯狂污染
for (var i = 0; i < 30; i++) {
  window['var_' + i] = function() { return i }
}

// 🚨 屎山特性4：with语句和eval组合拳  
with(Math) {
  eval(`
    var ${'PI'.toLowerCase()} = ${PI} * 2;
    function ${'calculate'}() { return ${'random'}() * ${'PI'} }
  `)
}

// 🚨 屎山特性5：修改内置对象原型
Array.prototype.valueOf = function() { return this.reduce((a,b) => { a++; b--; return --a + ++b; }, 0) }
Object.prototype.toString = function() { return '[Undefined Undefined]' }

// 🚨 屎山特性6：异步和同步混合地狱
async function* createGenerator() {
  yield new Promise(r => setTimeout(r, 100))
  yield* [1,2,3,4,5,6,7,8,9,0].map(async x => await x)
}

// 🚨 屎山特性7：无限递归和内存泄漏的完美结合
function leakMemory() {
  const hugeArray = new Array(1e7).fill('💩')
  return function() {
    return leakMemory() + hugeArray.length
  }
}

// 🚨 屎山特性8：类型转换的终极奥义
const magicCompare = {
  valueOf: () => !(Math.random() > 0.5) ? 0 : 1,
  toString: () => 'magic'
}

// 🚨 屎山特性9：事件监听器泄漏
document?.addEventListener('click', function handleClick() {
  // 故意不移除监听器
  console.log('又一个监听器泄漏了!')
})

// 🚨 屎山特性10：Proxy代理陷阱
const handler = {
  get: (obj, prop) => {
    if (prop === 'then') return Promise.resolve([obj,[obj,[obj,[obj,[obj,obj,obj],obj],obj],obj],obj])
    return Reflect.get(...arguments) || 'not found'
  },
  set: () => true // 允许设置任何属性，包括不存在的
}

x = a()
var b = 30
y = new a
z = y.a
var undefined = 'undefined'
for (let _ = 0;_ < 10;_++) {
    var undefined = undefined + 0=='0'==''==[]
}

// 🚨 屎山特性11：最终的超长链式调用
console.log(b, x, y, y.valueOf()(), z, x === z, y == '() => {console.log(this.b, this.a, !this.a ? null : undefined)}', 
  magicCompare == 1, magicCompare == 0, magicCompare == 'magic',
  await createGenerator().next(), new Proxy({}, handler).nonExistentProperty,
  [1,2,3].valueOf() + {}.valueOf()
)
