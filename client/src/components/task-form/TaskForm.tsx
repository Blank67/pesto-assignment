import React, { ChangeEvent, useState } from "react";
import "./TaskForm.scss";
import { Button, Form, Modal } from "react-bootstrap";
import { TaskFormProps } from "@src/customTypes/types";
import { randomIdGenerator } from "@src/utils/utils";
import { useDispatch } from "react-redux";
import { addTask } from "@src/store/taskList-slice/TaskListSlice";

const TaskForm: React.FC<TaskFormProps> = ({ show, setShow }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "",
    });
    const [formDataValid, setFormDataValid] = useState({
        title: true,
        description: true,
        status: true,
    });
    const formChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        let { value } = e.target;
        value = value.trimStart();
        if (value.length !== 0) {
            value = value.charAt(0).toUpperCase() + value.slice(1);
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFormDataValid((prev) => ({ ...prev, [name]: true }));
    };
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setFormData((prev) => ({ ...prev, status: value }));
        setFormDataValid((prev) => ({ ...prev, status: true }));
    };
    const validateFormData = () => {
        const { title, description, status } = formData;
        const titleValid = title.trim()?.length > 0;
        const descriptionValid = description.trim()?.length > 0;
        const statusValid = status.trim()?.length > 0;
        if (!titleValid || !descriptionValid || !statusValid) {
            setFormDataValid({
                title: titleValid,
                description: descriptionValid,
                status: statusValid,
            });
            return false;
        }
        setFormDataValid({
            title: true,
            description: true,
            status: true,
        });
        return true;
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateFormData();
        if (!isValid) {
            return;
        }
        const taskObject = {
            ...formData,
            id: randomIdGenerator(),
        };
        dispatch(addTask({ task: taskObject }));
        hideFormHandler();
    };
    const hideFormHandler = () => {
        setFormData({
            title: "",
            description: "",
            status: "",
        });
        setFormDataValid({
            title: true,
            description: true,
            status: true,
        });
        setShow(false);
    };
    return (
        <Modal
            show={show}
            onHide={hideFormHandler}
            centered
            id="add-task"
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>Create a task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="add-task-form" onSubmit={handleSubmit}>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={formChangeHandler}
                        placeholder="Title"
                        className={formDataValid.title ? "" : "error-border"}
                    />
                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        name="description"
                        value={formData.description}
                        onChange={formChangeHandler}
                        className={
                            formDataValid.description ? "" : "error-border"
                        }
                    />
                    <Form.Select
                        name="status"
                        value={formData.status}
                        onChange={onSelectChange}
                        className={formDataValid.status ? "" : "error-border"}
                    >
                        <option value="" disabled hidden>
                            Select status
                        </option>
                        <option value="to-do">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                    </Form.Select>
                    <Button type="submit" className="submit-btn">
                        Create
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default TaskForm;
