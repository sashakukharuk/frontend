import {InferActionsTypes} from "../../Types/InferActionsType";
import {UserInfoType} from "../../Types/StepsType";

export const SET_USER_INFO = 'SET_USER_INFO'

export const actionSteps = {
    setUserInfo: (userInfo: null | UserInfoType) => ({type: SET_USER_INFO, userInfo})
}

export type ActionsStepsType = InferActionsTypes<typeof actionSteps>
