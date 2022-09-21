export const getFootballersData = (userData: any) => {
    return {
        type: "getUsers",
        payload: userData
    }
}

export const createFootballPlayerProfile = (data: any) => {
    return {
        type: "createPlayer",
        payload: data
    }
}