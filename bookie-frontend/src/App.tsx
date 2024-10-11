import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TabNavigation from "./TabNavigation/TabNavigation";
import MainPage from "./MainPage/MainPage";
import TBRPage from "./TBRPage/TBRPage";
import ReadPage from "./ReadPage/ReadPage";

function App() {
    return(
        <Router>
            <TabNavigation />
            <Routes>
                <Route path="/home" element={<MainPage />} />
                <Route path="/tbr" element={<TBRPage />}/>
                <Route path="/read" element={<ReadPage />}/>
                
                <Route path="*" element={<MainPage />} />
            </Routes>
        </Router>
    );
}

export default App;