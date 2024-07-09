import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./TaskFilterBar.scss";
import { TaskFilterBarProps } from "@customTypes/types";

const TaskFilterBar: React.FC<TaskFilterBarProps> = ({
    listName,
    onSelectChange,
    searchText,
    setSearchText,
    searchHandler,
}) => {
    return (
        <Container className="task-controls">
            <div className="task-search-bar">
                <h4>Task List</h4>
                <div className="search-input-box">
                    <Form.Control
                        placeholder="Search..."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <Button variant="outline-secondary" onClick={searchHandler}>
                        Search
                    </Button>
                </div>
            </div>
            <div className="task-filter-box">
                <span>Show:</span>
                <Form.Select value={listName} onChange={onSelectChange}>
                    <option value="all">All</option>
                    <option value="custom" hidden>
                        Custom
                    </option>
                    <option value="to-do">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                </Form.Select>
            </div>
        </Container>
    );
};

export default TaskFilterBar;
