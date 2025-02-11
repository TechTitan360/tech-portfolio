let userConfig = undefined;

try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // Ignore error
}

/** @type {import('next').NextConfig} */
let nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  images: {
    unoptimized: true, // Optimize images manually
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Merge userConfig into nextConfig if userConfig exists
function mergeConfig(baseConfig, customConfig) {
  if (!customConfig) {
    return baseConfig;
  }

  for (const key in customConfig) {
    if (
      typeof baseConfig[key] === 'object' &&
      !Array.isArray(baseConfig[key]) &&
      customConfig[key] !== null
    ) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...customConfig[key],
      };
    } else {
      baseConfig[key] = customConfig[key];
    }
  }

  return baseConfig;
}

// Apply the merge
nextConfig = mergeConfig(nextConfig, userConfig);

export default nextConfig;
