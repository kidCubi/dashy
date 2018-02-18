export const SET_METEO_LOADED = "SET_METEO_LOADED";
export const SET_MONEY_LOADED = "SET_MONEY_LOADED";
export const SET_AGENDA_LOADED = "SET_AGENDA_LOADED";
export const SET_TRANSPORTS_LOADED = "SET_TRANSPORTS_LOADED";
export const SET_TODO_LOADED = "SET_TODO_LOADED";

export function setMeteoLoaded(loaded) {
    return {
        type: SET_METEO_LOADED,
        loaded
    }
}

export function setMoneyLoaded(loaded) {
    return {
        type: SET_MONEY_LOADED,
        loaded
    }
}

export function setAgendaLoaded(loaded) {
    return {
        type: SET_AGENDA_LOADED,
        loaded
    }
}

export function setTransportsLoaded(loaded) {
    return {
        type: SET_TRANSPORTS_LOADED,
        loaded
    }
}

export function setTodoLoaded(loaded) {
    return {
        type: SET_TODO_LOADED,
        loaded
    }
}
