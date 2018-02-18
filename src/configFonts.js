const WebFont = require('webfontloader');

export function LoadFonts() {
    const config = {
        google: {
            families: ['Roboto:400, 500']
        }
    };
    WebFont.load(config, 0.1, true);
}