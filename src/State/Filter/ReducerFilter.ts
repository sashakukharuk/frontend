import {FilterStateType} from "./StateFilter";
import {ActionsFilterType, SET_FILTER} from "./ActionsFilter";

export const filterReducer = (state: FilterStateType, action: ActionsFilterType) => {
    switch (action.type) {
        case SET_FILTER: {
            return {...state, filters: action.filters}
        }

        default: return state
    }
}
