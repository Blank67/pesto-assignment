import "./PageLoader.scss";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";

const PageLoader = () => {
    const isLoading = useSelector(
        (state: RootState) => state.loader.pageLoading
    );
    // TODO: Add loader GIF
    return (
        isLoading && (
            <div className="loading-backdrop">
                <div className="loading">
                    <Image />
                </div>
            </div>
        )
    );
};

export default PageLoader;
