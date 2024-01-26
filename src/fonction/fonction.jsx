export async function sendDataToApi(url, data, method){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const body = JSON.stringify(data);
    const response = await fetch(url, {
       method: method,
       headers: headers,
       body: body 
    });

    if(!response.ok){
        throw new Error('HTTP error! status: $(response.status)')
    }

    console.log("response", response);
    const responseData = await response.json();
    return responseData;
}