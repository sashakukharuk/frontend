import {IssueStateType} from "./StateIssue";
import {ActionsIssueType, SET_ISSUE} from "./ActionsIssue";

export const issueReducer = (state: IssueStateType, action: ActionsIssueType) => {
    switch (action.type) {
        case SET_ISSUE: {
            return {...state, issue: action.issue}
        }

        default: return state
    }
}
