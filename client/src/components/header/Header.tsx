import React, { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import "./Header.scss";
import TaskForm from "@components/task-form/TaskForm";

const Header: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            <TaskForm
                modalId="add-task"
                show={showForm}
                setShow={setShowForm}
            />
            <Navbar className="custom-nav">
                <Container>
                    <Navbar.Brand>Brand</Navbar.Brand>
                    <Button
                        onClick={() => {
                            setShowForm(true);
                        }}
                    >
                        Add a Task
                    </Button>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
