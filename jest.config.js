module.exports = {
  testMatch: ["**/*.test.ts"],
  transformIgnorePatterns: ["/node_modules/"],
  transform: {
    ".+\\.ts$": [
      "@swc/jest",
      {
        sourceMaps: true,
        module: {
          type: "commonjs",
        },
        jsc: {
          parser: {
            syntax: "typescript",
          },
        },
      },
    ],
  },
};
