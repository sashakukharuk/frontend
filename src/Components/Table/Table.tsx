import React, {useContext} from "react";
import {HeaderTable} from "./HeaderTable";
import {BodyTable} from "./BodyTable";
import {IssueContext} from "../../State/Issue/IssueProvider";
import {IssueStateType} from "../../State/Issue/StateIssue";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";

type PropsType = {
    followLink$: EventEmitter<string>
}

export const Table = ({followLink$}: PropsType) => {
    const {issue} = useContext<IssueStateType>(IssueContext)
    return <div className="table">
        <table className="tableau-style">
            <HeaderTable priority={issue.priority} status={issue.status}/>
            <BodyTable status={issue.status} assignee={issue.assignee} issuetype={issue.issuetype} followLink$={followLink$}/>
        </table>
    </div>
}
