import Header from "./Components/Header/Header";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Router />
            </BrowserRouter>
        </div>
    );
}

export default App;
