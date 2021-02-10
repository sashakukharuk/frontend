import React from "react";
import {Priority, Status} from "../../Types/IssuesType";

type PropsType = {
    status: Status[] | undefined
    priority: Priority[] | undefined
}

export const HeaderTable = React.memo(({status, priority}: PropsType) => {
    return <>
        <thead>
        <tr>
            <th/>
            <th/>
            {status?.length !== 0 && status?.map((s, idx) => <th className="statusBorder" key={idx}>{s.name}</th>)}
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Assignee</td>
            <td>Type</td>
            {status?.length !== 0 && status?.map((s, idx) => <td key={idx}>
                <table className="tableauStatusHeader">
                    <thead>
                    <tr>
                        {priority?.length !== 0 && priority?.map((p, idx) => <th key={idx}>
                            <img style={{width: '20px', height: '20px'}} src={p.iconUrl} alt={p.name}/>
                        </th>)}
                    </tr>
                    </thead>
                </table>
            </td>)}
        </tr>
        </tbody>
    </>
})
