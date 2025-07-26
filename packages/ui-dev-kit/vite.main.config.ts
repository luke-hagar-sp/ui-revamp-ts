import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/electron/main.ts'),
            formats: ['cjs'],
            fileName: 'main',
        },
    },
    plugins: [
        {
            name: "restart",
            closeBundle() {
                process.stdin.emit("data", "rs");
            },
        },
    ],
});
