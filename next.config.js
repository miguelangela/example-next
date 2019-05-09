const widthTypescript = require('@zeit/next-typescript');
const winthCss = require ('@zeit/next-css');

module.exports = widthTypescript(
    winthCss({
        cssModules: true,
        cssLoaderOptions: {
            camelCase: true,
        }
    })
);
