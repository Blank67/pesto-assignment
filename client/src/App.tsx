import HomePage from "@pages/HomePage";
import Header from "@components/header/Header";
import PageLoader from "@components/pageLoader/PageLoader";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMasterData } from "./store/taskList-slice/TaskListSlice";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const dataJSON = localStorage.getItem("tsk_data");
        if (!dataJSON) {
            localStorage.setItem("tsk_data", JSON.stringify([]));
        } else {
            const data = JSON.parse(dataJSON);
            dispatch(setMasterData({ taskList: data }));
        }
    }, [dispatch]);
    return (
        <>
            <Header />
            <Container className="box-shadow rounded">
                <HomePage />
            </Container>
            <PageLoader />
        </>
    );
};

export default App;
