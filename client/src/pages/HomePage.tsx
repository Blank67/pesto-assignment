import React, { ChangeEvent, useEffect, useState } from "react";
import TaskList from "@components/task-list/TaskList";
import TaskFilterBar from "@components/task-filter-bar/TaskFilterBar";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import { TaskItem } from "@customTypes/types";

const HomePage: React.FC = () => {
    const [listName, setListName] = useState("all");
    const [searchText, setSearchText] = useState("");
    const allTaskList = useSelector(
        (state: RootState) => state.taskList.taskList
    );
    const [list, setList] = useState<TaskItem[]>([]);
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
        if (allTaskList.length > 0) {
            if (listName === "all") {
                setList(allTaskList);
                return;
            }
            if (listName === "custom") {
                const filterList = allTaskList.filter((tsk) =>
                    tsk.title.toLowerCase().includes(searchText.toLowerCase())
                );
                setList(filterList);
                return;
            }
            const filterList = allTaskList.filter(
                (tsk) => tsk.status === listName
            );
            setList(filterList);
        }
    }, [allTaskList, listName, searchText]);
    console.log("REDUX: ", allTaskList);
    console.log("LIST: ", list);
    console.log(listName);

    return (
        <>
            <TaskFilterBar
                listName={listName}
                onSelectChange={onSelectChange}
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <TaskList taskList={list} />
        </>
    );
};

export default HomePage;
