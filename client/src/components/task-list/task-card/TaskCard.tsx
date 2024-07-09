import React, { useState } from "react";
import "./TaskCard.scss";
import { TaskCardProps } from "@customTypes/types";
import editIcon from "@assets/edit-icon.svg";
import { Image } from "react-bootstrap";
import TaskForm from "@components/task-form/TaskForm";

const status: { [key: string]: string } = {
    done: "Done",
    "in-progress": "In progress",
    "to-do": "To do",
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            <div className="task-card">
                <div>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
                <p>{status[task.status]}</p>
                <Image
                    src={editIcon}
                    onClick={() => {
                        setShowForm(true);
                    }}
                />
            </div>
            <TaskForm
                show={showForm}
                setShow={setShowForm}
                modalId="update-task"
                task={task}
            />
        </>
    );
};

export default TaskCard;
