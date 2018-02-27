import { TimelineLite } from 'gsap';

export default {
    show(target, duration, callback1, callback2) {
        const tl = new TimelineLite();
        return tl.to(target, duration, {
            y: "100%",
        }).fromTo(target, duration, {
            y: "-100%",
        }, {
            onStart: callback1,
            y: "0%",
        })
    }
}