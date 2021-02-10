import React, {useContext} from "react";
import {Assignee, IssueType, Status} from "../../Types/IssuesType";
import {LinkIssue} from "./LinkIssue";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";

type PropsType = {
    status: Status[] | undefined
    assignee: Assignee[] | undefined
    issuetype: IssueType[] | undefined
    followLink$: EventEmitter<string>
}

export const BodyTable = React.memo(({status, issuetype, assignee, followLink$}: PropsType) => {
    return <tbody>
    {assignee?.length !== 0 && assignee?.map((item, idx) => <tr key={idx}>
        <td> {item.name}</td>
        <td>
            <table className="tableauStatusHeader">
                <tbody>
                {issuetype?.length !== 0 && issuetype?.map((issueType, idxI) => <tr key={idxI}>
                    <td>
                        <img style={{width: '20px', height: '20px'}} src={issueType.iconUrl} alt={issueType.name}/>
                    </td>
                </tr>)}
                </tbody>
            </table>
        </td>
        {status?.map((s, idxS) => <td key={idxS}>
            <table className="tableauStatusBody">
                <tbody>
                {item.issues.map((itemY, idxY) => <tr key={idxY}>
                    {itemY.map((itemX, idxX) => <LinkIssue
                               key={idxX}
                               issues={itemX}
                               status={s.name}
                               followLink$={followLink$}
                           />)}
                </tr>)}
                </tbody>
            </table>
        </td>)}
    </tr>)}
    </tbody>
})
