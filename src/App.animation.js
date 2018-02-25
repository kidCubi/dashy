import { TweenLite, TweenMax, Power3 } from 'gsap';

export default {
    show(target, duration, callback) {
        return TweenLite.from(target, duration, {
            opacity: 0
        })
    },
    staggerShow(target, duration, stagger, delay, callback) {
        return TweenMax.staggerFrom(target, duration, {
            y: "300%",
            ease: Power3.easeOut,
            delay: delay
        }, stagger)
    }
}