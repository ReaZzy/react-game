import React, {Suspense, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    answer,
    setBoard,
    setBoardSize,
    setCardPairs, setCardStyle,
    setGame,
    setMusicVolume,
    setSoundsVolume
} from "./redux/game-reducer";
import {boardSelector, cardPairSelector, getBoardSize, getGameType, getMusicVolume} from "./redux/selectors/selectors";
import {Route, Switch} from "react-router-dom"
import 'antd/dist/antd.css';
//@ts-ignore
import music from "./sounds/music.mp3"
import {Game} from "./components/Game/Game";
import useSound from "use-sound";

export type CardType = {
    content: string;
    type: "open" | "closed" | "wrong" | "correct";
};

const Settings = React.lazy(()=> import("./components/Settings/Settings"))

function App() {
    const dispatch = useDispatch()
    const gameType = useSelector(getGameType)
    const board = useSelector(boardSelector)
    const cardPair = useSelector(cardPairSelector)
    const musicVolume = useSelector(getMusicVolume)
    const boardSize = useSelector(getBoardSize)

    const [play, {stop}] = useSound(music, {volume: Number(localStorage.getItem("musicVolume") || musicVolume) , interrupt: true})
    useEffect(()=>{
        gameType==="wait"?play():stop()
    },[play,gameType]) // eslint-disable-line
    useEffect(() => {
        const localStorageBoard = ():string|null => localStorage.getItem("board")
        const localStorageCardPair = ():string|null => localStorage.getItem("cardPair")
        const localStorageGameType = ():string|null => localStorage.getItem("gameType")
        const localStorageMusicVolume = ():string|null => localStorage.getItem("musicVolume")
        const localStorageSoundsVolume= ():string|null => localStorage.getItem("soundsVolume")
        const localStorageBoardSize= ():string|null => localStorage.getItem("boardSize")
        const localStorageImageURL= ():string|null => localStorage.getItem("imgURL")
        const lB = localStorageBoard()
        const lT = localStorageGameType()
        const lC = localStorageCardPair()
        const lMV = localStorageMusicVolume()
        const lSV = localStorageSoundsVolume()
        const lBS = localStorageBoardSize()
        const lMU = localStorageImageURL()
        lC && dispatch(setCardPairs(JSON.parse(lC)))
        lT && dispatch(setGame(JSON.parse(lT)))
        lMV && dispatch(setMusicVolume(JSON.parse(lMV)))
        lSV && dispatch(setSoundsVolume(JSON.parse(lSV)))
        lMU && dispatch(setCardStyle(lMU))
        //@ts-ignore
        lBS && dispatch(setBoardSize(lBS))
        lB
            ? dispatch(setBoard(JSON.parse(lB)))
            : dispatch(setBoard([...boardItems, ...boardItems].sort(() => 0.5 - Math.random())))

    }, []) // eslint-disable-line
    useEffect(() => {
        dispatch(answer([...cardPair]))
    }, [board]) // eslint-disable-line
    const boardItemsCount = boardSize === "small" ? 4 : boardSize === "normal" ? 8 : boardSize === "big" ? 10 : 18
    const boardItems: Array<CardType> = Array(boardItemsCount).fill(0).map((e:number,index:number) => ( {content:`${index}`, type:"closed"}))

    return (
        <div className="App">
            <div className={"game"}>
                <Switch>
                    <Route  path={"/settings"} render={()=><Suspense fallback={<div>Loading</div>}><Settings /></Suspense>}/>
                    <Route  path={"/"} render={()=><Game boardItems={boardItems}/>}/>
                    <Route  path={"*"} render={()=><h1>404</h1>}/>
                </Switch>

            </div>
        </div>
    );
}

export default App;
