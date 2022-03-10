import {Radio} from "antd";
import React from "react";
import {setBoardSize} from "../../redux/game-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getBoardSize} from "../../redux/selectors/selectors";

export const BoardSize =React.memo(() => {
    const dispatch = useDispatch()
    const boardSize = useSelector(getBoardSize)
    const onAfterChangeBoardSize = (e: any) => {
        dispatch(setBoardSize(e.target.value))
    }

    return(
        <div className={"setting-button"}>
            <label className={"label"}> Board size </label>
            <div>
                <Radio.Group defaultValue={boardSize} value={boardSize}
                             buttonStyle="solid" onChange={onAfterChangeBoardSize}>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="normal">Normal</Radio.Button>
                    <Radio.Button value="big">Big</Radio.Button>
                    <Radio.Button value="huge">Huge</Radio.Button>
                </Radio.Group>
            </div>
        </div>
    )
})