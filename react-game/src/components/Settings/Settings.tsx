import React, {useState} from "react";
import {Button, Switch} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    resetSettings, setAutoPlay,
    setCardStyle,
} from "../../redux/game-reducer";
import {
    getAutoPlay,
} from "../../redux/selectors/selectors";
import {ArrowLeftOutlined} from "@ant-design/icons/lib";
import {useHistory} from "react-router-dom";
import {Hotkeys} from "./Hotkeys";
import {Difficulty} from "./Difficulty";
import {BoardSize} from "./BoardSize";
import {MusicSlider} from "./MusicSlider";

const Setting: React.FC<{}> = React.memo(() => {
    const [error, setError] = useState<boolean>(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const autoPlay = useSelector(getAutoPlay)
    const back = () => {
        history.goBack()
    }
    const setImg = (base64data: any) => {
        localStorage.setItem("imgURL", base64data)
        setError(false)
        dispatch(setCardStyle(base64data))
    }
    const setErrorFunc = () => {
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 2000)
    }
    const loadFile = (e: any) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onerror = function () {
            console.log("error")
        }
        reader.onloadend = function () { // https://stackoverflow.com/questions/18650168/convert-blob-to-base64
            const base64data = reader.result;
            e.target?.files[0].size >= 1000000
                ? setErrorFunc()
                : setImg(base64data)
        }
    }


    const onChangeAutoPlay = (e: boolean) => {
        dispatch(setAutoPlay(e))
    }
    return (
        <div className={`menu settings`}>
            <div className={"menu-content"}>
                <span className={"settings-buttons"}>
                    <Difficulty/>
                    <BoardSize/>
                </span>
                <MusicSlider type={"Music"}/>
                <MusicSlider type={"Sounds"}/>
                <div style={{display: "flex"}}>
                    <label className={"label"}> Autoplay </label>
                    <Switch style={{marginTop: "10px"}} checked={autoPlay} onChange={onChangeAutoPlay}/>
                </div>
                <label style={{backgroundColor: error ? "#FF0000" : "#1890ff"}} className={"label label-input reset"}>
                    {error ? "Max image size is 1MB" : "Upload your card style"}
                    <input type="file" className={"file-input"} onChange={loadFile}/>
                </label>
                <Hotkeys/>

                <Button className={"reset"} onClick={() => {
                    dispatch(resetSettings())
                }} type="primary" danger>
                    Reset
                </Button>
                <Button className={"reset"} onClick={() => {
                    back()
                }} type="primary">
                    <ArrowLeftOutlined/>
                </Button>
            </div>
        </div>
    )
})

export default Setting