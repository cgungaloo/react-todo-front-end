import React from 'react';

const ToDoList = (props) => {
    const { tasks } = props;
    if (!tasks || tasks.length === 0) return <p>You have nothing to do!</p>

    return (
        <div>
            <h3>You have : {tasks.count} tasks</h3>
            {tasks.items.map((task) => {
                return (
                    <div class="container p-3 my-3 bg-primary text-white">
                        <p class="display-4">{task[0]} :{task[1]} </p>
                        <button onClick={() => props.deleteToDo(task[0])}>Delete</button>
                        <select
                            id="myselect"
                            onChange={(e) => props.updateToDo(task[0], e)}
                            value = {task[1]}>
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
    )
})}
        </div >
    )
};
export default ToDoList;
