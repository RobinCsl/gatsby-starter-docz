import merge from 'webpack-merge'
import { css } from 'docz-plugin-css'

export default {
  title: 'Docz with Gatsby',
  // Add CSS support in case you use them in your Gatsby project
  plugins: [css()],
  // Wrapper used to inject some global variable mocks
  wrapper: 'docz/wrapper.js',
  modifyBundlerConfig: config => {
    const gatsbyNecessaryConfig = {
      module: {
        rules: [
          {
            // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
            // Ignore .json files because they fail to be parsed
            exclude: [/node_modules\/(?!(gatsby)\/)/, /\.json$/],
            use: [
              {
                // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
                loader: 'babel-loader',
                options: {
                  // use @babel/preset-react for JSX and env (instead of staged presets)
                  presets: ['@babel/preset-react', '@babel/preset-env'],
                  plugins: [
                    // use @babel/plugin-proposal-class-properties for class arrow functions
                    '@babel/plugin-proposal-class-properties',
                    // use @babel/plugin-syntax-dynamic-import for dynamic import support
                    '@babel/plugin-syntax-dynamic-import',
                  ],
                },
              },
            ],
          },
        ],
      },
    }

    return merge(gatsbyNecessaryConfig, config)
  },
}
