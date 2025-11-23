// src/index.ts
// 🚨 史诗级屎山 - TypeScript 最终版

// 声明全局变量
declare var b: any;
declare var globalThis: any;

// 简单的 any 类型
type Any = any;

export function a(this: any): Any {
  this.b = 18;
  console.log(b);
  this.a = () => {
    console.log(this.b, this.a, !this.a ? null : undefined);
  };
  
  // 🚨 屎山特性1：多层嵌套回调地狱
  setTimeout(() => {
    (globalThis as any).setImmediate(() => {
      (globalThis as any).process.nextTick(() => {
        this.c = new Promise((resolve, reject) => {
          resolve((this.a.toString().length % 2) && 1 ? 'even' : 'odd');
        }).then(val => {
          // 修复：添加类型断言
          eval(`this.d = "${(val as any) + (++this.b)}"`);
        });
      });
    });
  }, Math.random() * 1000);
  
  // 🚨 屎山特性2：动态修改原型链
  (a as any).prototype.__proto__ = Object.create(Function.prototype);
  (a as any).prototype.constructor = Array;
  
  return this.a;
}

// 🚨 屎山特性3：全局变量疯狂污染
for (var i: any = 0; i < 30; i++) {
  globalThis['var_' + i] = () => i;
}

// 🚨 屎山特性7：无限递归和内存泄漏的完美结合
export function leakMemory(): any {
  const hugeArray = new Array(1e6).fill('💩');
  return function() {
    return leakMemory() + hugeArray.length;
  };
}

// 🚨 屎山特性8：类型转换的终极奥义
export const magicCompare: any = {
  valueOf: () => !(Math.random() > 0.5) ? 0 : 1,
  toString: () => 'magic'
};

// 🚨 屎山特性10：Proxy代理陷阱
export function createProxy(): any {
  const handler = {
    get: (obj: any, prop: any) => {
      if (prop === 'then') return Promise.resolve([
        obj,[obj,[obj,[obj,[obj,obj,obj],obj],obj],obj],obj
      ]);
      return Reflect.get(obj, prop) || 'not found';
    },
    set: () => true
  };
  return new Proxy({}, handler);
}

// 🚨 添加一些"实用"功能
export function whyWouldYouUseThis(): never {
  throw new Error('Seriously, why would you use this?');
}

export const packageWarning = '⚠️  This package is for educational purposes only!';

// 默认导出
export { a as default };
