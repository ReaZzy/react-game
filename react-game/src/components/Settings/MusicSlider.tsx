import {Slider} from "antd";
import React from "react";
import {setMusicVolume, setSoundsVolume} from "../../redux/game-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getMusicVolume, getSoundsVolume} from "../../redux/selectors/selectors";

export const MusicSlider:React.FC<{type:"Sounds"|"Music"}> = React.memo(({type}) => {
    const musicVolume = useSelector(getMusicVolume)
    const soundsVolume = useSelector(getSoundsVolume)
    const dispatch = useDispatch()

    const onAfterChangeMusic = (value: number) => {
        dispatch(setMusicVolume(value / 100))
        localStorage.setItem("musicVolume", `${value / 100}`)
    }
    const onAfterChangeSounds = (value: number) => {
        dispatch(setSoundsVolume(value / 100))
        localStorage.setItem("soundsVolume", `${value / 100}`)
    }

    return (
        <>
            <label className={"label"}> {type} </label>
            <Slider className={"slider"} value={type === "Music" ? musicVolume * 100 : soundsVolume *100}
                    defaultValue={type === "Music" ? musicVolume * 100 : soundsVolume *100}
                    onChange={type === "Music" ? onAfterChangeMusic : onAfterChangeSounds}/>
        </>
    )
})