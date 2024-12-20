import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSvgr from 'vite-plugin-svgr'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vitePluginSvgr({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
    css: {
        modules: true,
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use 'src/styles/_functions.scss' as *;
                    @use 'src/styles/_mixins.scss' as *;
                    @use 'src/styles/_variables.scss' as *;
                    @use 'src/styles/_font.scss' as *;
                    @use 'src/styles/breakpoints.scss' as *;
                `
            }
        }
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src')
        }
    }
})
