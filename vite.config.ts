/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules/**/*','src/interfaces/**/*',
      '**/dist/**',
      '/src/App.tsx',
      '/src/Router.tsx'
    ],
    globals: true,
    environment: 'jsdom',
     coverage: {
       enabled: true,
      exclude: ['node_modules/**/*','src/interfaces/**/*',
        '**/dist/**',
        'src/App.tsx',
        'src/Router.tsx',
        'src/main.tsx',
         '.eslintrc.cjs'
      ],
     }
  },
})
