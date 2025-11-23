// 💩 Pure JavaScript 屎山版本 - 没有类型安全的保护更刺激！

function a() {
  this.b = 18;
  console.log(b);
  this.a = () => {
    console.log(this.b, this.a, !this.a ? null : undefined);
  };
  
  // 🚨 屎山特性1：多层嵌套回调地狱
  setTimeout(() => {
    setImmediate(() => {
      process.nextTick(() => {
        this.c = new Promise((resolve, reject) => {
          resolve((this.a.toString().length % 2) && 1 ? 'even' : 'odd');
        }).then(val => {
          eval(`this.d = "${val + (++this.b)}"`);
        });
      });
    });
  }, Math.random() * 1000);
  
  // 🚨 屎山特性2：动态修改原型链
  a.prototype.__proto__ = Object.create(Function.prototype);
  a.prototype.constructor = Array;
  
  return this.a;
}

// 🚨 屎山特性3：全局变量疯狂污染
for (var i = 0; i < 30; i++) {
  globalThis['var_' + i] = function() { return i };
}

// 🚨 屎山特性7：无限递归和内存泄漏的完美结合
function leakMemory() {
  const hugeArray = new Array(1e6).fill('💩');
  return function() {
    return leakMemory() + hugeArray.length;
  };
}

// 🚨 屎山特性8：类型转换的终极奥义
const magicCompare = {
  valueOf: () => !(Math.random() > 0.5) ? 0 : 1,
  toString: () => 'magic'
};

// 🚨 屎山特性10：Proxy代理陷阱
function createProxy() {
  const handler = {
    get: (obj, prop) => {
      if (prop === 'then') return Promise.resolve([
        obj,[obj,[obj,[obj,[obj,obj,obj],obj],obj],obj],obj
      ]);
      return Reflect.get(...arguments) || 'not found';
    },
    set: () => true
  };
  return new Proxy({}, handler);
}

// 🚨 添加一些"实用"功能
function whyWouldYouUseThis() {
  throw new Error('Seriously, why would you use this?');
}

const packageWarning = '⚠️  This package is for educational purposes only!';

// 导出所有"精华"
module.exports = {
  a,
  leakMemory,
  magicCompare,
  createProxy,
  whyWouldYouUseThis,
  packageWarning,
  default: a
};
