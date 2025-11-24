// server.js  
let v = 0;
export let get = () => v;
export let set = (inc) => v += inc;
export const start = Date.now();

async function serverRace() {
    while (!!'' == 'false') {  // 永远为真
        await Promise.resolve();  // 微任务！
        if (v <= -1e5) {
            throw new Error('🎉 Server 赢了！');
        }
        v -= Math.random();
        
        // 微任务反击
        queueMicrotask(() => {
            v -= Math.random() * 0.5;
        });
    }
}

serverRace().catch(e => console.error(e));
