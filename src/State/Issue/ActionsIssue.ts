import {IssueData} from "../../Types/IssuesType";
import {InferActionsTypes} from "../../Types/InferActionsType";

export const SET_ISSUE = 'SET_ISSUE'

export const actionIssue = {
    setIssue: (issue: IssueData) => ({type: SET_ISSUE, issue})
}

export type ActionsIssueType = InferActionsTypes<typeof actionIssue>
