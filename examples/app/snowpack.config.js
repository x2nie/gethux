// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  root: "src/",
  mount: {
    src: "/",
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
    external: [
      "../tux"
    ]
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    out: "./build",
  },
};
