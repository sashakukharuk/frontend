import React from "react";
import {ItemType} from "../../Types/IssuesType";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";

type PropsType = {
    issues: ItemType[]
    status: string
    followLink$: EventEmitter<string>
}

export const LinkIssue = React.memo(({issues, status, followLink$}: PropsType) => {
    const issue = issues?.filter(item => item.status === status)
    return <td
        style={3 <= issue[0]?.differentDue ? {backgroundColor: 'red'} : 5 <= issue[0]?.differentCreated ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'}}>
        <a style={{color: 'black'}} href={issue[0]?.link}
           onClick={() => followLink$.emit(issue[0]?.link)}>{issue && issue.length > 0 ? issue.length : ''}</a></td>
})
