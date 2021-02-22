import {AppStateType} from "../store";

export const boardSelector = (state:AppStateType)=> {
    return state?.game?.board
}

export const disabledBoardSelector = (state:AppStateType) => {
    return state?.game?.boardDisabled
}
export const cardPairSelector = (state:AppStateType) => {
    return state?.game?.cardPair
}
export const getGameType = (state:AppStateType) => {
    return state?.game?.gameType
}
export const getSoundsVolume = (state:AppStateType) => {
    return state?.game?.soundsVolume
}
export const getMusicVolume = (state:AppStateType) => {
    return state?.game?.musicVolume
}
export const getBoardSize = (state:AppStateType) => {
    return state?.game?.boardSize
}
export const getImgURL = (state:AppStateType) => {
    return state?.game?.imgURL
}
