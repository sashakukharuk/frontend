import React, {useContext, useEffect, useState} from "react";
import {FilterContext} from "../../State/Filter/FilterProvider";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import './filter.css'
import {FilterType} from "../../Types/FilterType";

type PropsType = {
    applyFilter$: EventEmitter<string>
}

export const Filter = ({applyFilter$}: PropsType) => {
    const [value, setValue] = useState('default filter')
    const [isList, setList] = useState(false)
    const [isOne, setOne] = useState(false)
    const {filters} = useContext(FilterContext)
    const setIsList = () => setList(!isList)
    const applyFilter = (filter: FilterType) => {
        if (isOne) {
            applyFilter$.emit(filter.jql)
        }
        setOne(!isOne)
        setValue(filter.name)
        setIsList()
    }
    return <div className="select-box">
            <div className={`options-container options-container--is-active_${isList}`}>
                {filters && filters.map(filter => <div key={filter.id} onClick={() => applyFilter(filter)} className="option">
                    <input type="radio" className="radio" id={filter.name} name="category"/>
                    <label htmlFor={filter.name}>{filter.name}</label>
                </div>)}
            </div>
            <div className="selected" onClick={setIsList}>
                {value}
            </div>
    </div>
}
