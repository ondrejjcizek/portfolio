import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			stylus: {
				imports: [path.resolve(__dirname, 'src/lib/styles/global.styl')]
			}
		}
	}
});
