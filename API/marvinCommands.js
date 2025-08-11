async function APICall (url){
    let data;
    try {
        const response = await fetch("https://serv.amazingmarvin.com/api/" + url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    return await data;
}

async function fetchTasks (type){
    let tasks = [];
    if (type == "today") {
        const raw = await APICall("todayItems");
    }
}