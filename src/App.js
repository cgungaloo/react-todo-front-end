import React from 'react';
import ToDoList from './components/ToDoList';
import withTasksLoading from './components/WithTasksLoading';
import PostToDo from './components/PostToDo';
import './App.css';
import Header from './components/Header';
import ToDoController from './controllers/ToDoController';

function App() {

  const { newToDo, deleteToDo, updateToDo, appState } = ToDoController();
  const TaskLoading = withTasksLoading(ToDoList);

  return (
    <div>
      <div class="jumbotron-fluid">
        <h1>My To Do List</h1>
      </div>
      <div class="col-lg-12">
        <Header />
        <div>
          <PostToDo handleSubmit={newToDo} />
        </div>
        <div className='list-container'>
          <TaskLoading isLoading={appState.loading} tasks={appState.tasks} deleteToDo={deleteToDo} updateToDo={updateToDo} />
        </div>
      </div>
    </div>
  )
}

export default App;
