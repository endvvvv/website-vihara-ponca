// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  // vitest.config.ts (test)
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['tests/setup.ts'],
    css: true,
    coverage: {
      reporter: ['text', 'html'],
      include: ['src/components/**/*.{vue,ts}', 'src/utils/**/*.ts'],
      exclude: [
        'src/main.ts',
        'src/App.vue',
        'src/router/**',
        'src/pages/**',
        'src/layouts/**',
        'src/i18n/**',
        'src/store/**',
        'src/services/**',
      ],
      thresholds: {
        lines: 75,
        statements: 75,
        functions: 45,
        branches: 55,
      },
    },
  },
})
