export function kelvinToCelcius(k) {
    return k - 273.15;
}

export function getWeekDay(timestamp) {
    const d = new Date();
    d.setTime(timestamp * 1000);
    return d.getDay();
}

