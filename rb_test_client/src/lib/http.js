

const http = async (url, method="GET", body=null, headers={}) => {
    try {
        if (body) {
            body = JSON.stringify(body);
            headers["Content-Type"] = "application/json";
        }

        const response = await fetch(url, { method, body, headers }); 

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Request error.");
        }

        return await data;
    } catch (err) {
        console.error(`Error: ${err}`);
        throw err;
    }
}

export default http;