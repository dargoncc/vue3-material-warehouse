// export * from './Button';

import * as components from './Button';
import type { App } from 'vue';

export default {
    install: (app: App) => {
        for (let c in components) {
            console.log('cop', c);
            app.use(components[c]);
        }
    },
};
