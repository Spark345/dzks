import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import {Route, Routes} from "react-router-dom";
import CreateAppealContainer from "./components/CreateAppeal/CreateAppealContainer";
import {ListAppealContainer} from "./components/ListAppeal/ListAppealContainer";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/appeal'} element={<CreateAppealContainer {...props} />}/>
                    <Route path={'/listAppeal'} element={<ListAppealContainer/>}/>
                </Routes>
            </div>
        </div>
    );

}

export default App;
