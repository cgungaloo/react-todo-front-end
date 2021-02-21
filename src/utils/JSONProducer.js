
export function generateFullToDoJsonString(newToDoString, status) {
    const toDoJSONObj = {
        item: newToDoString,
        status: status
    }
    const toDoJSONStr = JSON.stringify(toDoJSONObj);
    return toDoJSONStr;
}

export function generateTaskOnlyJsonString(task){
    const toDoJSONObj = {
        item: task
    }
    const toDoJSONStr = JSON.stringify(toDoJSONObj);
    return toDoJSONStr;
}

export function generateRequestOptions(requestType, requestString){
    const requestOptions = {
        method: requestType,
        headers: {
            'Content-Type': 'application/json',
        },
        body: requestString
    };
    return requestOptions;

}