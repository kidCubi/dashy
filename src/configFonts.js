const WebFont = require('webfontloader');

export function LoadFonts() {
    const config = {
        google: {
            families: ['Roboto:100, 300']
        }
    };
    WebFont.load(config, 0.1, true);
}