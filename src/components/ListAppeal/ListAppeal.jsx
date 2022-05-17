import classes from "./ListAppeal.module.css"
import classesAppeal from "./Appeal/Appeal.module.css"
import Appeal from "./Appeal/Appeal";
import MySelect from "../UI/Select/MySelect";
import {useState} from "react";

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
    return(
        <div className={classes.applications}>
            <div className={ `${classesAppeal.appealInner} ${classes.top}`}>
                <ul className={classesAppeal.appealItems}>
                    <li className={`${classesAppeal.appealItem} ${classes.topItem}`}>Фамилия</li>
                    <li className={`${classesAppeal.appealItem} ${classes.topItem}`}>Имя</li>
                    <li className={`${classesAppeal.appealItem} ${classes.topItem}`}>Имя компьютера</li>
                    <li className={`${classesAppeal.appealItem} ${classes.topItem} ${classesAppeal.appealItemMessage}`}>Проблема</li>
                    <li className={`${classesAppeal.appealItem} ${classes.topItem}`}>Дата</li>
                </ul>
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