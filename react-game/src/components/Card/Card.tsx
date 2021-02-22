import React from "react";
import {CardType} from "../../App";
import {useDispatch, useSelector} from "react-redux"
import {openCard, setCardPair} from "../../redux/game-reducer";
import {getImgURL} from "../../redux/selectors/selectors";

type CardComponentType = {
    card: CardType;
    index: number;
    cardPair: Array<CardType>
};



export const Card: React.FC<CardComponentType> = (
    {card, index}
    ) => {
    const dispatch = useDispatch()
    const imgURL = useSelector(getImgURL)

    const handleClick = (i: number) => {
        if(card.type === "closed"){
            dispatch(openCard(i))
            dispatch(setCardPair(card))
        }
    }

    return (
        <div className={`card ${card.type}`}
               onClick={() => handleClick(index)}>
            <div className={"content"}>
                <div className={"front"}> {card.type !== "closed" && `${card.content}`} </div>
                <div className={"back"}> {imgURL && <img src={`${imgURL}`} alt={"card"} id={"output"}/>} </div>
            </div>

        </div>
    )
}
