const babel = require("rollup-plugin-babel"); 
module.exports = {
  input: "./src/index.js",
  output: {
    file: './lib/bundle.js',
    format: 'cjs'
  },
  plugins: [babel()]
}