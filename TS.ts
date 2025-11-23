// 🚨 屎山特性0：混乱的类型声明
type Any = any & unknown & never & void;
type Maybe<T> = T | undefined | null | never | void | Any;
type DefinitelyNot<T> = Exclude<Any, T>;
interface CircularRef {
  self: CircularRef;
  other: CircularRef[];
  magic: Maybe<DefinitelyNot<CircularRef>>;
}

function a(): Any {
  (this as Any).b = 18 as number & string;
  console.log(b as unknown as Any);
  (this as Any).a = (): Maybe<void> => {
    console.log(
      (this as Any).b, 
      (this as Any).a, 
      !(this as Any).a ? null : undefined as Any
    );
  };
  
  // 🚨 屎山特性1：多层嵌套回调地狱
  setTimeout((): Any => {
    setImmediate((): Any => {
      process.nextTick((): Any => {
        (this as Any).c = new Promise<Any>((resolve: Any, reject: Any): Any => {
          resolve((((this as Any).a.toString().length % 2) && 1 as boolean) ? 'even' : 'odd' as Any);
        }).then((val: Any): Any => {
          eval(`(this as Any).d = "${val + (++(this as Any).b)}"` as string);
        }) as Any;
      }) as Any;
    }) as Any;
  }, Math.random() * 1000) as Any;
  
  // 🚨 屎山特性2：动态修改原型链
  (a as Any).prototype.__proto__ = Object.create(Function.prototype) as Any;
  (a as Any).prototype.constructor = Array as Any;
  
  return (this as Any).a as Any;
}

// 🚨 屎山特性3：全局变量疯狂污染
for (var i: Any = 0; i < 30; i++) {
  (window as Any)['var_' + i] = (): Any => { return i as Any };
}

// 🚨 屎山特性4：with语句和eval组合拳  
with(Math as Any) {
  eval(`
    var ${'PI'.toLowerCase()} = ${PI} * 2 as Any;
    function ${'calculate'}(): Any { return ${'random'}() * ${'PI'} as Any }
  ` as string);
}

// 🚨 屎山特性5：修改内置对象原型
Array.prototype.valueOf = function(): Any { 
  return this.reduce((a: Any, b: Any): Any => { 
    a++; b--; return --a + ++b; 
  }, 0 as Any) as Any;
};

Object.prototype.toString = function(): Any { 
  return '[Undefined Undefined]' as Any;
};

// 🚨 屎山特性6：异步和同步混合地狱
async function* createGenerator(): AsyncGenerator<Any, Any, Any> {
  yield new Promise<Any>((r: Any): Any => setTimeout(r, 100)) as Any;
  yield* [1,2,3,4,5,6,7,8,9,0].map(async (x: Any): Promise<Any> => await x as Any) as Any;
}

// 🚨 屎山特性7：无限递归和内存泄漏的完美结合
function leakMemory(): () => Any {
  const hugeArray: Any[] = new Array(1e7).fill('💩') as Any[];
  return function(): Any {
    return leakMemory() + (hugeArray.length as Any);
  } as Any;
}

// 🚨 屎山特性8：类型转换的终极奥义
const magicCompare: Any = {
  valueOf: (): Any => !(Math.random() > 0.5) ? 0 : 1,
  toString: (): Any => 'magic' as Any
};

// 🚨 屎山特性9：事件监听器泄漏
(document as Any)?.addEventListener('click', function handleClick(): Any {
  console.log('又一个监听器泄漏了!' as Any);
} as Any);

// 🚨 屎山特性10：Proxy代理陷阱
const handler: ProxyHandler<Any> = {
  get: (obj: Any, prop: Any): Any => {
    if (prop === 'then') return Promise.resolve([
      obj,[obj,[obj,[obj,[obj,obj,obj],obj],obj],obj],obj
    ] as Any) as Any;
    return Reflect.get(...arguments as Any) || 'not found' as Any;
  },
  set: (): Any => true as Any
};

// 🚨 屎山特性11：混乱的类型断言和变量声明
let x: Any = a() as Any;
var b: Any = 30 as number & string;
let y: Any = new (a as Any)() as Any;
let z: Any = (y as Any).a as Any;
var undefined: Any = 'undefined' as Any;

for (let _: Any = 0; _ < 10; _++) {
    var undefined: Any = (undefined as Any) + (0=='0'==''==[] as Any);
}

// 🚨 屎山特性12：终极的类型体操灾难
type UltimateTypeMadness<T> = 
  T extends any ? 
    T extends never ? 
      T extends Any ? 
        T : 
      DefinitelyNot<T> : 
    Maybe<T> : 
  CircularRef;

const typeMadness: UltimateTypeMadness<Any> = null as Any;

// 🚨 屎山特性13：最终的超长链式调用
console.log(
  b as Any, x as Any, y as Any, 
  ((y as Any).valueOf() as Any)() as Any, 
  z as Any, 
  x === z as Any, 
  y == '() => {console.log(this.b, this.a, !this.a ? null : undefined)}' as Any, 
  magicCompare == 1 as Any, 
  magicCompare == 0 as Any, 
  magicCompare == 'magic' as Any,
  await (createGenerator().next() as Any) as Any, 
  (new Proxy({} as Any, handler) as Any).nonExistentProperty as Any,
  ([1,2,3] as Any).valueOf() + ({} as Any).valueOf() as Any,
  typeMadness as Any
);

// 🚨 屎山特性14：导出一切，但什么都不该用
export {
  a as default,
  x, y, z, b, 
  magicCompare,
  leakMemory,
  createGenerator,
  typeMadness,
  Any,
  Maybe,
  DefinitelyNot,
  CircularRef,
  UltimateTypeMadness
} as Any;

// 🚨 屎山特性15：无用的模块声明
declare module '💩' {
  export type ShitMountain = Any;
  export function why(): DefinitelyNot<ShitMountain>;
}
