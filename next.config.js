/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import './src/env.js';

/** @type {import("next").NextConfig} */
const config = {
    images: {
        domains: ['media2.dev.to'], // Add this line to allow external images from media2.dev.to
    },
};

export default config;
