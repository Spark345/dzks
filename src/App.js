import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import {Route, Routes, Navigate} from "react-router-dom";
import CreateAppealContainer from "./components/CreateAppeal/CreateAppealContainer";
import {ListAppealContainer} from "./components/ListAppeal/ListAppealContainer";
import {LoginContainer} from "./components/Login/LoginContainer";

function App(props) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/appeal'} />}/>
                    <Route path={'/appeal'} element={<CreateAppealContainer {...props} />}/>
                    <Route path={'/listAppeal'} element={<ListAppealContainer/>}/>
                    <Route path={'/login'} element={<LoginContainer/>}/>
                </Routes>
            </div>
        </div>
    );

}

export default App;
