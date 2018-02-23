import {
    SET_METEO_LOADED,
    SET_MONEY_LOADED,
    SET_AGENDA_LOADED,
    SET_TRANSPORTS_LOADED,
    SET_TODO_LOADED,
    SET_MENU_OVERLAY_COORDINATES,
    SET_MENU_OPENCLOSE,
    SET_DRAGGABLE_WIDGETS
} from '../actions/index';

const initialState = {
    modulesLoaded: {
        meteoLoaded: false,
        moneyLoaded: false,
        agendaLoaded: false,
        transportsLoaded: false,
        todoLoaded: false,
    },
    widgets: {
        draggable: false
    },
    menu: {
        overlay: {
            x: 0,
            y: 0
        },
        isOpen: false
    }
};

export default function (state = { ...initialState }, action) {
    switch (action.type) {
        case SET_METEO_LOADED: {
            return {
                ...state,
                modulesLoaded: {
                    ...state.modulesLoaded,
                    meteoLoaded: action.loaded
                }
            }
        }
        case SET_MONEY_LOADED: {
            return {
                ...state,
                modulesLoaded: {
                    ...state.modulesLoaded,
                    moneyLoaded: action.loaded
                }
            }
        }
        case SET_AGENDA_LOADED: {
            return {
                ...state,
                modulesLoaded: {
                    ...state.modulesLoaded,
                    agendaLoaded: action.loaded
                }
            }
        }
        case SET_TRANSPORTS_LOADED: {
            return {
                ...state,
                modulesLoaded: {
                    ...state.modulesLoaded,
                    transportsLoaded: action.loaded
                }
            }
        }
        case SET_TODO_LOADED: {
            return {
                ...state,
                modulesLoaded: {
                    ...state.modulesLoaded,
                    todoLoaded: action.loaded
                }
            }
        }
        case SET_MENU_OVERLAY_COORDINATES: {
            return {
                ...state,
                menu: {
                    ...state.menu,
                    overlay: {
                        ...state.menu.overlay,
                        x: action.x,
                        y: action.y
                    }
                }
            }
        }
        case SET_MENU_OPENCLOSE: {
            return {
                ...state,
                menu: {
                    ...state.menu,
                    isOpen: action.opened
                }
            }
        }
        case SET_DRAGGABLE_WIDGETS: {
            return {
                ...state,
                widgets: {
                    draggable: action.draggable
                }
            }
        }
        default:
            return state
    }
}