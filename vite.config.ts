/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import webfontDownload from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    webfontDownload([
      'https://github.com/orioncactus/pretendard/tree/v1.3.9/packages/pretendard/dist',
    ]),
    react(),
    svgr({
      include: '**/*.svg',
    }),
  ],
});
