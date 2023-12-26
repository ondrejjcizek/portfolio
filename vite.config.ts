import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'
import glslify from 'rollup-plugin-glslify'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [sveltekit(), glslify()],
    ssr: { noExternal: ['postprocessing', 'three'] },
    css: {
        preprocessorOptions: {
            stylus: {
                imports: [path.resolve(__dirname, 'src/lib/styles/global.styl')],
            },
        },
    },
})
