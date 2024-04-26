const path = require("path")
const CracoLessPlugin = require("craco-less")

module.exports = {
  // 配置less
  plugins: [{ plugin: CracoLessPlugin }],
  // 配置别名
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
      "utils": path.resolve(__dirname, "src/utils")
    }
  }
}
