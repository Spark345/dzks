import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import {Route, Routes, Navigate} from "react-router-dom";
import CreateAppealContainer from "./components/CreateAppeal/CreateAppealContainer";
import {ListAppealContainer} from "./components/ListAppeal/ListAppealContainer";
import {LoginContainer} from "./components/Login/LoginContainer";
import {RegisterContainer} from "./components/Register/RegisterContainer";
import {ArchiveAppealsContainer} from "./components/ListAppeal/ArchiveAppealsContainer";

function App(props) {
    console.log(props)
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar />
            <div className="app-wrapper-content">
                <Routes>
                    {/*<Route path={'/'} element={<Navigate to={'/appeal'} />}/>*/}
                    <Route path={'/appeal'} element={<CreateAppealContainer {...props} />}/>
                    <Route path={'/listAppeal'} element={<ListAppealContainer/>}/>
                    <Route path={'/archiveAppeal'} element={<ArchiveAppealsContainer/>}/>
                    <Route path={'/login'} element={<LoginContainer/>}/>
                    <Route path={'/register'} element = {<RegisterContainer/>} />
                </Routes>
            </div>
        </div>
    );

}

export default App;
