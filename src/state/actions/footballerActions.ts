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

export const updateFootballerData = (updatedData: any) => {
    return {
        type: "updatePlayer",
        payload: updatedData
    }
}