export const SET_METEO_LOADED = "SET_METEO_LOADED";
export const SET_MONEY_LOADED = "SET_MONEY_LOADED";
export const SET_AGENDA_LOADED = "SET_AGENDA_LOADED";
export const SET_TRANSPORTS_LOADED = "SET_TRANSPORTS_LOADED";
export const SET_TODO_LOADED = "SET_TODO_LOADED";
export const SET_CONTACTS_LOADED = "SET_CONTACTS_LOADED";
export const SET_MENU_OVERLAY_COORDINATES = "SET_MENU_OVERLAY_COORDINATES";
export const SET_MENU_OPENCLOSE = "SET_MENU_OPENCLOSE";
export const SET_DRAGGABLE_WIDGETS = "SET_DRAGGABLE_WIDGETS";

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

export function setContactsLoaded(loaded) {
    return {
        type: SET_CONTACTS_LOADED,
        loaded
    }
}


export function setMenuOverlayCoordinates(x, y) {
    return {
        type: SET_MENU_OVERLAY_COORDINATES,
        x, y
    }
}

export function setMenuOpenClose(opened) {
    return {
        type: SET_MENU_OPENCLOSE,
        opened
    }
}

export function setDraggableWidgets(draggable) {
    return {
        type: SET_DRAGGABLE_WIDGETS,
        draggable
    }
}