const path = require('path');

module.exports = function override(config, error) {
    config["resolve"] = {
        alias: {
            components: path.resolve(__dirname, 'src/Components/'),
            core: path.resolve(__dirname, 'src/Components/core'),
            error: path.resolve(__dirname, 'src/error/'),
            helmet: path.resolve(__dirname, 'src/Helmet/'),
            img: path.resolve(__dirname, 'src/img'),
            interface: path.resolve(__dirname, 'src/interface'),
            pages: path.resolve(__dirname, 'src/pages'),
            css: path.resolve(__dirname, 'src/css'),
            data: path.resolve(__dirname, 'src/data'),
        },
        extensions: ['.js']
    }

    return config;
}