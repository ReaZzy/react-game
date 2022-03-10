import {Radio} from "antd";
import React from "react";
import {setDifficulty} from "../../redux/game-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getDifficulty} from "../../redux/selectors/selectors";

export const Difficulty =React.memo(() => {
    const dispatch = useDispatch()
    const difficulty = useSelector(getDifficulty)
    const onAfterChangeDifficulty = (e: any) => {
        dispatch(setDifficulty(e.target.value))
    }

    return(
        <div className={"setting-button"}>
            <label className={"label"}> Difficulty </label>
            <div>
                <Radio.Group defaultValue={difficulty} value={difficulty}
                             buttonStyle="solid" onChange={onAfterChangeDifficulty}>
                    <Radio.Button value="easy">Easy</Radio.Button>
                    <Radio.Button value="normal">Normal</Radio.Button>
                    <Radio.Button value="hard">Hard</Radio.Button>
                </Radio.Group>
            </div>
        </div>
    )
})