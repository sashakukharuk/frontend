import {IssueData} from "../Types/IssuesType";
import axios from "axios";
import {FilterType} from "../Types/FilterType";
import {UserInfoType} from "../Types/StepsType";

const instance = axios.create({
    baseURL: '/'
})

export const requestIssue = {
    getIssue(filter: string) {
        return instance.post<IssueData>('api/issues', {
                expand: [
                    "names",
                    "schema"
                ],
                jql: `${filter ? filter : "project = FIR"}`,
                maxResults: 50,
                fieldsByKeys: false,
                fields: [
                    "status",
                    "assignee",
                    "priority",
                    "issuetype",
                    "created",
                    "duedate"
                ],
                "startAt": 0
        }).then(res => res.data)
    }
}

export const requestFilter = {
    getFilter() {
        return instance.get<FilterType[]>('api/filter').then(res => res.data)
    }
}

export const requestSteps = {
    getUserInfo(userInfo: string) {
        return instance.get<UserInfoType>(`api/step/userinfo/${userInfo}`).then(res => res.data)
    },
    stepLink(link: string, userInfo: null | UserInfoType) {
        return instance.post('api/step/link', {link, userInfo})
    },
    stepChangeFilter(jql: string, userInfo: null | UserInfoType) {
        return instance.post('api/step/change/filter', {jql, userInfo})
    },
    stepGenerationTable(userInfo: null | UserInfoType) {
        return instance.post('api/step/generation/table', {userInfo})
    },
    stepError(error: string, userInfo: null | UserInfoType) {
        return instance.post('api/step/error', {error, userInfo})
    }
}
