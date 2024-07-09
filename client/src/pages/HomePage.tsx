import React, { ChangeEvent, useState } from "react";
import TaskList from "@components/task-list/TaskList";
import TaskFilterBar from "@src/components/task-filter-bar/TaskFilterBar";
import { useSelector } from "react-redux";
import { RootState } from "@src/store";

const HomePage: React.FC = () => {
    const [listName, setListName] = useState("all");
    const [searchText, setSearchText] = useState("");
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
