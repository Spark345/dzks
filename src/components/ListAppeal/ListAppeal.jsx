import classes from "./ListAppeal.module.css"
import classesAppeal from "./Appeal/Appeal.module.css"
import Appeal from "./Appeal/Appeal";
import MySelect from "../UI/Select/MySelect";
import {useState} from "react";
import {Navigate} from "react-router-dom";

const ListAppeal = (props) =>{
    const [selectedSort, setSelectedSort] = useState('')

    let appealElement = props.appeals.map((appeal)=>
        <Appeal lastName = {appeal.lastName}
                Name = {appeal.Name}
                computerName = {appeal.computerName}
                message = {appeal.message}
                Date = {appeal.Date}
                status = {appeal.status}
                appealId = {appeal.id}
                onOpenStatus = {props.onOpenStatus}
                onCloseStatus = {props.onCloseStatus}
        />
    );
    const sortAppeal = (name) =>{
        setSelectedSort(name)
        console.log(name)
        if(name === "status"){
            props.setAppealBool(name)
        }
        else{
            props.setAppealStr(name)
        }
        if(name === "Date"){
            props.setAppealDate(name)
        }

    }

    if(props.isAuth === false)  return <Navigate to = "/login"/>

    return(
        <div className={classes.applications}>
            <div className={ `${classesAppeal.appealInner} ${classes.top}`}>
                <div className={`${classesAppeal.appealItems} ${classes.topItems}`}>
                    <span className={`${classesAppeal.appealItem} ${classes.topItem}`}>Фамилия</span>
                    <span className={`${classesAppeal.appealItem} ${classes.topItem}`}>Имя</span>
                    <span className={`${classesAppeal.appealItem} ${classes.topItem}`}>Имя компьютера</span>
                    <span className={`${classesAppeal.appealItem} ${classes.topItem} ${classesAppeal.appealItemMessage}`}>Проблема</span>
                    <span className={`${classesAppeal.appealItem} ${classesAppeal.appealItemDate} ${classes.topItem}`}>Дата</span>
                </div>
                <span className={`${classesAppeal.appealItem} ${classes.topItem} ${classesAppeal.statusItems}`}>Статус</span>
                <MySelect value={selectedSort}
                          sortAppeal={sortAppeal}
                          defaultValue="Сортировка"
                          options={
                              [
                                  {value: 'lastName', name: 'По фамилии'},
                                  {value: 'Name', name: 'По имени'},
                                  {value: 'Date', name: 'По дате'},
                                  {value: 'status', name: 'По статусу'},
                              ]
                          }
                />
            </div>

            {appealElement}

        </div>

    );
}

export default ListAppeal;