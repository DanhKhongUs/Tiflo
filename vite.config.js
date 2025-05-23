import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';

// Tạo __dirname vì đang dùng ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
    base: '/project_tiflo/',
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
});
