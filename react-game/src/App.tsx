import React, {Suspense, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    answer,
    setLocalStorage,
} from "./redux/game-reducer";
import {boardSelector, cardPairSelector, getBoardSize, getGameType, getMusicVolume} from "./redux/selectors/selectors";
import {Route, Switch} from "react-router-dom"
import 'antd/dist/antd.css';
import {Game} from "./components/Game/Game";
import useSound from "use-sound";
import {GithubOutlined} from "@ant-design/icons/lib";
//@ts-ignore
import music from "./sounds/music.mp3"


export type CardType = {
    content: string;
    type: "open" | "closed" | "wrong" | "correct";
};

const Settings = React.lazy(()=> import("./components/Settings/Settings"))
const Stats = React.lazy(()=> import("./components/Stats/Stats"))

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
       dispatch(setLocalStorage(boardItems))
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
}

export default App;
