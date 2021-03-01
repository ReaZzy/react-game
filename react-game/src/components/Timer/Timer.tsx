import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTime} from "../../redux/selectors/selectors";
import {lose, setTimer} from "../../redux/game-reducer";
import {Button} from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

export const Timer:React.FC<{}> = React.memo(() => {
    const time = useSelector(getTime)
    const dispatch = useDispatch()
    useEffect(()=>{
        const timer = setInterval(()=>{
            if (time > 0){
                localStorage.setItem("timer", `${time-1}`)
                dispatch(setTimer(time-1))
            }
            else{
                dispatch(lose())
            }
        }, 1000)
        return ()=>{
            clearInterval(timer)
        }
    }, [time]) //eslint-disable-line

    return(
        <Button size={"large"} className={"timer"} danger = {time < 10}>
            <ClockCircleOutlined /> {time}
        </Button>
    )
})