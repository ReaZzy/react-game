import React from "react";
import {Button, Radio, Slider} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {resetSettings, setBoardSize, setCardStyle, setMusicVolume, setSoundsVolume} from "../../redux/game-reducer";
import {getBoardSize, getMusicVolume, getSoundsVolume} from "../../redux/selectors/selectors";
import {ArrowLeftOutlined} from "@ant-design/icons/lib";
import { useHistory } from "react-router-dom";

const Setting: React.FC<{}> = () => {
    const dispatch = useDispatch()
    const musicVolume = useSelector(getMusicVolume)
    const soundsVolume = useSelector(getSoundsVolume)
    const boardSize = useSelector(getBoardSize)
    const history = useHistory()
    const back = () => {
        history.goBack()
    }
    const loadFile = (e: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target?.files[0])
        reader.onloadend = function() {
            const base64data = reader.result;
            //@ts-ignore
            dispatch(setCardStyle(base64data))
            //@ts-ignore
            localStorage.setItem("imgURL", base64data) // https://stackoverflow.com/questions/18650168/convert-blob-to-base64
        }
    }


    const onAfterChangeMusic = (value: number) => {
        dispatch(setMusicVolume(value/100))
        localStorage.setItem("musicVolume", `${value/100}`)
    }
    const onAfterChangeSounds = (value: number) => {
        dispatch(setSoundsVolume(value/100))
        localStorage.setItem("soundsVolume", `${value/100}`)
    }
    const onAfterChangeBoardSize = (e: any) => {
        dispatch(setBoardSize(e.target.value))
        localStorage.setItem("boardSize", `${e.target.value}`)
    }
    return (
        <div className={`menu settings`}>
            <div className={"menu-content"}>
                <label className={"label"}> Difficulty </label>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">Easy</Radio.Button>
                    <Radio.Button value="b">Normal</Radio.Button>
                    <Radio.Button value="c">Hard</Radio.Button>
                </Radio.Group>
                <label className={"label"}> Board size </label>
                <Radio.Group defaultValue={boardSize} buttonStyle="solid" onChange={onAfterChangeBoardSize}>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="normal">Normal</Radio.Button>
                    <Radio.Button value="big">Big</Radio.Button>
                    <Radio.Button value="huge">Huge</Radio.Button>
                </Radio.Group>
                <label className={"label"}> Music </label>
                <Slider className={"slider"} defaultValue={musicVolume*100} onChange={onAfterChangeMusic}/>
                <label className={"label"}> Sounds </label>
                <Slider className={"slider"} defaultValue={soundsVolume*100} onChange={onAfterChangeSounds}/>
                <label className={"label label-input"}> Upload your own card style
                <input type="file" className={"file-input"}  onChange={loadFile}/>
                </label>

                <Button className={"reset"} onClick={()=>{dispatch(resetSettings())}} type="primary" danger>
                    Reset
                </Button>
                <Button className={"reset"} onClick={()=>{back()}} type="primary">
                    <ArrowLeftOutlined />
                </Button>
            </div>
        </div>
    )
}

export default Setting