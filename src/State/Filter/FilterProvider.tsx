import React, {useEffect, useReducer} from 'react'
import {filterState, FilterStateType} from "./StateFilter";
import {filterReducer} from "./ReducerFilter";
import {actionFilter} from "./ActionsFilter";
import {requestFilter} from "../../Request/request";

export const FilterContext = React.createContext<FilterStateType>({} as FilterStateType)

export const FilterProvider = (props: any) => {
    const [state, dispatch] = useReducer(filterReducer, filterState)

    useEffect(() => {
        getFilter()
    }, [])

    const getFilter = async () => {
        const data = await requestFilter.getFilter().then(res => res)
        dispatch(actionFilter.setFilter(data))
    }

    return <FilterContext.Provider value={state}>
        {props.children}
    </FilterContext.Provider>
}
