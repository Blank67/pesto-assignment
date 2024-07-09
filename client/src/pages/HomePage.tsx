import React, { ChangeEvent, useEffect, useState } from "react";
import TaskList from "@components/task-list/TaskList";
import TaskFilterBar from "@components/task-filter-bar/TaskFilterBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { setMasterData } from "@store/taskList-slice/TaskListSlice";

const HomePage: React.FC = () => {
    const [listName, setListName] = useState("all");
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();
    const allTaskList = useSelector(
        (state: RootState) => state.taskList.taskList
    );
    const [list, setList] = useState(allTaskList);
    const searchHandler = () => {
        const filterList = list.filter((tsk) =>
            tsk.title.toLowerCase().includes(searchText)
        );
        setList(filterList);
        setListName("custom");
    };
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setListName(value);
        setSearchText("");
        if (value === "all") {
            setList(allTaskList);
        } else {
            const filterList = allTaskList.filter(
                (tsk) => tsk.status === value
            );
            setList(filterList);
        }
    };
    useEffect(() => {
        const dataJSON = localStorage.getItem("tsk_data");
        if (!dataJSON) {
            localStorage.setItem("tsk_data", JSON.stringify([]));
        } else {
            const data = JSON.parse(dataJSON);
            dispatch(setMasterData({ taskList: data }));
            setList(data);
        }
    }, [dispatch]);
    useEffect(() => {
        setList(allTaskList);
    }, [allTaskList]);
    return (
        <>
            <TaskFilterBar
                listName={listName}
                onSelectChange={onSelectChange}
                searchText={searchText}
                setSearchText={setSearchText}
                searchHandler={searchHandler}
            />
            <TaskList taskList={list} />
        </>
    );
};

export default HomePage;
