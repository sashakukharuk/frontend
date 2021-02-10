export type UserInfoType = {
    id: number,
    user_sud: string
}

export type StepsType = {
    userInfo: null | UserInfoType,
    stepLink: (link: string) => void
    stepChangeFilter: (jql: string) => void
    stepGenerationTable: () => void
    stepError: (error: string) => void
}
