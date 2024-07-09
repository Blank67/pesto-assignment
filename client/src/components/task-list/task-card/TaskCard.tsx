import React from "react";
import "./TaskCard.scss";
import { TaskCardProps } from "@src/customTypes/types";

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <div className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
        </div>
    );
};

export default TaskCard;
