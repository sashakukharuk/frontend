import React, {useEffect, useReducer} from 'react'
import {stepsReducer} from "./ReducerSteps";
import {stepsState} from "./StateSteps";
import {actionSteps} from "./ActionsSteps";
import {requestSteps} from "../../Request/request";
import {StepsType} from "../../Types/StepsType";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";

export const StepsContext = React.createContext<StepsType>({} as StepsType)

type PropsType = {
    followLink$: EventEmitter<string>
    children: any
}

export const StepsProvider = ({followLink$, children}: PropsType) => {
    const [state, dispatch] = useReducer(stepsReducer, stepsState)

    useEffect( () => {
        getUserInfo()
    }, [])

    followLink$.useSubscription((link) => stepLink(link))

    const getUserInfo = async () => {
        let userSub = localStorage.getItem('user_info')
        if (!userSub) {
            userSub = `user${Date.now()}`
            localStorage.setItem('user_info', userSub)
        }
        const data = await requestSteps.getUserInfo(userSub).then(res => res)
        dispatch(actionSteps.setUserInfo(data))
    }

    const stepLink = (link: string) => {
        requestSteps.stepLink(link, state.userInfo)
    }
    const stepChangeFilter = (jql: string) => {
        requestSteps.stepChangeFilter(jql, state.userInfo)
    }
    const stepGenerationTable = () => {
        requestSteps.stepGenerationTable(state.userInfo)
    }
    const stepError = (error: string) => {
        requestSteps.stepError(error, state.userInfo)
    }


    return <StepsContext.Provider value={{userInfo: state.userInfo, stepLink, stepChangeFilter, stepGenerationTable, stepError}}>
        {children}
    </StepsContext.Provider>
}
