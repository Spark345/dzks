import classes from "./ListAppeal.module.css"
import classesAppeal from "./Appeal/Appeal.module.css"
import Appeal from "./Appeal/Appeal";
import MySelect from "../UI/Select/MySelect";
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";




const ListAppeal = (props) =>{
    const [selectedSort, setSelectedSort] = useState('')
    useEffect(()=>{
        if(props.userId === 1){
            props.getAppeals()
        }
        else {
            props.getUserAppeals(props.userId)
        }
    },[])
    let appealElement = props.appeals.map((appeal)=>
        <Appeal lastName = {appeal.lastName}
                Name = {appeal.name}
                computerName = {appeal.computerName}
                message = {appeal.message}
                Date = {appeal.date}
                levelUrgency = {appeal.levelUrgency}
                status = {appeal.status}
                appealId = {appeal.id}
                updateStatus = {props.updateStatus}
        />
    );
    const sortAppeal = (name) =>{
        setSelectedSort(name)
        // console.log(name)
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
    let logoutUser = () =>{
        props.logoutUser()
    }

    console.log(props)
    console.log(props.isFetching)
    if(props.userId == null)  return <Navigate to = "/login"/>
    return(
        <div className={classes.applications}>
            <div className={ `${classesAppeal.appealInner} ${classes.top}`}>
                <div className={`${classesAppeal.appealItems} ${classes.topItems}`}>
                    <span className={`${classesAppeal.appealItem} ${classes.topItem}`}>Фамилия</span>
                    <span className={`${classesAppeal.appealItem} ${classes.topItem}`}>Имя</span>
                    <span className={`${classesAppeal.appealItem} ${classes.topItem}`}>Имя компьютера</span>
                    <span className={`${classesAppeal.appealItem} ${classes.topItem} ${classesAppeal.appealItemMessage}`}>Проблема</span>
                    <span className={`${classesAppeal.appealItem} ${classesAppeal.appealItemDate} ${classes.topItem}`}>Дата</span>
                    <span className={`${classesAppeal.appealItem} ${classesAppeal.appealItemDate} ${classes.topItem}`}>Срочность</span>
                </div>
                <span className={`${classesAppeal.appealItem} ${classes.topItem} ${classesAppeal.statusItems}`}>Статус</span>
                <MySelect value={selectedSort}
                          Change={sortAppeal}
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
                {/*<button onClick={()=>{}}>Выйти</button>*/}
            </div>
            {
                props.isFetching === false
                    ? <div>{appealElement}</div>
                    : <div>Загрузка...</div>
            }
            {/*<button onClick={props.getAppeals}>fff</button>*/}
        </div>

    );
}

// export const ListAppealUser = (props) =>{
//
//     return{
//
//     }
// }

export default ListAppeal;
