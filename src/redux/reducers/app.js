import {
    SET_METEO_LOADED,
    SET_MONEY_LOADED,
    SET_AGENDA_LOADED,
    SET_TRANSPORTS_LOADED,
    SET_TODO_LOADED,
    SET_MENU_COORDINATES
} from '../actions/index';

const initialState = {
    modulesLoaded: {
        meteoLoaded: false,
        moneyLoaded: false,
        agendaLoaded: false,
        transportsLoaded: false,
        todoLoaded: false,
    },
    x: 0,
    y: 0
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
        case SET_MENU_COORDINATES: {
            return {
                ...state,
                x: action.x,
                y: action.y
            }
        }
        default:
            return state
    }
}