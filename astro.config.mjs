import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Vite mangles Windows network drive paths (S: -> \\kumc.edu\data\Shared\ -> /kumc.edu/data/Shared/)
// This plugin remaps them back to the correct drive-letter path.
const fixUncPaths = {
  name: 'fix-unc-paths',
  resolveId(id) {
    const uncPrefix = '/kumc.edu/data/Shared/';
    if (id.startsWith(uncPrefix)) {
      return 'S:/' + id.slice(uncPrefix.length);
    }
  },
};

export default defineConfig({
  site: 'https://rachelgriffard.github.io',
  integrations: [mdx()],
  vite: {
    plugins: [fixUncPaths],
    resolve: {
      preserveSymlinks: true,
    },
  },
});
