import React from "react";
import TaskCard from "./task-card/TaskCard";
import "./TaskList.scss";
import { Container } from "react-bootstrap";
import { TaskListProps } from "@src/customTypes/types";

const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
    return (
        <Container>
            {taskList.map((tsk) => (
                <TaskCard key={tsk.id} task={tsk} />
            ))}
        </Container>
    );
};

export default TaskList;
