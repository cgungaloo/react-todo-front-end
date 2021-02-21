import { useEffect, useState } from 'react';
import config from '../config/config.json'
import {generateFullToDoJsonString, generateRequestOptions, generateTaskOnlyJsonString} from '../utils/JSONProducer'
import {makeCall} from '../utils/RESTcalls'

const ToDoController =() =>{
    const [appState, setAppState] = useState({
        loading: false,
        tasks: null,
      });

      useEffect(() => {
        setAppState({ loading: true });
        getTasks();
      }, [setAppState]);

      function getTasks(){
        const apiUrl = config.host + '/items';
        makeCall(apiUrl, null).then((tasks) =>{
            setAppState({ loading: false, tasks: tasks })
        });
      }
      
      function newToDo(evt) {
        const { newToDo } = evt.target.elements
        evt.preventDefault();
        const newToDoJSONStr = generateFullToDoJsonString(newToDo.value, 'Not Started')
        const requestOptions = generateRequestOptions('POST',newToDoJSONStr);
        makeCall(config.host + '/item/new', requestOptions).then((tasks) =>{
            getTasks();
        })
      }

      function deleteToDo(toDo){
        const deleteToDoStr = generateTaskOnlyJsonString(toDo);
        const requestOptions = generateRequestOptions('DELETE', deleteToDoStr)
        console.log("Deleting : " + deleteToDoStr);
        makeCall(config.host + '/item/delete', requestOptions).then((tasks) =>{
            getTasks();
        })
      }
    
      function updateToDo(task,e){
        const updateToDoJSONStr = generateFullToDoJsonString(task, e.target.value)
        const requestOptions = generateRequestOptions('PUT',updateToDoJSONStr);
        makeCall(config.host + '/item/update', requestOptions).then((tasks) =>{
            getTasks();
        })
      }

    return {newToDo, deleteToDo, updateToDo, appState}
}
export default ToDoController;