// axios vs fetch
const axios = require("axios");
function main()
{
    fetch("https://sum-server.100xdevs.com/todos").then(async(respose)=>{
        const json = await response.json();
        console.log(json.todos.length);
        // await response text
    });
}

// using axios

async function main(){
    const response = await axios.get("https://sum-server.100xdevs.com/todos")
    console.log(response.data.todos.length);
}