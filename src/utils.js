export function isInViewport(domEl, offset) {
    const rect = domEl.getBoundingClientRect();
    // const offset = rect.height * -1 * (offset || 0);
    // return rect.height > 0 && rect.top >= offset && rect.bottom <= window.innerHeight - offset
    return rect.top >= offset && rect.top <= window.innerHeight - offset
}

export function loadImage (src) {

    //TODO : use fetch
    function isImageOk(img) {
        if (!img.complete) {
            return false;
        }
        return !(typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0);
    }

    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.onload = function () {

            isImageOk(img) ? resolve(img) : reject();
        };
        img.onerror = function() {
            console.log('error')
        };
        img.src = src;
    });
};

