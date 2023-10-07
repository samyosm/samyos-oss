// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { createContentlayerPlugin } = require('next-contentlayer');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const withContentlayer = createContentlayerPlugin({
  configPath: './apps/oss/contentlayer.config.ts',
});


const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withContentlayer,
];

module.exports = composePlugins(...plugins)(nextConfig);
