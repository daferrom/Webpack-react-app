const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ruleForStyles = {
  test: /\.css$/,
  //el style loader hace el import y entiende el style,.
  // El css loader resuelvo los imports i require dentor de los archivos css referenciados a la app //
  use: ["style-loader", "css-loader"]
};
const rulesForJavascript = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic" //'classic'
        }
      ]
    ]
  }
};
const rules = [rulesForJavascript, ruleForStyles];
// la config de webpack puede ser un objeto pero tambien la configuración que devuelve un objeto //
module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";
  return {
    // The entry point in this case is the same as default thats the reason why is commented //
    // entry : 'src/index.js',//
    // config del output file dependiend del modo //
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build")
    },
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
    module: {
      rules
    },
    //Se puede añadir configuracion de webpack de devServer //
    devServer: {
      open: true,
      port: 3000,
      compress: true
    },
    // dev toopl is used to track error in console in the dev and it impacts the time of the compiler//
    devtool: "source-map"
  };
};
