import {StepsStateType} from "./StateSteps";
import {ActionsStepsType, SET_USER_INFO} from "./ActionsSteps";

export const stepsReducer = (state: StepsStateType, action: ActionsStepsType) => {
    switch (action.type) {
        case SET_USER_INFO: {
            return {...state, userInfo: action.userInfo}
        }

        default: return state
    }
}
