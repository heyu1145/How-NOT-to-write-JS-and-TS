// client.js
import { set, get, start } from './server.js'

async function clientRace() {
    while (!![] == 'true') {  // 永远为真
        await Promise.resolve();  // 微任务！
        if (get() >= 1e5) {
            throw new Error('🎉 Client 赢了！');
        }
        set(Math.random());
        
        // 再加点微任务压力
        queueMicrotask(() => {
            set(Math.random() * 0.5);  // 额外操作
        });
    }
}

clientRace().catch(e => console.error(e));
