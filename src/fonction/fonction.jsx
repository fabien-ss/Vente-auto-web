export async function sendDataToApi(url, data, method){
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);
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


export async function sendGetRequest(url, data, method) {
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);
    const fetchOptions = {
        method: method,
        headers: headers,
    };

    // Only add the body for methods that typically include a body
    if (method !== 'GET' && method !== 'HEAD') {
        fetchOptions.body = JSON.stringify(data);
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("response", response);

    // For methods that do not expect a body in the response, like HEAD, you might not want to call .json()
    if (method !== 'HEAD') {
        const responseData = await response.json();
        return responseData;
    }

    // If there's no body, you might return something else, like the status or headers
    return response.status;
}