import React from 'react';

const PostToDo = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div class="mb-3">
                <div class="new-form-container">
                    <div class="post-form-element">
                        <label class="form-label">
                            New Item
                        </label>
                    </div>
                    <div class="post-form-element">
                        <div class="form-text">
                            <input type="text" id="newToDo" class="form-control" onChange={e => e.target.value} />
                        </div>
                    </div>
                    <div class="post-form-element">
                        <input type="submit" class="btn btn-primary" value="Submit" />
                    </div>
                </div>
            </div>
        </form>
    )
}
export default PostToDo;