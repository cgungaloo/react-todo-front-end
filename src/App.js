import React, { useEffect, useState } from 'react';
import ToDoList from './components/ToDoList';
import withTasksLoading from './components/WithTasksLoading';
import PostToDo from './components/PostToDo';
import './App.css';
import Header from './components/Header';

function App() {
  const TaskLoading = withTasksLoading(ToDoList);
  const [appState, setAppState] = useState({
    loading: false,
    tasks: null,
  });

  function getTasks(){
    const apiUrl = 'http://127.0.0.1:5000/items';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((tasks) => {
        setAppState({ loading: false, tasks: tasks })
      });
  }

  useEffect(() => {
    setAppState({ loading: true });
    getTasks();
  }, [setAppState]);

  function handleSubmit(evt) {
    const { newToDo } = evt.target.elements
    
    evt.preventDefault();
    const newToDoJSONObj = {
      item: newToDo.value,
      status: 'Not Started'
    }
    const newToDoJSONStr = JSON.stringify(newToDoJSONObj);
    console.log("Submitting : " + newToDoJSONStr);
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newToDoJSONStr
    };

    fetch('http://127.0.0.1:5000/item/new', requestOptions)
      .then(response => response.json()
        .then((tasks) => {
          getTasks();
        })
      );
  }

  function deleteToDo(toDo){
    const deleteToDoJSONObj = {
      item: toDo,
    }
    const deleteToDoStr = JSON.stringify(deleteToDoJSONObj);
    console.log("Deleting : " + deleteToDoStr);

    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: deleteToDoStr
    };

    fetch('http://127.0.0.1:5000/item/delete', requestOptions)
      .then(response => response.json()
        .then((tasks) => {
          getTasks();
        })
      );
  }

  function updateToDo(task,e){
    const updateToDoJSONObj = {
      item: task,
      status: e.target.value
    }
    const updateToDoStr = JSON.stringify(updateToDoJSONObj);
    console.log("Updating  : " + updateToDoStr);

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: updateToDoStr
    };    

    fetch('http://127.0.0.1:5000/item/update', requestOptions)
      .then(response => response.json()
        .then((tasks) => {
          getTasks();
        })
      );

  }

  return (
    <div class="container p-3 my-3 border">
      <Header />
      <div class="jumbotron" style={{ backgroundcolor: '#E6E6FA' }}>
        <h1>My Tasks</h1>
      </div>
      <div>
        <PostToDo handleSubmit={handleSubmit} />
      </div>
      <div className='list-container'>
        <TaskLoading isLoading={appState.loading} tasks={appState.tasks} deleteToDo={deleteToDo} updateToDo={updateToDo}/>
      </div>
    </div>
  )
}

export default App;
