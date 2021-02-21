
export async function makeCall(endPoint, requestOptions){
    const response  = await fetch(endPoint, requestOptions)
    const responseJSON = await response.json();
    return responseJSON;
}