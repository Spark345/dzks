import classes from "./Sidebar.module.css"
import {Link} from "react-router-dom";

const Sidebar = (props) =>{
    console.log(props.loginPage)
    return(
        <nav className={classes.sideBar}>
            <div className={classes.title}><Link className={classes.linkItem} to="/">DZKS</Link></div>
            <div className={classes.link}><Link className={classes.linkItem} to="/appeal">Заявка</Link></div>
            <div className={classes.link}><Link className={classes.linkItem} to="/listAppeal">Список заявок</Link></div>

        </nav>
    );

}
export default Sidebar;