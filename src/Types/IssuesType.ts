export type ItemType = {
    position: string
    status: string
    link: string
    differentCreated: number
    differentDue: number
}

export type Status = {
    self: string
    description: string
    iconUrl: string
    name: string
    id: string
    statusCategory: {
        self: string
        id: number
        key: string
        colorName: string
        name: string
    }
}
export type Priority = {
    self: string
    iconUrl: string
    name: string
    id: string
}

export type IssueType = {
    self: string
    id: string
    description: string
    iconUrl: string
    name: string
    subtask: boolean
    avatarId: number
}

export type Assignee = {
    name: string
    issues: ItemType[][][]
}

export type IssueData = {
    status: Status[]
    assignee: Assignee[]
    priority: Priority[]
    issuetype: IssueType[]
}

