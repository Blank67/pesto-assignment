import HomePage from "@pages/HomePage";
import Header from "@components/header/Header";
import PageLoader from "@components/pageLoader/PageLoader";
import { Container } from "react-bootstrap";

const App = () => {
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
