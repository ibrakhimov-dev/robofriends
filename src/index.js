import ReactDom from "react-dom";
import App from "./components/App";
import "tachyons";
import "./css/style.css";

ReactDom.render(
    <App/>,
    document.querySelector("#root")
);