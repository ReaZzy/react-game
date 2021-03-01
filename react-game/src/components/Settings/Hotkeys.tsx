import Title from "antd/lib/typography/Title";
import {Button, Typography} from "antd";
import React from "react";

export const Hotkeys =React.memo(() => {
    return(
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
    )
})