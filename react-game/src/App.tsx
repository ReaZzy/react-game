import React, {Suspense, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    answer, backToMainMenu, refreshBoard,
    setLocalStorage, startAutoPlay, startGame,
} from "./redux/game-reducer";
import {
    boardSelector,
    cardPairSelector, getAutoPlay,
    getBoardSize,
    getGameType,
    getMusicVolume
} from "./redux/selectors/selectors";
import {Route, Switch, useHistory} from "react-router-dom"
import {Game} from "./components/Game/Game";
import useSound from "use-sound";
import {FullscreenExitOutlined, FullscreenOutlined, GithubOutlined} from "@ant-design/icons/lib";
//@ts-ignore
import music from "./sounds/music.mp3"
import hotkeys from "hotkeys-js";
import { Button } from "antd";


export type CardType = {
    content: string;
    type: "open" | "closed" | "wrong" | "correct";
    id: number
};

const Settings = React.lazy(()=> import("./components/Settings/Settings"))
const Stats = React.lazy(()=> import("./components/Stats/Stats"))

const App:React.FC<{}> = React.memo(() => {
    const dispatch = useDispatch()
    const gameType = useSelector(getGameType)
    const board = useSelector(boardSelector)
    const cardPair = useSelector(cardPairSelector)
    const musicVolume = useSelector(getMusicVolume)
    const boardSize = useSelector(getBoardSize)
    const history = useHistory()
    const autoPlay = useSelector(getAutoPlay)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [play, {stop}] = useSound(music, {volume: Number(localStorage.getItem("musicVolume") || musicVolume) , interrupt: true})
    useEffect(()=>{
        gameType==="wait"?play():stop()
    },[play,gameType]) // eslint-disable-line
    useEffect(() => {
       dispatch(setLocalStorage(boardItems))
    }, []) // eslint-disable-line
    useEffect(() => {
        dispatch(answer([...cardPair]))
    }, [board, cardPair]) // eslint-disable-line
    useEffect(()=>{
        const refreshAutoPlay = () => {
            dispatch(backToMainMenu(boardItems))
            dispatch(startAutoPlay(boardItems))
        }
        const toSettings = (path:string) => {
            dispatch(backToMainMenu(boardItems))
            history.push(path)
        }
        const startGameHotKey = () => {
            autoPlay ? refreshAutoPlay() : dispatch(startGame(boardItems))
            history.push("/")
        }
        hotkeys('ctrl+x,ctrl+z,ctrl+c,ctrl+enter,ctrl+v',{keyup: true},function (event, handler){
            switch (handler.key) {
                case 'ctrl+x': event.type === 'keyup' &&  toSettings("settings")
                    break;
                case 'ctrl+z': event.type === 'keyup' && toSettings("")
                    break;
                case 'ctrl+c': event.type === 'keyup' && toSettings("stats")
                    break;
                case 'ctrl+enter': event.type === 'keyup' && startGameHotKey()
                    break;
                case 'ctrl+v': event.type === 'keyup' && !autoPlay && dispatch(refreshBoard(boardItems))
                    break;
                default: break;
            }
        })
    },[boardSize, autoPlay]) //eslint-disable-line


    const boardItemsCount = boardSize === "small" ? 4 : boardSize === "normal" ? 8 : boardSize === "big" ? 10 : 18
    const boardItems: Array<CardType> = Array(boardItemsCount).fill(0).map((e:number,index:number) => ({content:`${index}`, type:"closed", id:index}))
    const game = document.getElementById("game")
    const handleClick = () => {
        if(game){
            if (game.requestFullscreen) {game.requestFullscreen()
                setIsFullScreen(true)}
            //@ts-ignore
            else if (game.webkitRequestFullscreen) {game.webkitRequestFullscreen()
                setIsFullScreen(true)}
            //@ts-ignore
            else if (game.msRequestFullscreen) {game.msRequestFullscreen()
                setIsFullScreen(true)}
        }
    } // https://www.w3schools.com/howto/howto_js_fullscreen.asp
    const handleOff = () => {
        const docWithBrowsersExitFunctions = document as Document & {
            mozCancelFullScreen(): Promise<void>;
            webkitExitFullscreen(): Promise<void>;
            msExitFullscreen(): Promise<void>;
        };
        if (docWithBrowsersExitFunctions.exitFullscreen) {
            setIsFullScreen(false)
            docWithBrowsersExitFunctions.exitFullscreen();
        } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) {
            setIsFullScreen(false)
            docWithBrowsersExitFunctions.webkitExitFullscreen();
        } else if (docWithBrowsersExitFunctions.msExitFullscreen) {
            setIsFullScreen(false)
            docWithBrowsersExitFunctions.msExitFullscreen();
        }
    } // https://www.w3schools.com/howto/howto_js_fullscreen.asp

    return (
        <div className="App">

            <div className={"game"} id={"game"}>
                <div className={"fullScreen"}>
                    {isFullScreen
                        ? <Button size={"large"} onClick={handleOff}><FullscreenExitOutlined /></Button>
                        : <Button size={"large"}  onClick={handleClick}><FullscreenOutlined /></Button>
                    }
                </div>
                <Switch>
                    <Route  path={"/settings"} render={()=><Suspense fallback={<div>Loading</div>}><Settings /></Suspense>}/>
                    <Route  path={"/stats"} render={()=><Suspense fallback={<div>Loading</div>}><Stats /></Suspense>}/>
                    <Route  path={"/"} render={()=><Game boardItems={boardItems}/>}/>
                    <Route  path={"*"} render={()=><h1>404</h1>}/>
                </Switch>
            </div>
            <footer>
                <a href={"https://rs.school/react/"} rel={"noreferrer"} target={"_blank"}>
                    <img src={"https://rs.school/images/rs_school_js.svg"}  alt={"course-logo"}/>
                </a>
                <b>2021</b>
                <a href={"https://github.com/ReaZzy"} rel={"noreferrer"} target={"_blank"}><GithubOutlined className={"githubSvg"}/></a>
            </footer>
        </div>
    );
})

export default App;
