export const getFootballersData = (playerData: any) => {
    return {
        type: "getUsers",
        payload: playerData
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