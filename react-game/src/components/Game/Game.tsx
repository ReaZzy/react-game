import React from "react";
import {Card} from "../Card/Card";
import {Button} from "antd";
import {backToMainMenu, refreshBoard, startAutoPlay, startGame} from "../../redux/game-reducer";
import {CardType} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {
    boardSelector,
    cardPairSelector,
    disabledBoardSelector, getAutoPlay,
    getBoardSize,
    getGameType, getHighScore, getScore
} from "../../redux/selectors/selectors";
import {
    ArrowLeftOutlined,
    BarChartOutlined,
    CaretRightOutlined,
    ReloadOutlined,
    SettingOutlined
} from "@ant-design/icons/lib";
import {Link} from "react-router-dom";
import {Timer} from "../Timer/Timer";

export const Game: React.FC<{ boardItems: Array<CardType> }> = ({boardItems}) => {

    const disabledBoard = useSelector(disabledBoardSelector)
    const dispatch = useDispatch()
    const gameType = useSelector(getGameType)
    const board = useSelector(boardSelector)
    const cardPair = useSelector(cardPairSelector)
    const boardSize = useSelector(getBoardSize)
    const score = useSelector(getScore)
    const autoPlay = useSelector(getAutoPlay)
    const highScore = useSelector(getHighScore)

    const refreshAutoPlay = () => {
        dispatch(backToMainMenu(boardItems))
        dispatch(startAutoPlay(boardItems))
    }
    return (
        <div>
            {gameType === "playing"
                ? <div className="appContent">
                    <div className="score">
                        <Button size={"large"}>Current score: {score}</Button>
                        <Button size={"large"}>High score: {highScore}</Button>
                        <Timer/>
                    </div>
                    <div className={`board ${boardSize} ${disabledBoard && "disabled"} ${autoPlay && "autoPlay"}`}>
                        {board?.map((card: CardType, index: number) => {
                            return (
                                <Card cardPair={cardPair}
                                      index={index}
                                      card={card}
                                      key={index}
                                />
                            );
                        })}
                    </div>
                    {!autoPlay && <> <Button onClick={() => {
                        dispatch(refreshBoard(boardItems))
                    }} className={"reset-button"} type="primary" size={"large"}>
                        <ReloadOutlined/>
                    </Button>
                        <Button onClick={() => {
                            dispatch(backToMainMenu(boardItems))
                        }} className={"reset-button"} type="primary" size={"large"}>
                            <ArrowLeftOutlined/>
                        </Button>
                    </>
                    }
                </div>

                : <div className={`menu ${gameType} ${boardSize}`}>
                    <div className={"menu-content"}>
                        <div className={"text"}>
                            <div className={"end-text"}>
                                {gameType === "win"
                                    ? "You won !"
                                    : gameType === "lose"
                                        ? "You lose :("
                                        : gameType === "wait"
                                        && "Memory game"
                                }
                            </div>
                            <div>
                                <div className={"small-text"}>
                                    High score: {highScore}
                                </div>
                            </div>

                        </div>
                        <div>
                            <Button type="primary" size={"large"} onClick={() => {
                                autoPlay
                                    ? refreshAutoPlay()
                                    : dispatch(startGame(boardItems))
                            }}>
                                {gameType !== "wait" ? "Play again" : "Play"} <CaretRightOutlined/>
                            </Button>
                            <Button type="primary" size={"large"} onClick={() => {
                                dispatch(backToMainMenu(boardItems))
                            }}>
                                <Link to={"/settings"}><SettingOutlined/></Link>
                            </Button>
                            <Button type="primary" size={"large"} onClick={() => {
                                dispatch(backToMainMenu(boardItems))
                            }}>
                                <Link to={"/stats"}><BarChartOutlined/></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}