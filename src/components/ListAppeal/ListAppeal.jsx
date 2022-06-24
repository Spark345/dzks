import classes from "./ListAppeal.module.css"
import classesAppeal from "./Appeal/Appeal.module.css"
import Appeal from "./Appeal/Appeal";
import MySelect from "../UI/Select/MySelect";
import {useEffect, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import MyButton from "../UI/Button/MyButton";
import Preloader from "../UI/Preloader/Preloader.jsx";



const ListAppeal = (props) =>{
    const [selectedSort, setSelectedSort] = useState('')

    useEffect(()=>{
        if(props.userId === 1 && props.appeals){
            props.getAppeals()

        }
        else {
            if(props.userId !== 1 && props.appeals && props.userId !== null){
                props.getUserAppeals(props.userId)
            }

        }

    },[])

    useEffect(()=>{

        if(props.userId === 1 && props.appealsArchive){
            props.getArchiveAppeals()
        }


    },[])


    const sortAppeal = (name) => {
        setSelectedSort(name)
        console.log(name)
        if(name === "status"){
            props.setAppealBool(name)
        }
        if(name === "lastName" || name === "name"){
            props.setAppealStr(name)
        }
        if(name === "date"){
            props.setAppealDate(name)
        }
        if(name === "levelUrgency"){
            props.setAppealUrgency(name)
        }

    }
    let logoutUser = () =>{
        props.logoutUser()
    }

    if(props.userId == null)  return <Navigate to = "/login"/>
    return(
        props.isFetching === false
            ? <div className={classes.applications}>
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
                                      {value: 'name', name: 'По имени'},
                                      {value: 'date', name: 'По дате'},
                                      {value: 'levelUrgency', name: 'По срочности'},
                                      {value: 'status', name: 'По статусу'},
                                  ]
                              }
                    />
                    {
                        props.userId === 1 && props.appeals
                            ? <div className={classes.link}>
                                <MyButton>
                                    <Link className={classes.linkItem} to="/archiveAppeal">Архив</Link>
                                </MyButton>
                            </div>
                            : <div className={classes.link}>
                                <MyButton>
                                    <Link className={classes.linkItem} to="/listAppeal">Заявки</Link>
                                </MyButton>
                            </div>
                    }


                </div>
                {
                    props.appealsArchive
                        ? props.appealsArchive.map((appeal)=>
                            <Appeal lastName = {appeal.lastName}
                                    Name = {appeal.name}
                                    computerName = {appeal.computerName}
                                    message = {appeal.message}
                                    Date = {appeal.date}
                                    levelUrgency = {appeal.levelUrgency}
                                    status = {appeal.status}
                                    inspect = {appeal.inspect}
                                    appealId = {appeal.id}
                                    updateStatus = {props.updateStatus}
                                    userId = {props.userId}
                            />
                            )
                        : props.appeals.map((appeal)=>
                            <Appeal lastName = {appeal.lastName}
                            Name = {appeal.name}
                            computerName = {appeal.computerName}
                            message = {appeal.message}
                            Date = {appeal.date}
                            levelUrgency = {appeal.levelUrgency}
                            status = {appeal.status}
                            inspect = {appeal.inspect}
                            appealId = {appeal.id}
                            updateStatus = {props.updateStatus}
                            userId = {props.userId}
                            />
                             )
                }
            </div>
            : <Preloader />
    );
}

export default ListAppeal;
