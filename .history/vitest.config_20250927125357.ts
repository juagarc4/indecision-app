import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(viteConfig);

export default defineConfig({
  test: {
    // ... Specify options here.
  },
});
