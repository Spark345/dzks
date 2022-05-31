import classes from "./Header.module.css"
import headerImg from  "../../assetc/images/dva_kapitana.jpg"

const Header = (props) =>{
    return(
        <div className={classes.header}>
            <img className={classes.img} src={headerImg} alt=""/>
        </div>
    );
}

export default Header;