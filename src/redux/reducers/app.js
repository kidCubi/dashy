import {
    SET_METEO_LOADED,
    SET_MONEY_LOADED,
    SET_AGENDA_LOADED,
    SET_TRANSPORTS_LOADED,
    SET_TODO_LOADED,
} from '../actions/index';

const initialState = {
    meteoLoaded: false,
    moneyLoaded: false,
    agendaLoaded: false,
    transportsLoaded: false,
    todoLoaded: false
};

export default function (state = { ...initialState }, action) {
    switch (action.type) {
        case SET_METEO_LOADED: {
            return {
                ...state,
                meteoLoaded: action.loaded
            }
        }
        case SET_MONEY_LOADED: {
            return {
                ...state,
                moneyLoaded: action.loaded
            }
        }
        case SET_AGENDA_LOADED: {
            return {
                ...state,
                agendaLoaded: action.loaded
            }
        }
        case SET_TRANSPORTS_LOADED: {
            return {
                ...state,
                transportsLoaded: action.loaded
            }
        }
        case SET_TODO_LOADED: {
            return {
                ...state,
                todoLoaded: action.loaded
            }
        }
        default:
            return state
    }
}