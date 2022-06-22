import {connect} from "react-redux";
import Sidebar from "./Sidebar";



const mapStateToProps = (state) =>{
    return{
        userId: state.loginPage.userId
    }

}
const mapDispatchToProps = (dispatch) =>{
    return{
        rrr: () => {

    }
    }
}
export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(<Sidebar />)