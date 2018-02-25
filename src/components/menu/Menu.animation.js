import { TweenLite, Power3 } from 'gsap';

export default {
    show(target, duration, callback) {
        return TweenLite.to(target, duration, {
            attr: { r: window.innerHeight * 1.5 },
            ease: Power3.easeOut
        })
    },
    hide(target) {
        return TweenLite.to(target, 0, {
            attr: {
                r: 0
            }
        });
    },
}