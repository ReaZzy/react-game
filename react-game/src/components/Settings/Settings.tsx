import React, {useState} from "react";
import {Button, Radio, Slider, Switch, Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    resetSettings, setAutoPlay,
    setBoardSize,
    setCardStyle,
    setDifficulty,
    setMusicVolume,
    setSoundsVolume
} from "../../redux/game-reducer";
import {
    getAutoPlay,
    getBoardSize,
    getDifficulty,
    getMusicVolume,
    getSoundsVolume
} from "../../redux/selectors/selectors";
import {ArrowLeftOutlined} from "@ant-design/icons/lib";
import {useHistory} from "react-router-dom";
import Title from "antd/lib/typography/Title";

const Setting: React.FC<{}> = () => {
    const [error, setError] = useState<boolean>(false)
    const dispatch = useDispatch()
    const musicVolume = useSelector(getMusicVolume)
    const soundsVolume = useSelector(getSoundsVolume)
    const boardSize = useSelector(getBoardSize)
    const history = useHistory()
    const difficulty = useSelector(getDifficulty)
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


    const onAfterChangeMusic = (value: number) => {
        dispatch(setMusicVolume(value / 100))
        localStorage.setItem("musicVolume", `${value / 100}`)
    }
    const onAfterChangeSounds = (value: number) => {
        dispatch(setSoundsVolume(value / 100))
        localStorage.setItem("soundsVolume", `${value / 100}`)
    }
    const onAfterChangeBoardSize = (e: any) => {
        dispatch(setBoardSize(e.target.value))
    }
    const onAfterChangeDifficulty = (e: any) => {
        dispatch(setDifficulty(e.target.value))
    }

    const onChangeAutoPlay = (e: boolean) => {
        dispatch(setAutoPlay(e))
    }
    return (
        <div className={`menu settings`}>
            <div className={"menu-content"}>
                <label className={"label"}> Difficulty </label>
                <Radio.Group className={"settings-button"} defaultValue={difficulty} value={difficulty}
                             buttonStyle="solid" onChange={onAfterChangeDifficulty}>
                    <Radio.Button value="easy">Easy</Radio.Button>
                    <Radio.Button value="normal">Normal</Radio.Button>
                    <Radio.Button value="hard">Hard</Radio.Button>
                </Radio.Group>
                <label className={"label"}> Board size </label>
                <Radio.Group className={"settings-button"} defaultValue={boardSize} value={boardSize}
                             buttonStyle="solid" onChange={onAfterChangeBoardSize}>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="normal">Normal</Radio.Button>
                    <Radio.Button value="big">Big</Radio.Button>
                    <Radio.Button value="huge">Huge</Radio.Button>
                </Radio.Group>
                <label className={"label"}> Music </label>
                <Slider className={"slider"} value={musicVolume * 100} defaultValue={musicVolume * 100}
                        onChange={onAfterChangeMusic}/>
                <label className={"label"}> Sounds </label>
                <Slider className={"slider"} value={soundsVolume * 100} defaultValue={soundsVolume * 100}
                        onChange={onAfterChangeSounds}/>
                <label style={{backgroundColor: error ? "#FF0000" : "#1890ff"}} className={"label label-input reset"}>
                    {error ? "Max image size is 1MB" : "Upload your card style"}
                    <input type="file" className={"file-input"} onChange={loadFile}/>
                </label>
                <div style={{display:"flex"}}>
                    <label className={"label"}> Autoplay </label>
                    <Switch style={{marginTop:"10px"}} checked={autoPlay} onChange={onChangeAutoPlay}/>
                </div>
                <div className={"hotkeys"}>
                    <Title level={2}>Hotkeys</Title>
                    <div>
                        <Button type={"dashed"} size={"large"}>CTRL + Z</Button>
                        <Typography.Text keyboard>Back to homepage</Typography.Text>
                    </div>
                    <div>
                        <Button type={"dashed"} size={"large"}>CTRL + X</Button>
                        <Typography.Text keyboard>Settings</Typography.Text>
                    </div>
                    <div>
                        <Button type={"dashed"} size={"large"}>CTRL + C</Button>
                        <Typography.Text keyboard>Stats</Typography.Text>
                    </div>
                    <div>
                        <Button type={"dashed"} size={"large"}>CTRL + V</Button>
                        <Typography.Text keyboard>Refresh your board</Typography.Text>
                    </div>
                    <div>
                        <Button type={"dashed"} size={"large"}>CTRL + ENTER</Button>
                        <Typography.Text keyboard>Start game</Typography.Text>
                    </div>

                </div>

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
}

export default Setting