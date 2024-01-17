import webpack from "webpack"
import path from "path"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:8]"
                            : "[hash:base64:8]",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }
}


export default ({ config }) => {
    const paths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push(".js", ".jsx")

    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '..', 'src',),
      '@': path.resolve(__dirname, '..','public','assets'),
    }

    // eslint-disable-next-line no-param-reassign
    /*    config.module?.rules? = config.module?.rules?.map((rule: RuleSetRule) => {
        if (rule !==/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule;
    }) */


    if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module?.rules?.map(
            (rule: webpack.RuleSetRule | "...") => {
                if (rule !== "..." && /svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i }
                }

                return rule
            }
        )
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    })
    config.module?.rules?.push(buildCssLoader(true))

     



   /*  config.module.rules.push({
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components|package\.json)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
          plugins: [
            ["module-resolver", {
              alias: {
                "~": "./src",
                "@": "./public/assets",
              },
            }],
          ],
        },
      },
    }); */

    return config
}
