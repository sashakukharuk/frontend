import React, {useContext, useEffect, useReducer} from 'react'
import {issueReducer} from "./ReducerIssue";
import {issueState, IssueStateType} from "./StateIssue";
import {requestIssue} from "../../Request/request";
import {actionIssue} from "./ActionsIssue";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {StepsContext} from "../Steps/StepsProvider";

export const IssueContext = React.createContext<IssueStateType>({} as IssueStateType)

type PropsType = {
    applyFilter$: EventEmitter<string>
    children: any
}

export const IssueProvider = ({applyFilter$, children}: PropsType) => {
    const [state, dispatch] = useReducer(issueReducer, issueState)
    const {userInfo, stepError, stepGenerationTable, stepChangeFilter} = useContext(StepsContext)
    useEffect( () => {
        if (userInfo !== null) {
            getIssue('')
        }
    }, [userInfo])
    applyFilter$.useSubscription(async (filter) => {
        await getIssue(filter)
        stepChangeFilter(filter)
    })
    const getIssue = async (filter: string) => {
        try {
            const data = await requestIssue.getIssue(filter).then(res => res)
            dispatch(actionIssue.setIssue(data))
            stepGenerationTable()
        } catch (err) {
            stepError(err.message)
        }
    }

    return <IssueContext.Provider value={state}>
        {children}
    </IssueContext.Provider>
}
