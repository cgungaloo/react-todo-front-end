import React from 'react';

const PostToDo = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
        <label>
            New Item 
            <input type="text" id="newToDo" onChange={e => e.target.value}/>
        </label>
        <input type="submit" value="Submit"/>
    </form>
    )
}
export default PostToDo;