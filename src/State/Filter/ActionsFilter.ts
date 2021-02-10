import {InferActionsTypes} from "../../Types/InferActionsType";
import {FilterType} from "../../Types/FilterType";

export const SET_FILTER = 'SET_FILTER'

export const actionFilter = {
    setFilter: (filters: FilterType[]) => ({type: SET_FILTER, filters})
}

export type ActionsFilterType = InferActionsTypes<typeof actionFilter>
