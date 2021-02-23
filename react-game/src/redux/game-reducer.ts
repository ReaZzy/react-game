import {CardType} from "../App";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
// @ts-ignore
import wrongAudio from "./../sounds/wrong-audio.wav"
// @ts-ignore
import correctAudio from "./../sounds/correct-audio.wav"
// @ts-ignore
import openAudio from "./../sounds/open-sound.wav"
// @ts-ignore
import winAudio from "./../sounds/win.wav"
// @ts-ignore
import loseAudio from "./../sounds/lose.wav"

export type GameType = {
    key: number
    date: string,
    winOrLose: "win" | "lose"
    boardSize: string
    difficulty: string,
    score: number,
    time: number
}

const initialState = {
    board: [] as Array<CardType>,
    boardDisabled: false,
    cardPair: [] as Array<CardType>,
    gameType: "wait" as "wait" | "playing" | "win" | "lose",
    musicVolume: 1,
    soundsVolume: 1,
    boardSize: "normal",
    games: [] as Array<GameType>,
    imgURL: null as string | null,
    difficulty: "normal",
    time: 0,
    score: 0,
    highScore: 0,
};
type initialStateType = typeof initialState;


// AUDIO
const openCardAudio = new Audio(openAudio)
const wrongAnswerAudio = new Audio(wrongAudio)
const correctAnswerAudio = new Audio(correctAudio)
const winGameAudio = new Audio(winAudio)
const loseGameAudio = new Audio(loseAudio)
let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")

const gameReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET_BOARD": {
            return {
                ...state,
                board: [...action.board]
            }
        }
        case "OPEN_CARD": {
            openCardAudio.play()
            return {
                ...state,
                board: state.board.map((board, i) => {
                    return i === action.number ? {...board, type: "open"} : board
                })
            }
        }
        case "SET_ANSWERS": {
            const {cardPair, type} = action.data
            const condition = (e: CardType, type: "wrong" | "correct" | "open" | "closed") => {
                return e.content === cardPair[0].content || e.content === cardPair[1].content
                    ? {...e, type: type}
                    : e
            }
            return {
                ...state,
                board: state.board.map((e: CardType) =>
                    e.type === "open"
                        ? condition(e, type)
                        : e.type === "wrong" ? condition(e, type) : e
                )
            }
        }
        case "SET_GAME_TYPE": {
            localStorage.setItem("gameType", JSON.stringify(action.gameType))
            return {...state, gameType: action.gameType}
        }
        case "SET_BOARD_SIZE": {
            localStorage.setItem("boardSize", `${action.boardSize}`)
            return {...state, boardSize: action.boardSize}
        }
        case "DISABLE_BOARD": {
            return {...state, boardDisabled: action.boolean}
        }
        case "SET_SOUNDS_VOLUME": {
            return {...state, soundsVolume: action.volume}
        }
        case "SET_MUSIC_VOLUME": {
            return {...state, musicVolume: action.volume}
        }
        case "SET_CARD_PAIR": {
            return {...state, cardPair: [...state.cardPair, action.card]}
        }
        case "SET_CARD_STYLE": {
            return {...state, imgURL: action.imgURL}
        }
        case "SET_CARD_PAIRS": {
            return {...state, cardPair: [...action.cards]}
        }
        case "SET_DIFFICULTY": {
            localStorage.setItem("difficulty", `${action.difficulty}`)
            return {...state, difficulty: action.difficulty}
        }
        case "SET_TIMER": {
            return {...state, time: action.time}
        }
        case "SET_SCORE":{
            return {...state, score: action.score}
        }
        case "SET_HIGH_SCORE":{
            return {...state, highScore: action.score}
        }
        case "SET_GAMES":{
            return {...state, games: [action.game, ...state.games]}
        }
        case "SET_ALL_GAMES":{
            return {...state, games: action.games}
        }

        case "CLEAR_CARD_PAIR": {
            return {...state, cardPair: []}
        }
        default:
            return state
    }
};

type ActionsType =
    openCardType
    | setBoardType
    | setAnswersType
    | disableBoardType
    | clearCardPairType
    | setCardPairType
    | setGameType
    | setCardPairsType
    | setSoundsVolumeType
    | setMusicVolumeType
    | setBoardSizeType
    | setCardStyleType
    | setDifficultyType
    | setScoreType
    | setTimerType
    | setHighScoreType
    | setGamesType
    | setAllGamesType

export const openCard = (number: number): openCardType => ({
    type: "OPEN_CARD",
    number,
});
type openCardType = {
    type: "OPEN_CARD";
    number: number;
};

export const setBoard = (board: Array<CardType>): setBoardType => ({
    type: "SET_BOARD",
    board,
});
type setBoardType = {
    type: "SET_BOARD";
    board: Array<CardType>;
};

export const setAnswers = (cardPair: Array<CardType>, type: "wrong" | "correct" | "closed" | "open"): setAnswersType => ({
    type: "SET_ANSWERS",
    data: {
        cardPair, type
    }
})
type setAnswersType = {
    type: "SET_ANSWERS";
    data: {
        cardPair: Array<CardType>,
        type: "wrong" | "correct" | "closed" | "open"
    }
}

export const disableBoard = (boolean: boolean): disableBoardType => ({type: "DISABLE_BOARD", boolean})
type disableBoardType = { type: "DISABLE_BOARD", boolean: boolean }
export const setGame = (gameType: "wait" | "playing" | "win" | "lose"): setGameType => ({
    type: "SET_GAME_TYPE",
    gameType
})
type setGameType = { type: "SET_GAME_TYPE", gameType: "wait" | "playing" | "win" | "lose" }
export const setCardPair = (card: CardType): setCardPairType => ({type: "SET_CARD_PAIR", card})
type setCardPairType = { type: "SET_CARD_PAIR", card: CardType }
export const setCardPairs = (cards: Array<CardType>): setCardPairsType => ({type: "SET_CARD_PAIRS", cards})
type setCardPairsType = { type: "SET_CARD_PAIRS", cards: Array<CardType> }
const clearCardPair = (): clearCardPairType => ({type: "CLEAR_CARD_PAIR"})
type clearCardPairType = { type: "CLEAR_CARD_PAIR" }
export const setMusicVolume = (volume: number): setMusicVolumeType => ({type: "SET_MUSIC_VOLUME", volume})
type setMusicVolumeType = { type: "SET_MUSIC_VOLUME", volume: number }
export const setSoundsVolume = (volume: number): setSoundsVolumeType => ({type: "SET_SOUNDS_VOLUME", volume})
type setSoundsVolumeType = { type: "SET_SOUNDS_VOLUME", volume: number }
export const setBoardSize = (boardSize: string): setBoardSizeType => ({type: "SET_BOARD_SIZE", boardSize})
type setBoardSizeType = { type: "SET_BOARD_SIZE", boardSize: string }
export const setCardStyle = (imgURL: string): setCardStyleType => ({type: "SET_CARD_STYLE", imgURL})
type setCardStyleType = { type: "SET_CARD_STYLE", imgURL: string }
export const setDifficulty = (difficulty: string): setDifficultyType => ({type: "SET_DIFFICULTY", difficulty})
type setDifficultyType = { type: "SET_DIFFICULTY", difficulty: string }
export const setTimer = (time: number): setTimerType => ({type: "SET_TIMER", time})
type setTimerType = { type: "SET_TIMER", time: number }
export const setScore = (score: number): setScoreType => ({type: "SET_SCORE", score})
type setScoreType = { type: "SET_SCORE", score: number }
export const setHighScore = (score: number): setHighScoreType => ({type: "SET_HIGH_SCORE", score})
type setHighScoreType = { type: "SET_HIGH_SCORE", score: number }
export const setGames = (game: GameType): setGamesType => ({type: "SET_GAMES", game})
type setGamesType = { type: "SET_GAMES", game: GameType }
export const setAllGames = (games: Array<GameType>): setAllGamesType => ({type: "SET_ALL_GAMES", games})
type setAllGamesType = { type: "SET_ALL_GAMES", games: Array<GameType>}

export const answer = (cardPair: Array<CardType>): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch, getState) => {

    const {game} = getState()

    openCardAudio.volume = game.soundsVolume
    wrongAnswerAudio.volume = game.soundsVolume
    correctAnswerAudio.volume = game.soundsVolume
    winGameAudio.volume = game.soundsVolume
    loseGameAudio.volume = game.soundsVolume

    const wrong = () => {
        wrongAnswerAudio.play()
        dispatch(disableBoard(true))
        dispatch(setAnswers(cardPair, "wrong"))
        setTimeout(() => {
            dispatch(setAnswers(cardPair, "closed"))
            dispatch(disableBoard(false))
        }, 1000)
    }
    const  correct =  async () => {
        await correctAnswerAudio.play()
        dispatch(setAnswers(cardPair, "correct"))
        dispatch(setScore(game.score+2))
        if(game.score >= game.highScore){
            dispatch(setHighScore(game.score+2))
            localStorage.setItem("highScore", JSON.stringify(game.score+2))
        }
    }

    if (cardPair.length === 2) {
        cardPair[0].content === cardPair[1].content
            ? correct()
            : wrong()
        dispatch(clearCardPair())
    }

    if (game.board.every((e: CardType) => e.type === "correct")) {
        dispatch(setGame("win"))
        await dispatch(setGameToStats("win"))
        await winGameAudio.play()
    }

    localStorage.setItem("board", JSON.stringify(game.board.map((e: CardType) => e.type === "wrong" ? {
        content: e.content,
        type: "closed"
    } : e)))
    localStorage.setItem("cardPair", JSON.stringify(cardPair))
    localStorage.setItem("score", JSON.stringify(game.score))
}



const backOptions = (boardItems: Array<CardType>): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch, getState) => {
    const {game} = getState()
    dispatch(setCardPairs([]))
    dispatch(setScore(0))
    dispatch(setBoard([...boardItems, ...boardItems].sort(() => 0.5 - Math.random())))
    dispatch(setTimer(game.difficulty === "easy" ? 60 : game.difficulty === "normal" ? 50 : 30))
    localStorage.removeItem("cardPair")
}
export const backToMainMenu = (boardItems: Array<CardType>): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch, getState) => {
    dispatch(backOptions(boardItems))
    dispatch(setGame("wait"))
    localStorage.removeItem("board")
}
export const refreshBoard = (boardItems: Array<CardType>): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch, getState) => {
    openCardAudio.play()
    dispatch(backOptions(boardItems))
}
const setGameToStats = (winOrLose: "win" | "lose"): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch, getState) => {
    const {game} = getState()
    dispatch(setGames({
        key: Math.random(),
        date: `${month}/${date}/${year}`,
        boardSize: game.boardSize,
        difficulty: game.difficulty,
        score: game.score,
        winOrLose: winOrLose,
        time: (game.difficulty === "easy" ? 60 : game.difficulty === "normal" ? 50 : 30) - game.time
    }))
    localStorage.setItem("games", JSON.stringify([{
        key: Math.random(),
        date: `${month}/${date}/${year}`,
        boardSize: game.boardSize,
        difficulty: game.difficulty,
        score: game.score,
        winOrLose: winOrLose,
        time: (game.difficulty === "easy" ? 60 : game.difficulty === "normal" ? 50 : 30) - game.time
    }, ...game.games]))
}

export const startGame = (boardItems: Array<CardType>): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    dispatch(setGame("playing"))
    dispatch(backOptions(boardItems))
}
export const resetSettings = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    dispatch(setCardStyle(""))
    dispatch(setDifficulty("normal"))
    dispatch(setBoardSize("normal"))
    dispatch(setMusicVolume(1))
    dispatch(setSoundsVolume(1))
    localStorage.removeItem("imgURL")
    localStorage.removeItem("musicVolume")
    localStorage.removeItem("soundsVolume")
}
export const lose = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    dispatch(setGame("lose"))
    await dispatch(setGameToStats("lose"))
    await loseGameAudio.play()
}

export const setLocalStorage = (boardItems: Array<CardType>): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    const localStorageBoard = (): string | null => localStorage.getItem("board")
    const localStorageCardPair = (): string | null => localStorage.getItem("cardPair")
    const localStorageGameType = (): string | null => localStorage.getItem("gameType")
    const localStorageMusicVolume = (): string | null => localStorage.getItem("musicVolume")
    const localStorageSoundsVolume = (): string | null => localStorage.getItem("soundsVolume")
    const localStorageBoardSize = (): string | null => localStorage.getItem("boardSize")
    const localStorageImageURL = (): string | null => localStorage.getItem("imgURL")
    const localStorageDifficulty = (): string | null => localStorage.getItem("difficulty")
    const localStorageTimer = (): string | null => localStorage.getItem("timer")
    const localStorageScore = (): string | null => localStorage.getItem("score")
    const localStorageHighScore = (): string | null => localStorage.getItem("highScore")
    const localStorageGames = (): string | null => localStorage.getItem("games")
    const lB = localStorageBoard()
    const lT = localStorageGameType()
    const lC = localStorageCardPair()
    const lMV = localStorageMusicVolume()
    const lSV = localStorageSoundsVolume()
    const lBS = localStorageBoardSize()
    const lMU = localStorageImageURL()
    const lD = localStorageDifficulty()
    const lTM = localStorageTimer()
    const lS = localStorageScore()
    const lHS = localStorageHighScore()
    const lG = localStorageGames()
    lC && dispatch(setCardPairs(JSON.parse(lC)))
    lT && dispatch(setGame(JSON.parse(lT)))
    lMV && dispatch(setMusicVolume(JSON.parse(lMV)))
    lSV && dispatch(setSoundsVolume(JSON.parse(lSV)))
    lMU && dispatch(setCardStyle(lMU))
    lD && dispatch(setDifficulty(lD))
    lBS && dispatch(setBoardSize(lBS))
    lTM && dispatch(setTimer(+lTM))
    lS && dispatch(setScore(+lS))
    lHS && dispatch(setHighScore(+lHS))
    lG && dispatch(setAllGames(JSON.parse(lG)))
    lB
        ? dispatch(setBoard(JSON.parse(lB)))
        : dispatch(setBoard([...boardItems, ...boardItems].sort(() => 0.5 - Math.random())))
}

export default gameReducer