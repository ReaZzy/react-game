import React from "react";
import {Button, Table} from "antd";
import {useSelector} from "react-redux";
import {getGames} from "../../redux/selectors/selectors";
import {ArrowLeftOutlined} from "@ant-design/icons/lib";
import { useHistory } from "react-router-dom";

const Stats: React.FC<{}> = React.memo(() => {
    const history = useHistory()
    const back = () => {history.goBack()}
    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Win/lose',
            dataIndex: 'winOrLose',
            render: (text:any)=> <div style={{color: text==="win" ? "#4BB462" : "#FF0000"}}>{text}</div>
        },
        {
            title: 'Board size',
            dataIndex: 'boardSize',
        },
        {
            title: 'Difficulty',
            dataIndex: 'difficulty',
        },
        {
            title: 'Time',
            dataIndex: 'time',
        },
        {
            title: 'Score',
            dataIndex: 'score',
        },
    ];
    const data = useSelector(getGames)

    return (
        <div className={`menu settings`} style={{overflow:"auto"}}>
            <div >
                {/*@ts-ignore*/}
                <Table columns={columns} dataSource={data} pagination={{ position: ["none", "none"] }}/>
                <Button style={
                    {width:"100%"}
                } className={"reset"} onClick={()=>{back()}} type="primary">
                    <ArrowLeftOutlined />
                </Button>
            </div>

        </div>
    )
})

export default Stats